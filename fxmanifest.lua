fx_version "adamant"
games {"gta5", "rdr3"};

ui_page "UI/main.html"

files {
    "UI/main.html",
    "UI/script.js",
    "UI/src/jquery.js",
    "UI/assets/styles/*.css",
    "UI/assets/fonts/*.ttf",
}

client_script "client.lua"

exports {"UINotification"}