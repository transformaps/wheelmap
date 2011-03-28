require 'i18n'


module Rack
  class I18nLocaleSwitcher
    
    def initialize(app)
      @app = app
    end
    
    def call(env)
      request = Rack::Request.new env
      session = request.session
      
      locale = extract_locale_from_path_or_params(request)

      if locale == I18n.default_locale
        session["locale"] = locale
        path = request.fullpath.gsub(/\/#{locale}\b/, '')
        return [ 302, {'Location'=> "#{request.scheme}://#{request.host_with_port}#{path}" }, [] ] 
      end
      
      session["locale"] = locale if is_present?(locale)
      session["locale"] = first_http_accept_language(env) unless is_present?(session["locale"])
      
      I18n.locale = session["locale"]
      
      @app.call cleanup_env(env)
    end

    private
    
    def is_available?(locale)
      locale ? I18n.available_locales.include?(locale.to_sym) : false
    end

    def extract_locale_from_params(request)
      locale = request.params["locale"]
      locale if is_available?(locale)
    end
    
    def extract_locale_from_path(request)
      locale = request.path_info.split("/")[1]
      locale if is_available?(locale)
    end
    
    def extract_locale_from_path_or_params(request)
      symbolize_locale( extract_locale_from_path(request) || extract_locale_from_params(request) )
    end
        
    def cleanup_env env
      %w{REQUEST_URI REQUEST_PATH PATH_INFO}.each do |key|
        if is_present?(env[key]) && env[key].length > 1 && tmp = env[key].split("/")
          tmp.delete_at(1) if tmp[1] =~ %r{^([a-zA-Z]{2})$}
          env[key] = tmp.join("/")
        end
      end
      env
    end
    
    def first_http_accept_language(env)
      if lang = env["HTTP_ACCEPT_LANGUAGE"]
        lang = lang.split(",").map { |l|
          l += ';q=1.0' unless l =~ /;q=\d+\.\d+$/
          l.split(';q=')
        }.first
        locale = symbolize_locale(lang.first.split("-").first)
      else
        locale = nil
      end
      is_available?(locale) ? locale : I18n.available_locales
    end
    
    def is_present?(value)
      !value.to_s.empty?
    end
    
    def symbolize_locale(locale)
      is_present?(locale) ?  locale.to_s.downcase.to_sym : locale
    end
  
  end

end