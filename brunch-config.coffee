exports.config =
    # See http://brunch.io/#documentation for docs.
    files:
        javascripts:
            joinTo:
                'js/app.js': /^app/
                'js/vendor.js': /^(bower_components|vendor)/

    conventions:
        assets: /(bootstrap\/dist\/fonts)|(images)|(app\/views)/

    plugins:
        autoReload:
            enabled:
                js: on
                assets: on
