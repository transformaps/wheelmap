I18n.translations || (I18n.translations = {});
I18n.translations["no"] = I18n.extend((I18n.translations["no"] || {}), {
  "actions": {
    "cancel": "",
    "next": "",
    "save": "",
    "send": ""
  },
  "active_admin": {
    "access_denied": {
      "message": "You are not authorized to perform this action."
    },
    "any": "Any",
    "batch_actions": {
      "action_label": "%{title} Selected",
      "button_label": "Batch Actions",
      "default_confirmation": "Are you sure you want to do this?",
      "delete_confirmation": "Are you sure you want to delete these %{plural_model}? You won't be able to undo this.",
      "labels": {
        "destroy": "Delete"
      },
      "link": "Create one",
      "selection_toggle_explanation": "(Toggle Selection)",
      "succesfully_destroyed": {
        "one": "Successfully destroyed 1 %{model}",
        "other": "Successfully destroyed %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "There are no %{resource_name} yet.",
      "link": "Create one"
    },
    "cancel": "Cancel",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Add Comment",
      "author": "Author",
      "author_missing": "Anonymous",
      "author_type": "Author Type",
      "body": "Body",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Comment wasn't saved, text was empty."
      },
      "no_comments_yet": "No comments yet.",
      "resource": "Resource",
      "resource_type": "Resource Type",
      "title": "Comment",
      "title_content": "Comments (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Dashboard",
    "dashboard_welcome": {
      "call_to_action": "To add dashboard sections, checkout 'app/admin/dashboards.rb'",
      "welcome": "Welcome to Active Admin. This is the default dashboard page."
    },
    "delete": "Delete",
    "delete_confirmation": "Are you sure you want to delete this?",
    "delete_model": "Delete %{model}",
    "details": "%{model} Details",
    "devise": {
      "change_password": {
        "submit": "Change my password",
        "title": "Change your password"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Forgot your password?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Sign in",
        "sign_in_with_omniauth_provider": "Sign in with %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Remember me",
        "submit": "Login",
        "title": "Login"
      },
      "password": {
        "title": "Password"
      },
      "resend_confirmation_instructions": {
        "submit": "Resend confirmation instructions",
        "title": "Resend confirmation instructions"
      },
      "reset_password": {
        "submit": "Reset My Password",
        "title": "Forgot your password?"
      },
      "sign_up": {
        "submit": "Sign up",
        "title": "Sign up"
      },
      "subdomain": {
        "title": "Subdomain"
      },
      "unlock": {
        "submit": "Resend unlock instructions",
        "title": "Resend unlock instructions"
      },
      "username": {
        "title": "Username"
      }
    },
    "download": "Download:",
    "dropdown_actions": {
      "button_label": "Actions"
    },
    "edit": "Edit",
    "edit_model": "Edit %{model}",
    "empty": "Empty",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Clear Filters",
        "filter": "Filter"
      },
      "predicates": {
        "contains": "Contains",
        "ends_with": "Ends with",
        "equals": "Equals",
        "greater_than": "Greater than",
        "less_than": "Less than",
        "starts_with": "Starts with"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Delete",
    "has_many_new": "Add New %{model}",
    "has_many_remove": "Remove",
    "index_list": {
      "block": "List",
      "blog": "Blog",
      "grid": "Grid",
      "table": "Table"
    },
    "less_than": "Less Than",
    "logout": "Logout",
    "main_content": "Please implement %{model}#main_content to display content.",
    "new_model": "New %{model}",
    "next": "Next",
    "pagination": {
      "empty": "No %{model} found",
      "entry": {
        "one": "entry",
        "other": "entries"
      },
      "multiple": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{total}</b> in total",
      "multiple_without_total": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Displaying <b>1</b> %{model}",
      "one_page": "Displaying <b>all %{n}</b> %{model}"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Previous",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Filters",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "No",
      "yes": "Yes"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "View"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "",
        "address_city": "",
        "address_housenumber": "",
        "address_postcode": "",
        "address_street": "",
        "name": "",
        "note": "",
        "phone": "",
        "type": "",
        "website": ""
      },
      "user": {
        "first_name": "Given name",
        "last_name": "Last name",
        "privacy_policy": "Privacy policy",
        "terms": "Terms"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "must be accepted",
        "blank": "can't be blank",
        "confirmation": "doesn't match confirmation",
        "empty": "can't be empty",
        "equal_to": "must be equal to %{count}",
        "even": "must be even",
        "exclusion": "is reserved",
        "greater_than": "must be greater than %{count}",
        "greater_than_or_equal_to": "must be greater than or equal to %{count}",
        "inclusion": "is not included in the list",
        "invalid": "is invalid",
        "less_than": "must be less than %{count}",
        "less_than_or_equal_to": "must be less than or equal to %{count}",
        "not_a_number": "is not a number",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "must be odd",
        "record_invalid": "Validation failed: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "has already been taken",
        "too_long": "is too long (maximum is %{count} characters)",
        "too_short": "is too short (minimum is %{count} characters)",
        "wrong_length": "is the wrong length (should be %{count} characters)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "can't be blank if password is given"
            },
            "privacy_policy": {
              "accepted": "must be accepted"
            },
            "terms": {
              "accepted": "must be accepted"
            }
          }
        },
        "user_session": {
          "email": "Email address",
          "password": "Password",
          "remember_me": "Stay logged in"
        }
      },
      "template": {
        "body": "There were problems with the following fields:",
        "header": {
          "one": "1 error prohibited this %{model} from being saved",
          "other": "%{count} errors prohibited this %{model} from being saved"
        }
      }
    },
    "models": {
      "user": "User"
    }
  },
  "apipie": {
    "api_documentation": "API documentation",
    "comments_powered_by_disqus": "comments powered by %{disqus}",
    "description": "Description",
    "enable_javascript_html": "Please enable JavaScript to view the %{comments_href}.",
    "error_code": "Code",
    "error_description": "Description",
    "error_metadata": "Metadata",
    "errors": "Errors",
    "examples": "Examples",
    "follow_instructions_href": "further instructions",
    "follow_instructions_html": "Follow %{href} on how to describe your controllers.",
    "goto_homepage_href": "%{app_name} API documentation homepage",
    "goto_homepage_html": "Try going to %{href}",
    "header_name": "Header name",
    "headers": "Headers",
    "metadata": "Metadata",
    "method_not_found_html": "Method %{method} not found for resource %{resource}.",
    "nil_allowed": "nil allowed",
    "no_docs_found": "No documentation found",
    "no_docs_found_descr": "We have not found any documentation for your API.",
    "oops": "Oops!!",
    "optional": "optional",
    "param_name": "Param name",
    "params": "Params",
    "required": "required",
    "resource": "Resource",
    "resource_not_found_html": "Resource %{resource} not found.",
    "resources": "Resources",
    "supported_formats": "Supported Formats"
  },
  "application": {
    "require_no_user": {
      "notice": "You’re already logged in…"
    },
    "require_user": {
      "notice": "You must be logged in to see this page."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Add a new place",
      "edit": "Edit place"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "close",
    "skip": "skip"
  },
  "date": {
    "abbr_day_names": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "abbr_month_names": [
      "",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "about 1 hour",
        "other": "about %{count} hours"
      },
      "about_x_months": {
        "one": "about 1 month",
        "other": "about %{count} months"
      },
      "about_x_years": {
        "one": "about 1 year",
        "other": "about %{count} years"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "half a minute",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "over 1 year",
        "other": "over %{count} years"
      },
      "x_days": {
        "one": "1 day",
        "other": "%{count} days"
      },
      "x_minutes": {
        "one": "1 minute",
        "other": "%{count} minutes"
      },
      "x_months": {
        "one": "1 month",
        "other": "%{count} months"
      },
      "x_seconds": {
        "one": "1 second",
        "other": "%{count} seconds"
      }
    },
    "prompts": {
      "day": "Day",
      "hour": "Hour",
      "minute": "Minute",
      "month": "Month",
      "second": "Seconds",
      "year": "Year"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Your email address was successfully confirmed.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "In a few minutes you will receive an email with a link to confirm your email address.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Are you sure?",
      "headline": "Delete account",
      "link": "Delete now"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Current password <i>(we need it to confirm your changes)</i>",
          "email": "Email",
          "password": "Password <i>(leave empty if you don\\'t want to change it)</i>",
          "password_confirmation": "Repeat password"
        },
        "submit": "Save changes"
      },
      "headline": "Edit account"
    },
    "failure": {
      "already_authenticated": "You are already signed in.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Invalid email or password.",
      "invalid_token": "Invalid authentication token",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Your account is locked",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "You need to sign in or sign up before continuing",
      "unconfirmed": "You need to confirm your account before continuing."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "One more step to activate your account"
      },
      "reset_password_instructions": {
        "subject": "Reset password instructions"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* Required",
    "omniauth_callbacks": {
      "failure": "Authorization with %{kind} failed. Error: \"%{reason}\". ",
      "permission_missing": "You did not grant the required permission.",
      "success": "Successfully logged in with %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Email"
        },
        "submit": "Reset password"
      },
      "headline": "Forgot password?"
    },
    "password_reset": {
      "email": {
        "comment": "If you did not request a password reset, just ignore this email.<br/>Your password won\\'t be changed unless you click on the link above and set a new password.",
        "headline": "Welcome %{email}",
        "link": "Change my password",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "New password",
          "password_confirmation": "Repeat password"
        },
        "submit": "Reset password"
      },
      "headline": "Reset password"
    },
    "passwords": {
      "link": "Forgot password?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Your password was changed successfully, you are now logged in",
      "updated_not_active": "Your password was changed successfully"
    },
    "registrations": {
      "destroyed": "Bye! Your account was successfully cancelled. We hope to see you again soon.",
      "inactive_signed_up": "You have signed up successfully, but we could not log you in. Reason: \"%{reason}\"",
      "link": "Sign up",
      "reasons": {
        "inactive": "inactive",
        "locked": "locked",
        "unconfirmed": "unconfirmed"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "You have updated your account successfully."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Invalid email or password.",
      "invalid_token": "Invalid authentication token",
      "link": "Sign in",
      "locked": "Your account is locked",
      "new": {
        "no_osm_account": "No OpenStreetMap account?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Thank you very much for your support!",
        "sign_in_with": "Log in with %{kind}",
        "sign_up_with_osm": "Register now.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Logged in successfully",
      "signed_out": "You have signed out successfully",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "You need to sign in or sign up before continuing",
      "unconfirmed": "You need to confirm your account before continuing"
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Email",
          "password": "Password",
          "remember_me": "Stay logged in?"
        },
        "submit": "Log in"
      },
      "headline": "Log in"
    },
    "sign_out": {
      "headline": "Log out"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirm my account",
        "please_confirm": "You can confirm your account through the link below:",
        "welcome": "Welcome %{email}!"
      },
      "form": {
        "labels": {
          "email": "Email",
          "password": "Password",
          "password_confirmation": "Repeat password",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Sign up"
      },
      "headline": "Sign up"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Your account was successfully unlocked. You are now signed in."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "has already been confirmed",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "doesn't match confirmation",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "must be exactly %{count}",
      "even": "must be an even number",
      "exclusion": "is reserved",
      "expired": "expired, please request a new one",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "must be greater than %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "not a valid value",
      "invalid": "not valid",
      "less_than": "must be less than %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "is not a number",
      "not_an_integer": "must be an integer",
      "not_found": "was not found",
      "not_locked": "was not locked",
      "not_saved": {
        "one": "An error prohibited to save a %{resource}:",
        "other": "%{count} errors prohibited to save a %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "has already been taken",
      "too_long": "is too long (not more than %{count} characters)",
      "too_short": "is too short (not less than %{count} characters)",
      "wrong_length": "is the wrong length (should be %{count} characters)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": ""
        }
      }
    },
    "template": {
      "body": "There were problems with the following fields:",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "",
      "1": "",
      "2": ""
    },
    "headline": "",
    "questions": {
      "0": "",
      "1": "",
      "2": ""
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} was successfully created"
      },
      "destroy": {
        "alert": "%{resource_name} could not be removed",
        "notice": "%{resource_name} was successfully deleted"
      },
      "update": {
        "notice": "%{resource_name} was successfully updated"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Image was successfully deleted"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "Wheelchair accessible",
    "show_limited_accessible_places": "Partially wheelchair accessible",
    "show_places_without_status": "Unknown status",
    "show_unaccessible_places": "Not wheelchair accessible"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Move the marker on the map to the correct position",
      "osm_username": "Not a member yet? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Create an OpenStreetMap account now</a>",
      "password": "(leave empty if you don't want to change it)",
      "phone": "For example: +49 30 12345678",
      "website": "For example: http://www.example.com"
    },
    "labels": {
      "category": "Category:",
      "centralkey": "Central key:",
      "city": "City:",
      "create": "Create a place",
      "email": "Email",
      "finish": "Finish",
      "housenumber": "No:",
      "lat": "Latitude",
      "lon": "Longitude",
      "name": "Name:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Password",
      "password_confirmation": "Repeat password",
      "phone": "Telephone:",
      "postcode": "Post code:",
      "privacy_policy": "I accept paragraphs 1 and 2 of the data privacy agreement.",
      "reset": "Reset",
      "save": "Save",
      "street": "Street:",
      "terms": "I accept the terms of use.",
      "type": "Type:",
      "website": "Website:",
      "wheelchair": "Wheelchair accessibility?",
      "wheelchair_description": "Accessibility comment:",
      "wheelchair_toilet": "Wheelchair accessible toilet:"
    },
    "titles": {
      "basic": "Basic data",
      "optional": "More information <span class=\"addition\">(all fields are optional)</span>"
    }
  },
  "global": {
    "form_validation_error": "Please note the errors listed below"
  },
  "header": {
    "meta": {
      "description": "",
      "homepage": "Home page",
      "keywords": "wheelchair accessible places find search mark",
      "search": "Search",
      "title": ""
    },
    "navigation": {
      "about_wheelmap": "",
      "blog": "News",
      "choose_language": "",
      "contact": "",
      "feedback": "Feedback",
      "home": "Start",
      "how_to_add_a_place": "How do I add places?",
      "imprint": "Imprint",
      "logged_in_as": "Logged in as:",
      "login": "Log in",
      "logout": "Log out",
      "map": "",
      "newsletter": "Newsletter",
      "press": "Press",
      "profile": "Profile",
      "projects": "",
      "suggestions": "Suggestions",
      "what_is_barrier_free": "What does \"wheelchair accessible\" mean?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Add another place",
      "find": "Find",
      "placeholder": "Search for a place",
      "title_add_place": "Add a new place at this position now!"
    },
    "tagline": "Wheelmap logo",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": ""
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"
      },
      "one_page": {
        "display_entries": {
          "one": "Displaying <b>%{count}</b> %{entry_name}",
          "other": "Displaying <b>all %{count}</b> %{entry_name}",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {
      "prompt": "Please choose"
    },
    "submit": {
      "create": "create %{model}",
      "submit": "save %{model}",
      "update": "update %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "",
      "filter": {
        "category": "Choose category",
        "deselect_all": "Deselect all",
        "select_all": "Select all",
        "wheelchair": "Wheelchair accessible?"
      },
      "ie": {
        "action": {
          "ignore": "Ignore",
          "upgrade": "Update Browser"
        },
        "warning": {
          "headline": "We apologise!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Add a new place"
        }
      },
      "overlay": {
        "button": "",
        "categories": "",
        "filter": "",
        "headline": "",
        "lookup": "",
        "secondary_headline": ""
      },
      "popup": {
        "form": {
          "limited": "Partially wheelchair accessible",
          "no": "Not wheelchair accessible",
          "save": "Update",
          "unknown": "Unknown status",
          "yes": "Wheelchair accessible"
        },
        "help": "Wheelchair accessible? (Help)",
        "more": "more ..."
      },
      "zoom_alert": ""
    }
  },
  "how?": "How?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "All partially wheelchair accessible %{type} in %{city} (%{count})"
        },
        "no": {
          "headline": "All not wheelchair accessible %{type} in %{city} (%{count})"
        },
        "unknown": {
          "headline": "All %{type} in %{city} with unknown wheelchair status (%{count})"
        },
        "yes": {
          "headline": "All wheelchair accessible %{type} in %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "A project by Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": ""
    },
    "node": {
      "info_edit_position": "",
      "mail": {
        "body": "",
        "subject": ""
      }
    },
    "node_type": {
      "prompt": ""
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Phone:",
      "website": "Website:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Oops, your input was either incorrect or incomplete",
        "successfull": "Thank you, your submission was saved successfully and will be online shortly."
      }
    },
    "edit": {
      "header": {
        "title": "Edit place: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancel"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Sorry, authentication failed",
      "not_available": "Sorry, this page is temporarily not available.",
      "not_existent": "Sorry, this place is not available anymore.",
      "not_found": "Sorry, page not found.",
      "param_missing": "Please provide a search term"
    },
    "flash": {
      "authorize_wheelmap": "You need an OpenStreetMap account to modify data"
    },
    "new": {
      "form": {
        "legend": "",
        "location": "",
        "section": {
          "accessibility": {
            "name": "",
            "title": ""
          },
          "address": {
            "help": "",
            "name": "",
            "title": ""
          },
          "contact": {
            "name": "",
            "title": ""
          },
          "name_category": {
            "name": "",
            "title": ""
          },
          "overview": {
            "title": ""
          },
          "similar_nodes": {
            "empty": "",
            "go_edit": "",
            "go_new": "",
            "name": "",
            "title": ""
          }
        },
        "title": ""
      },
      "header": {
        "title": "New place | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Cancel"
      }
    },
    "node": {
      "link": {
        "claim": "Do you work here?",
        "edit_node": "Edit place",
        "report_bug": "Report a problem"
      }
    },
    "node_data": {
      "address": "",
      "contact_details": ""
    },
    "node_edit": {
      "details": "",
      "edit": ""
    },
    "node_map": {
      "map": ""
    },
    "node_note": {
      "comment": ""
    },
    "node_photos": {
      "add": "",
      "photos_of_this_place": "",
      "upload": ""
    },
    "node_similar": {
      "similar": ""
    },
    "node_status": {
      "accessible_toilet": "",
      "premium": "",
      "wheelchair_accessibility": ""
    },
    "node_streetview": {
      "streetview": ""
    },
    "show": {
      "header": {
        "meta": {
          "description": "",
          "title": ""
        },
        "title": "Place: %{node} | wheelmap.org"
      },
      "link": {
        "back": "back",
        "large_map": "Enlarge",
        "listing": "All places of typ '%{type}' in %{city}",
        "upload": "Upload image"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "",
        "facebook": "",
        "text": "",
        "twitter": ""
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Oops, your input was either incorrect or incomplete",
        "successfull": "Thank you, your submission was saved successfully and will be online shortly."
      }
    },
    "update_wheelchair": {
      "successfull": "The status for \"%{name}\" has been changed to \"%{status}\" and will be online shortly."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Billion",
          "million": "Million",
          "quadrillion": "Quadrillion",
          "thousand": "Thousand",
          "trillion": "Trillion",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "one": "Byte",
            "other": "Bytes"
          },
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "tb": "TB"
        }
      }
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "oauth": {
    "application": {
      "connect": {
        "headline": "You need to connect your account with your OpenStreetMap account before you can create or modify places on Wheelmap.org."
      }
    },
    "callback": {
      "notice": "Your Wheelmap account is now connected to the OpenStreetMap account %{user}."
    }
  },
  "or": "or",
  "place": {
    "one": "%{count} place",
    "other": "%{count} places"
  },
  "poi": {
    "category": {
      "accommodation": "Overnatting",
      "education": "Utdanning",
      "food": "Mat",
      "government": "Regjering",
      "health": "Helse",
      "leisure": "Fritid",
      "misc": "",
      "money_post": "",
      "public_transfer": "",
      "shopping": "Shopping",
      "sport": "Sport",
      "tourism": "Turisme",
      "unknown": "Ukjent"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Strandhotell",
        "bed_and_breakfast": "Bed & Breakfas\nt",
        "camp_site": "Campingplass",
        "caravan_site": "Caravanplass",
        "chalet": "Fjellstue",
        "dormitory": "Internat",
        "guest_house": "Gjestehus",
        "hostel": "Vandrerhjem",
        "hotel": "Hotell",
        "motel": "Motell"
      },
      "education": {
        "college": "Høyskole",
        "driving_school": "Kjøreskole",
        "kindergarten": "Barnehage",
        "library": "Bibliotek",
        "museum": "Museum",
        "school": "Skole",
        "university": "Universitet"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Ølservering",
        "cafe": "Kafé",
        "drinking_water": "Drikkevann",
        "fast_food": "Hurtigmat",
        "ice_cream": "Iskrembar",
        "pub": "Pub",
        "restaurant": "Restaurant"
      },
      "government": {
        "courthouse": "Tinghus",
        "embassy": "Ambasade",
        "government": "Regjeringsorgan",
        "police": "Politi",
        "public_building": "Offentlig bygning",
        "townhall": ""
      },
      "health": {
        "dentist": "Tannlege",
        "doctors": "",
        "hearing_aids": "Høreapparatforhandler",
        "hospital": "Sykehus",
        "medical_supply": "Medisinsk utstyr",
        "pharmacy": "Apotek",
        "social_facility": "Sosiale anlegg",
        "veterinary": "Veterinær"
      },
      "leisure": {
        "arena": "Arena",
        "brothel": "Bordell",
        "casino": "Kasino",
        "cinema": "Kino",
        "community_centre": "",
        "gallery": "Galleri",
        "nightclub": "Nattklubb",
        "playground": "Lekeplass",
        "sauna": "Sauna",
        "stripclub": "Strippeklubb",
        "theatre": "Teater",
        "zoo": "Dyrepark"
      },
      "misc": {
        "company": "Firmakontor",
        "estate_agent": "Eiendomsmegler",
        "insurance": "Forsikring",
        "lawyer": "Advokat",
        "place_of_worship": "Gudshus",
        "toilets": "Toalett"
      },
      "money_post": {
        "atm": "Minibank",
        "bank": "Bank",
        "bureau_de_change": "Vekslebyrå",
        "post_box": "Postboks",
        "post_office": "Postkontor"
      },
      "public_transfer": {
        "aerodrome": "Flyplass",
        "bicycle_parking": "Sykkelparkering",
        "bicycle_rental": "Sykkelutleie",
        "boatyard": "",
        "bus_station": "Busstasjon",
        "bus_stop": "Busstholdeplass",
        "cable_car": "Taubane",
        "car_rental": "Leiebil",
        "car_sharing": "Bildeling",
        "chair_lift": "Stolheis",
        "ferry": "Ferge",
        "ferry_terminal": "Fergeterminal",
        "fuel": "Bensinstasjon",
        "halt": "Stans",
        "light_rail": "Lysbane",
        "parking": "Parkering",
        "parking_aisle": "Parkering",
        "platform": "Plattform",
        "station": "Togstasjon",
        "subway_entrance": "Inngang til t-bane",
        "terminal": "Flyplassterminal",
        "tram_stop": "Trikkeholdeplass"
      },
      "shopping": {
        "alcohol": "Brennevin",
        "bakery": "Bakeri",
        "beauty": "Skjønnhetssalong",
        "beverages": "Drikkevarer",
        "bicycle": "Sykkelbutikk",
        "books": "Bøker",
        "butcher": "Slakter",
        "car_repair": "Bilreparasjon",
        "car_shop": "Bilbutikk",
        "chemist": "",
        "clothes": "Klær",
        "computer": "Datamaskin",
        "confectionery": "Godtebutikk",
        "convenience": "Bekvemmelighet",
        "deli": "Delikatesse",
        "department_store": "Varemagasin",
        "doityourself": "Gjør det selv",
        "dry_cleaning": "Renseri",
        "electronics": "Elektronikk",
        "fabric": "Stoffbutikk",
        "farm_shop": "Gårdsutsalg",
        "florist": "Blomsterbutikk",
        "furniture": "Møbelbutikk",
        "garden_centre": "",
        "gift": "Gavebutikk",
        "hairdresser": "Frisør",
        "hardware": "Jernvare",
        "jewelry": "Smykker",
        "kiosk": "Kiosk",
        "laundry": "Vaskeri",
        "mall": "Kjøpesenter",
        "optician": "Optiker",
        "organic": "Organisk butikk",
        "outdoor": "Utendørsutstyr",
        "pet": "Dyrebutikk",
        "photo": "Foto",
        "second_hand": "Bruktbutikk",
        "shoes": "Sko",
        "sports": "Sport",
        "stationery": "Kontorrekvisita",
        "supermarket": "Supermarked",
        "toys": "Leker",
        "travel_agency": "Reisebyrå",
        "video": "Videoutleiebutikk"
      },
      "sport": {
        "pitch": "Idrettsplass",
        "sports_centre": "Idrettshall",
        "stadium": "Stadion",
        "swimming": "Bading",
        "swimming_pool": "Svømmebasseng"
      },
      "tourism": {
        "archaeological_site": "Arkeologisk område",
        "arts_centre": "Kunstsenter",
        "artwork": "Kunstverk",
        "attraction": "Attraksjon",
        "battlefield": "Slagmark",
        "beach": "Strand",
        "beacon": "Fyrtårn",
        "castle": "Slott",
        "cave_entrance": "Huleinngang",
        "information": "Turistinformasjon",
        "memorial": "Minnesmerke",
        "theme_park": "Temapark",
        "tower": "Tårn",
        "viewpoint": "Utsiktspunkt"
      },
      "unknown": {
        "unknown": "Ukjent"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Status: connected",
          "grant": "Connect now",
          "not_connected": "Status: Not connected",
          "revoke": "Disconnect"
        }
      },
      "headline": "Edit your profile"
    }
  },
  "ransack": {
    "all": "all",
    "and": "and",
    "any": "any",
    "asc": "ascending",
    "attribute": "attribute",
    "combinator": "combinator",
    "condition": "condition",
    "desc": "descending",
    "or": "or",
    "predicate": "predicate",
    "predicates": {
      "blank": "is blank",
      "cont": "contains",
      "cont_all": "contains all",
      "cont_any": "contains any",
      "does_not_match": "doesn't match",
      "does_not_match_all": "doesn't match all",
      "does_not_match_any": "doesn't match any",
      "end": "ends with",
      "end_all": "ends with all",
      "end_any": "ends with any",
      "eq": "equals",
      "eq_all": "equals all",
      "eq_any": "equals any",
      "false": "is false",
      "gt": "greater than",
      "gt_all": "greater than all",
      "gt_any": "greater than any",
      "gteq": "greater than or equal to",
      "gteq_all": "greater than or equal to all",
      "gteq_any": "greater than or equal to any",
      "in": "in",
      "in_all": "in all",
      "in_any": "in any",
      "lt": "less than",
      "lt_all": "less than all",
      "lt_any": "less than any",
      "lteq": "less than or equal to",
      "lteq_all": "less than or equal to all",
      "lteq_any": "less than or equal to any",
      "matches": "matches",
      "matches_all": "matches all",
      "matches_any": "matches any",
      "not_cont": "doesn't contain",
      "not_cont_all": "doesn't contain all",
      "not_cont_any": "doesn't contain any",
      "not_end": "doesn't end with",
      "not_end_all": "doesn't end with all",
      "not_end_any": "doesn't end with any",
      "not_eq": "not equal to",
      "not_eq_all": "not equal to all",
      "not_eq_any": "not equal to any",
      "not_in": "not in",
      "not_in_all": "not in all",
      "not_in_any": "not in any",
      "not_null": "is not null",
      "not_start": "doesn't start with",
      "not_start_all": "doesn't start with all",
      "not_start_any": "doesn't start with any",
      "null": "is null",
      "present": "is present",
      "start": "starts with",
      "start_all": "starts with all",
      "start_any": "starts with any",
      "true": "is true"
    },
    "search": "search",
    "sort": "sort",
    "value": "value"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "",
        "hint": {
          "example": "",
          "info": "",
          "work_in_progress": ""
        },
        "try_this": {
          "address": "",
          "intro": "",
          "spell_check": ""
        }
      },
      "results": {
        "ticker": {
          "one": "",
          "other": ""
        }
      },
      "search": {
        "for": "Searching for \"%{q}\"",
        "not_found": "No places could be found!"
      }
    },
    "timeout": {
      "headline": "",
      "info": "",
      "repeat_search": ""
    }
  },
  "splash": {
    "countline": "%{count} places have already been marked.",
    "headline": "Everyone can add wheelchair accessible places!",
    "start": "Start",
    "step1": "Click on a place you know",
    "step2": "Mark it and click save",
    "step3": "That's it! No registration necessary",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Statistics",
  "support": {
    "array": {
      "last_word_connector": " and ",
      "sentence_connector": "and",
      "two_words_connector": " and ",
      "words_connector": ","
    },
    "select": {
      "prompt": "Please select"
    }
  },
  "time": {
    "am": "am",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  },
  "toiletstatus": {
    "no": "No wheelchair accessible toilet",
    "unknown": "Toilet status unknown",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Wheelchair accessible toilet"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Your account is activated now!"
      },
      "error": {
        "notice": "Email and password don't match."
      },
      "notice": "You're in!"
    },
    "destroy": {
      "notice": "Bye, come back soon!"
    },
    "new": {
      "email": "Email address",
      "login": "Log in",
      "login_with_twitter": "Log in with Twitter",
      "password": "Password",
      "remember_me": "Stay logged in"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "How can we get in touch with you? You can change this information later in your profile."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Your uploaded images"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": ""
        },
        "title": ""
      },
      "newsletter": {
        "label": "",
        "text": "",
        "title": ""
      },
      "photos": {
        "empty": "",
        "title": ""
      },
      "show": {
        "greeting": {
          "anonymously": "",
          "personalized": ""
        },
        "overview": {
          "photos_uploaded": {
            "one": "",
            "other": ""
          },
          "pois_added": {
            "one": "",
            "other": ""
          },
          "pois_edited": {
            "one": "",
            "other": ""
          },
          "pois_marked": {
            "one": "",
            "other": ""
          },
          "text": ""
        },
        "text_html": "",
        "title": ""
      },
      "widget": {
        "categories": "",
        "center": "",
        "empty_center": "",
        "empty_provider": "",
        "height": "",
        "legends": {
          "embed": "",
          "embed_explanation": "",
          "general": "",
          "preview": "",
          "settings": ""
        },
        "providers": "",
        "title": "",
        "width": ""
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; First",
      "last": "Last &raquo;",
      "next": "Next &rsaquo;",
      "previous": "&lsaquo; Prev",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Partially wheelchair accessible",
    "no": "Not wheelchair accessible",
    "unknown": "Unknown status",
    "yes": "Wheelchair accessible"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "A project by",
      "based_on": "Based on",
      "become_a_supporter": "Become a supporter",
      "main_supporter": "Main supporter"
    },
    "itunes": {
      "alt": "AppStore Logo",
      "title": "Download the iPhone App now!"
    },
    "logo": {
      "alt": "Wheelmap Logo - find wheelchair accessible places",
      "title": "Wheelmap - find wheelchair accessible places"
    },
    "what_is": {
      "fully_accessible": "Entrance without steps, all rooms without steps.",
      "limited_accessible": "Entrance has one step with max. height 7cm (3 in), most rooms are without steps.",
      "not_accessible": "Entrance has a step or several steps, rooms are not accessible.",
      "unknown_accessible": "Help out by marking places!"
    }
  },
  "will_paginate": {
    "next_label": "Next &#8594;",
    "page_entries_info": {
      "multi_page": "Displaying %{model} %{from} - %{to} of %{count} in total",
      "multi_page_html": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total",
      "single_page": {
        "one": "Displaying 1 %{model}",
        "other": "Displaying all %{count} %{model}",
        "zero": "No %{model} found"
      },
      "single_page_html": {
        "one": "Displaying <b>1</b> %{model}",
        "other": "Displaying <b>all&nbsp;%{count}</b> %{model}",
        "zero": "No %{model} found"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Previous"
  }
});
