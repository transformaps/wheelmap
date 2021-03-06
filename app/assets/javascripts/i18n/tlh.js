I18n.translations || (I18n.translations = {});
I18n.translations["tlh"] = I18n.extend((I18n.translations["tlh"] || {}), {
  "actions": {
    "cancel": "Cancel",
    "next": "Next",
    "save": "qon",
    "send": "Send"
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
        "address": "Address",
        "address_city": "City",
        "address_housenumber": "House number",
        "address_postcode": "Postcode",
        "address_street": "Street",
        "name": "Name",
        "note": "Note",
        "phone": "Phone",
        "type": "Type",
        "website": "Website"
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
        "accepted": "lajnISlu'",
        "blank": "chImlaHbe'",
        "confirmation": "rapbe' chaw' mI'",
        "empty": "chImlaHbe'",
        "equal_to": "%{count} rapnIS",
        "even": "cha'logh boqHa'eghnISlaH mI'",
        "exclusion": "ghajlu'",
        "greater_than": "tIn law' %{count} tIn puS 'e' teHnIS.",
        "greater_than_or_equal_to": "tIn law' %{count} tIn puS 'e' teHnIS pagh %{count} rap.",
        "inclusion": "tetlhDaq SaHbe'",
        "invalid": "lughbe'",
        "less_than": "mach law' %{count} mach puS 'e' teHnIS.",
        "less_than_or_equal_to": "mach law' %{count} mach puS 'e' teHnIS pagh %{count} rap.",
        "not_a_number": "mI' 'oHbe'",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "cha'logh boqHa'eghnISlaHbe' mI'",
        "record_invalid": "'ollu'taHvIS luj: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "ghajlu'",
        "too_long": "tlhoy tIq (%{count} pIqaDmey 'oH 'aqroS'e')",
        "too_short": "tlhoy run (%{count} pIqaDmey 'oH 'rav'e')",
        "wrong_length": "chuq muj 'oH (%{count} pIqaDmey 'oHnIS)"
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
          "email": "jabbI'ID ngu'wI'",
          "password": "pegh mu'",
          "remember_me": "'eltaH"
        }
      },
      "template": {
        "body": "Qaghmey ngaS permeyvam:",
        "header": {
          "one": "qonpu' %{model}vam 'e' bot wa' Qagh",
          "other": "qonpu' %{model}vam 'e' bot %{count} Qaghmey"
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
      "notice": "bIrarpu'. bIrarnISbe'qa' ..."
    },
    "require_user": {
      "notice": "Daq leghmeH bI'elnIS."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Daq chu' chel",
      "edit": "Daq De' choH"
    },
    "root": "wheelmap"
  },
  "common": {
    "close": "SoQmoH",
    "skip": "skip"
  },
  "date": {
    "abbr_day_names": [
      "wa' jaj",
      "cha' jaj",
      "wej jaj",
      "loS jaj",
      "vagh jaj",
      "jav jaj",
      "Soch jaj"
    ],
    "abbr_month_names": [
      null,
      "wa' jar",
      "cha' jar",
      "wej jar",
      "loS jar",
      "vagh jar",
      "jav jar",
      "Soch jar",
      "chorgh jar",
      "Hut jar",
      "wa'maH jar",
      "wa'maH wa' jar",
      "wa'maH cha' jar"
    ],
    "day_names": [
      "wa' jaj",
      "cha' jaj",
      "wej jaj",
      "loS jaj",
      "vagh jaj",
      "jav jaj",
      "Soch jaj"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      null,
      "wa' jar",
      "cha' jar",
      "wej jar",
      "loS jar",
      "vagh jar",
      "jav jar",
      "Soch jar",
      "chorgh jar",
      "Hut jar",
      "wa'maH jar",
      "wa'maH wa' jar",
      "wa'maH cha' jar"
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
        "one": "wa' repHey",
        "other": "%{count} repHey"
      },
      "about_x_months": {
        "one": "wa' jarHey",
        "other": "%{count} jarmeyHey"
      },
      "about_x_years": {
        "one": "wa' DISHey",
        "other": "%{count} DISmeyHey"
      },
      "almost_x_years": {
        "one": "wa' DISHey",
        "other": "%{count} DISmeyHey"
      },
      "half_a_minute": "wej'maH tupmey",
      "less_than_x_minutes": {
        "one": "wa' tupHey",
        "other": "%{count} tupmeyHey"
      },
      "less_than_x_seconds": {
        "one": "wa' lupHey",
        "other": "%{count} lupmeyHey"
      },
      "over_x_years": {
        "one": "qaSDI' wa' DIS",
        "other": "qaSDI' %{count} DISmey"
      },
      "x_days": {
        "one": "wa' jaj",
        "other": "%{count} jajmey"
      },
      "x_minutes": {
        "one": "wa' tup",
        "other": "%{count} tupmey"
      },
      "x_months": {
        "one": "wa' jar",
        "other": "%{count} jarmey"
      },
      "x_seconds": {
        "one": "wa' tup",
        "other": "%{count} tupmey"
      }
    },
    "prompts": {
      "day": "jaj",
      "hour": "rep",
      "minute": "tup",
      "month": "jar",
      "second": "lupmey",
      "year": "jar"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "talIj 'ollu'. bI'elpu'. ",
      "link": "talIj Da'ol 'e' ghojmoHbogh QIn DaHevbe''a'?",
      "send_instructions": "tugh jabbI'ID DaHev. talIj Da'ol 'e' ghojmoH.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "bIbej'a'?",
      "headline": "ta' Qaw''a'?",
      "link": "DaH ta' Qaw'!"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "mu' pegh <i>(choHmeylIj wI'olnIS)</i>",
          "email": "jabbI'ID",
          "password": "mu' pegh <i>(DachoH DaneHbe'chugh pagh yIghItlh!)</i>",
          "password_confirmation": "pegh mu' yIghItlhqa'"
        },
        "submit": "qon"
      },
      "headline": "ta' choH"
    },
    "failure": {
      "already_authenticated": "bIrarpu'. bIrarnISbe'qa' ...",
      "inactive": "wej chu' ta'lIj.",
      "invalid": "muj pegh mu', jabI'ID ghap.",
      "invalid_token": "chaw' qab",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "ngaQ ta'lIj.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Heghpu' chabHommey, yI'elqa'.",
      "unauthenticated": "taHmeH yI'el pagh yImuv.",
      "unconfirmed": "taHmeH ta'lIj Dachu'nIS."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "talIj Da'ol 'e' ghojmoH QInvam."
      },
      "reset_password_instructions": {
        "subject": "pegh mu' vIcherqa' 'e' HIghojmoH."
      },
      "unlock_instructions": {
        "subject": "talIj Da'ngaQHa'moH 'e' ghojmoH QIn."
      }
    },
    "mandatory": "* wIpoQ",
    "omniauth_callbacks": {
      "failure": "\"%{reason}\"mo' %{kind}vo' qachaw'laHbe'.",
      "permission_missing": "You did not grant the required permission.",
      "success": "Qapla'! %{kind} ta' chaw'lu'."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "jabbI'ID"
        },
        "submit": "pegh mu' cherqa'"
      },
      "headline": "pegh mu' DalIj'a'?"
    },
    "password_reset": {
      "email": {
        "comment": "mu'lIj pegh DachoH DaneHbe'chugh QInvam yIbuSHa'.<br/>mu'lIj pegh choHbe'lu' 'ach DachoHlaH bIngDaq mu'mey Da'uychugh. ",
        "headline": "%{email}",
        "link": "pegh mu' choH",
        "text": "mu'lIj pegh choHlu' neHlu'. DachoH DaneHchugh, bIngDaq mu'mey yI'uy:"
      },
      "form": {
        "labels": {
          "password": "pegh mu' chu'",
          "password_confirmation": "pegh mu' yIghItlhqa'"
        },
        "submit": "pegh mu' cherqa'"
      },
      "headline": "pegh mu' cherqa'"
    },
    "passwords": {
      "link": "pegh mu' DalIj'a'?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "tugh jabbI'ID DaHev. pegh mu' DachoH 'e' ghojmoH.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Qapla', pegh mu' DachoHta'. DaH bI'elpu'.",
      "updated_not_active": "Your password was changed successfully"
    },
    "registrations": {
      "destroyed": "ta'lIj qIllu'. tugh bIchegh 'e' wItul.",
      "inactive_signed_up": "Qapla' 'ach %{reason}mo' pI'ellaHbe'moH.",
      "link": "muv",
      "reasons": {
        "inactive": "inactive",
        "locked": "locked",
        "unconfirmed": "unconfirmed"
      },
      "signed_up": "Qapla', jumuv. 'olmeH tugh jabbI'DI' DaHev.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "talIjDaq qonpu' De' chu'."
    },
    "sessions": {
      "inactive": "wej Qap ta'lIj.",
      "invalid": "muj jabbI'ID ngu'wI'lIj pegh mu'lIj ghap.",
      "invalid_token": "chaw' qab",
      "link": "'el",
      "locked": "ngaQ talIj",
      "new": {
        "no_osm_account": "No OpenStreetMap account?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Thank you very much for your support!",
        "sign_in_with": "Log in with %{kind}",
        "sign_up_with_osm": "Register now.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Qapla', bI'elpu'.",
      "signed_out": "Qapla', bImejpu'",
      "timeout": "rIn poHlIj, yI'elqa'!",
      "unauthenticated": "jItaHpa', bI'elnIS pagh bImuvnIS.",
      "unconfirmed": "bItaHpa' talIj Da'ol."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "jabbI'ID",
          "password": "pegh mu'",
          "remember_me": "'eltaH'a'?"
        },
        "submit": "'el"
      },
      "headline": "'el"
    },
    "sign_out": {
      "headline": "mej"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Confirm my account",
        "please_confirm": "You can confirm your account through the link below:",
        "welcome": "Welcome %{email}!"
      },
      "form": {
        "labels": {
          "email": "jabbI'ID",
          "password": "pegh mu'",
          "password_confirmation": "pegh mu' yIghItlhqa'",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "muv"
      },
      "headline": "muv"
    },
    "unlocks": {
      "link": "'olmeH jabbI'DI' DaHevbe''a'?",
      "send_instructions": "tugh jabbI'ID DaHev. talIj DangaQHa' 'e' ghojmoH.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "ngaQHa' talIj. bI'elpu'. "
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "lajnIS",
      "already_confirmed": "chaw'lu'pu'. bI'el 'e' yInID. ",
      "blank": "chImlaHbe'",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "rurbe'",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "chImlaHbe'",
      "equal_to": "rapnIS %{count}",
      "even": "cha'logh boqHa'eghnISlaH mI'",
      "exclusion": "chaw'be'",
      "expired": "expired, please request a new one",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "tIn law' %{count} tIn puS 'e' teHnIS.",
      "greater_than_or_equal_to": "tIn law' %{count} tIn puS 'e' teHnIS pagh %{count} rap.",
      "inclusion": "muj De'",
      "invalid": "muj",
      "less_than": "mach law' %{count} mach puS 'e' teHnIS.",
      "less_than_or_equal_to": "mach law' %{count} mach puS 'e' teHnIS pagh %{count} rap.",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "oHbe' mI''e",
      "not_an_integer": "mI' naQ 'oHnIS",
      "not_found": "Sambe'",
      "not_locked": "ngaQbe'",
      "not_saved": {
        "one": "%{resource} qonlu'pu' 'e' bot Qagh:",
        "other": "%{resource} qonlu'pu' 'e' bot %{count} Qaghmey:"
      },
      "odd": "cha'logh boqHa'eghnISlaHbe' mI'",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "ghajlu'",
      "too_long": "tlhoy tIq (%{count} pIqaDmey 'oH 'aqroS'e')",
      "too_short": "tlhoy run (%{count} pIqaDmey 'oH 'rav'e')",
      "wrong_length": "latlh mu'mey ghajnIS (%{count} mu'mey ghajnIS)"
    },
    "models": {
      "node": {
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "Qaghmey ghaj De'vam:",
      "header": {
        "one": "%{model} qonlu'pu' 'e' bot Qagh:",
        "other": "%{model} qonlu'pu' 'e' bot %{count} Qaghmey:"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "You can always change the marking of a place yourself. Just choose the right marking and \"Save\" - done!",
      "1": "As a logged in user you can add / correct all the details of a place. Click on \"Edit\" and correct or add information in the mask.",
      "2": "You can add further information (e.g. \"This place has a mobile ramp\") in the comment section. Click on \"Edit\" and \"Add comment\"."
    },
    "headline": "Is there a problem with this place?",
    "questions": {
      "0": "The marking is wrong.",
      "1": "The details of the place are incorrect or missing.",
      "2": "I have more information about this place."
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
    "show_fully_accessible_places": "naw'laH rutlhquS",
    "show_limited_accessible_places": "loQ naw'laH rutlhquS ",
    "show_places_without_status": "Suvbe'bogh Dotlh",
    "show_unaccessible_places": "naw'laHbe' rutlhquS"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Daq lughDaq ghItlhwI' yIQay",
      "osm_username": "OSM Damuv'a'? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">DaH Openstreetmap ta yIchen</a>",
      "password": "(DachoH DaneHbe'chugh, yIchImmoHtaH)",
      "phone": "chuptaHghach: +49 30 123456-78",
      "website": "chutaHghach: http://www.example.com/"
    },
    "labels": {
      "category": "Segh:",
      "centralkey": "Central key:",
      "city": "veng:",
      "create": "Daq chen",
      "email": "jabbI'ID",
      "finish": "Finish",
      "housenumber": "ghobe':",
      "lat": "Latitude",
      "lon": "Longitude",
      "name": "pong:",
      "osm_password": "OSM pegh mu'",
      "osm_username": "OSM ta pong",
      "password": "pegh mu'",
      "password_confirmation": "pegh mu' yIghItlhqa'",
      "phone": "QumwI:",
      "postcode": "Daq ngoq:",
      "privacy_policy": "I accept paragraphs 1 and 2 of the data privacy agreement.",
      "reset": "Reset",
      "save": "qon",
      "street": "He:",
      "terms": "I accept the terms of use.",
      "type": "Segh:",
      "website": "juHDaq:",
      "wheelchair": "naw'laH'a' rutlhquS?",
      "wheelchair_description": "naw'laHghach qechmey:",
      "wheelchair_toilet": "Wheelchair accessible toilet:"
    },
    "titles": {
      "basic": "De' nap",
      "optional": "latlh De' <span class=\"addition\">(poQbe' De')</span>"
    }
  },
  "global": {
    "form_validation_error": "bIngDaq Qagh yIlegh."
  },
  "header": {
    "meta": {
      "description": "rutlhquS chawbogh Daq'e' Sam - wheelmap.org",
      "homepage": "juH Daq",
      "keywords": "rutlhquS naw' Daqmey Sam nej ghItlh",
      "search": "nej",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "About Wheelmap",
      "blog": "QonoS",
      "choose_language": "Choose language",
      "contact": "Contact",
      "feedback": "qechmey",
      "home": "tagh",
      "how_to_add_a_place": "chay' Daqmey vIchel?",
      "imprint": "nubop De'",
      "logged_in_as": "'elpu': ",
      "login": "'el",
      "logout": "mej",
      "map": "Map",
      "newsletter": "Newsletter",
      "press": "Press",
      "profile": "Profile",
      "projects": "Projects",
      "suggestions": "vay' chup",
      "what_is_barrier_free": "\"rutlhquS chawbogh Daq'e'\" DaQIjlaH'a'?",
      "what_is_wheelmap": "nuq 'oH wheelmap'e'?"
    },
    "searchbar": {
      "add_place": "latlh Daq chel",
      "find": "Sam",
      "placeholder": "i.e. Sunset Boulevard L.A. pagh Brandenburg Gate Berlin",
      "title_add_place": "DaH DaqDaq Daq yIchel!"
    },
    "tagline": "Wheelmap Degh",
    "title": "Wheelmap - rutlhquS chawbogh Daq'e' Sam",
    "toolbar": {
      "categories": "Categories"
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
      "prompt": "yIwIv"
    },
    "submit": {
      "create": "%{model} chenmoH",
      "submit": "%{model} qon",
      "update": "%{model} De' chu' qon"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Segh:",
        "deselect_all": "Deselect all",
        "select_all": "Select all",
        "wheelchair": "naw'laH'a' rutlhquS?"
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
          "create": "Daq chu' chel"
        }
      },
      "overlay": {
        "button": "Okay, let’s go!",
        "categories": "Filter places by categories",
        "filter": "Filter places by wheelchair accessibility",
        "headline": "Mark and find wheelchair accessible places with Wheelmap.org - worldwide and for free. It’s easy:",
        "lookup": "Search for a specific place",
        "secondary_headline": "Our traffic light system to mark the wheelchair accessibility of public places:"
      },
      "popup": {
        "form": {
          "limited": "loQ naw'laH rutlhquS",
          "no": "naw'laHbe' rutlhquS",
          "save": "qon",
          "unknown": "Suvbe'bogh Dotlh",
          "yes": "naw'laH rutlhquS"
        },
        "help": "naw'laH'a' rutlhquS? (QaH)",
        "more": "latlh ..."
      },
      "zoom_alert": "Zoom in closer to see more places."
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
        "alt": "jInmolvam chenmoH Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Choose a category"
    },
    "node": {
      "info_edit_position": "The location will appear on the Wheelmap as it is shown above. If the marker is not in the correct spot you can <a href=\"%{url}\">change its position on the OpenStreetMap.</a>",
      "mail": {
        "body": "(Please only write in English or German.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problem with %{headline}"
      }
    },
    "node_type": {
      "prompt": "Choose a type"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "QumwI':",
      "website": "juHDaq:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "De' muj DaghItlh.",
        "successfull": "qonta' De' 'ej tugh leghlu'."
      }
    },
    "edit": {
      "header": {
        "title": "Daq choH: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; qIl"
      }
    },
    "errors": {
      "default": "va'! Qagh 'ach Qagh De' wIghaj.",
      "not_authorized": "Qagh. chaw'be'.",
      "not_available": "Daqvam tu'be'lu' 'ach ru'.",
      "not_existent": "Daqvam tu'be'lu'.",
      "not_found": "SamlaHbe'.",
      "param_missing": "mu' nejbogh yIghItlh"
    },
    "flash": {
      "authorize_wheelmap": "De' choHmeH OpenStreetMap ta DaSuqnIS. "
    },
    "new": {
      "form": {
        "legend": "Location of the place",
        "location": "Please click on the map where the place is located!",
        "section": {
          "accessibility": {
            "name": "Wheelchair accessibility",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Address",
            "title": "Where is the place?"
          },
          "contact": {
            "name": "Contact",
            "title": "Other contact information"
          },
          "name_category": {
            "name": "Name and place type",
            "title": "Give us some initial information about your place:"
          },
          "overview": {
            "title": "Is all the information correct?"
          },
          "similar_nodes": {
            "empty": "No similar places were found.",
            "go_edit": "Continue with this place",
            "go_new": "It is none of the places above …",
            "name": "Similar places",
            "title": "We found similar places nearby. Is it one of these?"
          }
        },
        "title": "Add a place"
      },
      "header": {
        "title": "Daq chu' | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; qIl"
      }
    },
    "node": {
      "link": {
        "claim": "Do you work here?",
        "edit_node": "Daq choH",
        "report_bug": "Report a problem"
      }
    },
    "node_data": {
      "address": "Address:",
      "contact_details": "Contact details:"
    },
    "node_edit": {
      "details": "Details",
      "edit": "Edit"
    },
    "node_map": {
      "map": "Map:"
    },
    "node_note": {
      "comment": "Comment:"
    },
    "node_photos": {
      "add": "Add",
      "photos_of_this_place": "Photos of this place:",
      "upload": "Upload"
    },
    "node_similar": {
      "similar": "Similar places: %{name}"
    },
    "node_status": {
      "accessible_toilet": "Wheelchair accessible toilet:",
      "premium": "%{name} says: this place is",
      "wheelchair_accessibility": "Wheelchair accessibility:"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Find out if this place is wheelchair accessible on Wheelmap.org. Or add further information and photos to the place.",
          "title": "This place is on Wheelmap.org: %{name}"
        },
        "title": "Daq: %{node} | wheelmap.org"
      },
      "link": {
        "back": "back",
        "edit_node": "Daq choH",
        "large_map": "tInmoH",
        "listing": "All places of typ '%{type}' in %{city}",
        "report_bug": "Report a problem",
        "upload": "Upload image"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "jabbI'ID",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "De' muj DaghItlh",
        "successfull": "qonta' De' 'ej tugh leghlu'."
      }
    },
    "update_wheelchair": {
      "successfull": "\"%{name}\" Dutlh choHlu'. DaH \"%{status} naw'laH rutlhquS\" 'oH. tugh DaleghlaH."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ".",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": 0,
        "strip_insignificant_zeros": 0,
        "unit": "$"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": 0,
      "strip_insignificant_zeros": 0
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "SaD 'uy'",
          "million": "'uy'",
          "quadrillion": "SaD 'uy' 'uy'",
          "thousand": "SaD",
          "trillion": "'uy' 'uy'",
          "unit": ""
        }
      },
      "format": {
        "delimiter": ".",
        "precision": 1,
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
        "delimiter": ".",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": "."
      }
    }
  },
  "oauth": {
    "application": {
      "connect": {
        "headline": "wheelmap.orgDaq Daq DachoHmeH Daq DachelmoH ta'lIj open street map ta'lIj je DarurnIS."
      }
    },
    "callback": {
      "notice": "DaH ta'lIj %{user} open street map ta' je Darur."
    }
  },
  "or": "pagh",
  "place": {
    "one": "%{count} Daq",
    "other": "%{count} Daqmey"
  },
  "poi": {
    "category": {
      "accommodation": "ma'taHghach",
      "education": "ghojmoHghach",
      "food": "Sop",
      "government": "qum",
      "health": "Health",
      "leisure": "tIvtaHghach",
      "misc": "latlh",
      "money_post": "Huch QumwI' je Suy",
      "public_transfer": "Qay",
      "shopping": "Suymey",
      "sport": "Qujmey",
      "tourism": "SuchwI'",
      "unknown": "Sovbe'ghach"
    },
    "name": {
      "accommodation": {
        "beach_resort": "bIQ'a' HeHDaq mebpa'mey",
        "bed_and_breakfast": "QongDaq nIQ je",
        "camp_site": "raQ Daq",
        "caravan_site": "rutlhmey ghajbogh juH Daq",
        "chalet": "juH'a'",
        "dormitory": "Dormitory",
        "guest_house": "meb qach",
        "hostel": "mebpa'mey qutlh",
        "hotel": "mebpa'mey",
        "motel": "mebpa'Hommey"
      },
      "education": {
        "college": "'ampaS",
        "driving_school": "Driving school",
        "kindergarten": "puq DuSaQ",
        "library": "paq qach",
        "museum": "Doch ngo'meH Daq",
        "school": "DuSaQ",
        "university": "DuSaQ'a'"
      },
      "food": {
        "bar": "tach",
        "biergarten": "HIq tlhutlhmeH Hur Daq",
        "cafe": "SopmeH DaqHom",
        "drinking_water": "bIQ tlhutlhbogh",
        "fast_food": "moD Soj",
        "ice_cream": "Ice cream parlour",
        "pub": "tach",
        "restaurant": "Qe'"
      },
      "government": {
        "courthouse": "chut qach",
        "embassy": "rIvSo'",
        "government": "Government agency",
        "police": "Police",
        "public_building": "wo' qach",
        "townhall": "veng vaS"
      },
      "health": {
        "dentist": "Dentist",
        "doctors": "Doctor",
        "hearing_aids": "Hearing aid dealer",
        "hospital": "Hospital",
        "medical_supply": "Medical supplies",
        "pharmacy": "Pharmacy",
        "social_facility": "Social facility",
        "veterinary": "Veterinary"
      },
      "leisure": {
        "arena": "SuvmeH Daq",
        "brothel": "Brothel",
        "casino": "Casino",
        "cinema": "vIHbogh much Daq",
        "community_centre": "Community centre",
        "gallery": "nagh beQ qach",
        "nightclub": "mI'meH qach",
        "playground": "Playground",
        "sauna": "chebmey ghurHa'meH tuj lo'bogh Daq",
        "stripclub": "Stripclub",
        "theatre": "much qach",
        "zoo": "HaDI'baH qach"
      },
      "misc": {
        "company": "Company (Office)",
        "doctors": "Qelpu'",
        "estate_agent": "Real estate agent",
        "hospital": "Qelpu' qach",
        "insurance": "Insurance",
        "lawyer": "Lawyer",
        "pharmacy": "Hergh Suy",
        "place_of_worship": "ghIn",
        "toilets": "puchpa'mey",
        "veterinary": "HaDI'baH Qel"
      },
      "money_post": {
        "atm": "Huch nobwI'",
        "bank": "Huch Suy",
        "bureau_de_change": "Huch choHmeH Daq",
        "post_box": "QIn ngeHmeH ngaSwI'",
        "post_office": "QIn ngeHmeH Daq"
      },
      "public_transfer": {
        "aerodrome": "muD Duj juH",
        "bicycle_parking": "cha' rutlh lupwI' leSmeH Daq",
        "bicycle_rental": "cha' rutlh lupwI' ngIpmeH Daq",
        "boatyard": "bIQDuj Daq",
        "bus_station": "lupwI' waw'",
        "bus_stop": "lupwI' mevmeH Daq",
        "cable_car": "lupwI'",
        "car_rental": "loS rutlh lupwI' ngIpmeH Daq",
        "car_sharing": "loS rutlh lupwI'Daq quS ngIpmeH Daq",
        "chair_lift": "quS qengwI'",
        "ferry": "bIQDuj'a'",
        "ferry_terminal": "bIQDuj'a' tIJmeH Daq",
        "fuel": "nIn SuqmeH Daq",
        "halt": "mev",
        "light_rail": "lupwI'Hom",
        "parking": "loS rutlh lupwI' leSmeH Daq",
        "parking_aisle": "loS rutlh lupwI' leSmeH tlhegh",
        "platform": "lupwI'Hom tIjmeH Daq",
        "station": "wutlh lupwI'",
        "subway_entrance": "wutlh lupwI' DIn",
        "terminal": "muD Duj tIjmeH Daq",
        "tram_stop": "lupwI' tIjmeH Daq"
      },
      "shopping": {
        "alcohol": "HIq Suy",
        "bakery": "tIr ngogh Suy",
        "beauty": "Beauty salon",
        "beverages": "HIvje' Suy",
        "bicycle": "cha' rutlh DujHom Suy",
        "books": "paqmey",
        "butcher": "Ha'DIbaH Suy",
        "car_repair": "Car repair",
        "car_shop": "Car shop",
        "chemist": "Chemist / Drugstore",
        "clothes": "Sut Suy",
        "computer": "De'wI'",
        "confectionery": "Candy store",
        "convenience": "HochHom Suy",
        "deli": "Delicatessen",
        "department_store": "Doch law' Suy",
        "doityourself": "bIta''egh",
        "dry_cleaning": "Say'wI' QaD",
        "electronics": "'ul lo'bogh Doch Suy",
        "fabric": "Fabric shop",
        "farm_shop": "Farm shop",
        "florist": "poch Suy",
        "furniture": "quS QongDaq je Suy",
        "garden_centre": "poch Suy",
        "gift": "Gift shop",
        "hairdresser": "jIb Say'moHmeH",
        "hardware": "chenmoHwI' jan Suy",
        "jewelry": "Jewelry",
        "kiosk": "SuyHom",
        "laundry": "Sut Say'moHmeH ",
        "mall": "Suy'a'",
        "optician": "mIn Qel",
        "organic": "Organic shop",
        "outdoor": "Outdoor supply",
        "pet": "Pet shop",
        "photo": "Photo",
        "second_hand": "Second hand",
        "shoes": "waqmey",
        "sports": "Sports",
        "stationery": "Stationery",
        "supermarket": "Sop Suy'a'",
        "toys": "Toys",
        "travel_agency": "Travel agency",
        "video": "Video rental store"
      },
      "sport": {
        "pitch": "Sports field",
        "sports_centre": "Quj QujmeH Daq",
        "stadium": "Quj bejmeH Daq",
        "swimming": "bIQ Quj",
        "swimming_pool": "bIQ Quj Daq"
      },
      "tourism": {
        "archaeological_site": "Daq tIQ",
        "arts_centre": "nagh beQ qach",
        "artwork": "nagh beQ",
        "attraction": "Doch leghbogh SuchwI'",
        "battlefield": "che'ron",
        "beach": "bIQ'a' HeH",
        "beacon": "wovmoHwI' qach",
        "castle": "waw'",
        "cave_entrance": "DIS lojmIt",
        "information": "SuchwI' De'",
        "memorial": "SuvwI' qawwI'",
        "theme_park": "Qujmey Daq",
        "tower": "chalqach",
        "viewpoint": "Hatlh leghmeH Daq"
      },
      "unknown": {
        "unknown": "pagh pong"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Dotlh: rarta'",
          "grant": "DaH yIrar",
          "not_connected": "Dotlh: rarbe'",
          "revoke": "rarHa'"
        }
      },
      "headline": "ta'lIj choH"
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
        "headline": "Sorry, we couldn’t find a place called \"%{query}\".",
        "hint": {
          "example": "<strong>Example:</strong> London, United Kingdom",
          "info": "Our search service only works with name and/or address information. Hence, please either search for the name of the place or an address, e.g. street name and/or city. Searching for a type of place, e.g. restaurant or cinema, does not work!",
          "work_in_progress": "We work hard to make searching for places easier and more intuitive in the future."
        },
        "try_this": {
          "address": "Please provide more <strong>address details</strong>.",
          "intro": "Try this:",
          "spell_check": "Check the <strong>spelling</strong> of your input."
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} result:",
          "other": "%{count} results:"
        }
      },
      "search": {
        "for": "\"%{q}\" nejtaH",
        "not_found": "pagh Daq tu'lu'!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Our search service was temporarily not available.",
      "repeat_search": "Retry search"
    }
  },
  "splash": {
    "countline": "%{count} places have already been marked.",
    "headline": "Everyone can add wheelchair accessible places!",
    "start": "tagh",
    "step1": "Click on a place you know",
    "step2": "Mark it and click save",
    "step3": "That's it! No registration necessary",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "De'",
  "support": {
    "array": {
      "last_word_connector": ", 'ej",
      "sentence_connector": "'ej",
      "skip_last_comma": true,
      "two_words_connector": "'ej",
      "words_connector": ","
    },
    "select": {
      "prompt": "yIwIv"
    }
  },
  "time": {
    "am": "pem",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "ram"
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
        "notice": "DaH chu' ta'lIj!"
      },
      "error": {
        "notice": "repbe' pegh mu' jabbI'ID jabbI'ID SoQ je."
      },
      "notice": "bI'el!"
    },
    "destroy": {
      "notice": "tugh yIchegh!"
    },
    "new": {
      "email": "jabbI'ID ngu'wI'",
      "login": "'el",
      "login_with_twitter": "Twitter lo'taHvIS yI'el",
      "password": "pegh mu'",
      "remember_me": "'eltaH"
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
          "user_data": "Your account information"
        },
        "title": "Profile"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Newsletter"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Photos"
      },
      "show": {
        "greeting": {
          "anonymously": "Hello there",
          "personalized": "Hello %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "uploaded %{count} photo",
            "other": "uploaded %{count} photos"
          },
          "pois_added": {
            "one": "added %{count} place",
            "other": "added %{count} places"
          },
          "pois_edited": {
            "one": "edited %{count} place",
            "other": "edited %{count} places"
          },
          "pois_marked": {
            "one": "marked %{count} place",
            "other": "marked %{count} places"
          },
          "text": "You have"
        },
        "text_html": "Hello there,<br>\nWelcome (back) to Wheelmap.org! We’re happy to have you on board! You can browse our <a href=\"http://wheelmap.org/en/blog-2/\">Blog</a> or <a href=\"http://wheelmap.org/en/faqs/\">FAQs</a> if you want to get to know Wheelmap.org a bit better. Or you can learn more about the <a href=\"http://wheelmap.org/en/get-engaged/\">projects</a> we offer around Wheelmap.org and how you can get involved.<br>\nKeep in touch<br>\nTo stay in contact you can subscribe to our monthly newsletter and follow us on <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> and <a href=\"https://twitter.com/wheelmap\">Twitter</a>. We’re looking forward to hearing your opinion and starting a conversation with you!<br>\nAnd now, happy mapping!<br>\nYour Wheelmap team",
        "title": "Overview"
      },
      "widget": {
        "categories": "Show category filter",
        "center": "Map area",
        "empty_center": "Search for center of map …",
        "empty_provider": "Choose a Provider",
        "height": "Height",
        "legends": {
          "embed": "Embed code",
          "embed_explanation": "You can change the specifications for latitude (<code>lat</code>), longitude (<code>lon</code>) and zoom level (<code>zoom</code>) in the code above manually and thereby adjust the map segment (widget) according to the location you want to show.",
          "general": "Create your own Wheelmap widget and embed it in your website or blog.",
          "preview": "Preview",
          "settings": "Settings"
        },
        "providers": "Provider",
        "title": "Widget",
        "width": "Width"
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
    "limited": "loQ naw'laH rutlhquS",
    "no": "naw'laHbe' rutlhquS",
    "unknown": "rutlhquS chaw Daq 'e' Sovbe'lu' ",
    "yes": "naw'laH rutlhquS"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "A project by",
      "based_on": "Based on",
      "become_a_supporter": "Become a supporter",
      "main_supporter": "Main supporter"
    },
    "itunes": {
      "alt": "AppStore Degh",
      "title": "DaH iPhone App yISuq!"
    },
    "logo": {
      "alt": "Wheelmap Degh - rutlhquS chawbogh Daq'e' Sam",
      "title": "Wheelmap - rutlhquS chawbogh Daq'e' Sam"
    },
    "what_is": {
      "fully_accessible": "7cm jen law' letlh jen puS. Hoch Daqmeyvam naw'laHbej rutlhquS. puchpa''e' naw'laHbogh rutlhquS tu'lu'.",
      "limited_accessible": "7cm jen law' letlh jen puS. HochHom Daqmeyvam potlh naw'laH rutlhquS.",
      "not_accessible": "letlh jen law' 7cm jen puS pagh letlh'a' tu'lu' pagh HochHom Daqmeyvam potlh naw'laHbe' rutlhquS.",
      "unknown_accessible": "rutlhquS Dotlh Sovbe'lu'."
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
