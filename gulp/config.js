var src = 'src/';
var app = src + 'alto/';
var generated_sources = 'generated_sources/';
var build = 'build/';
var deploy = 'deploy/';

module.exports = {
    //
    APP_NAME: 'alto',
    //
    TEMPLATES_ROOT: 'alto',
    //
    FOLDERS: {
        SRC: src,
        APP: src + app,
        GENERATED_SOURCES: generated_sources,
        GENERATED_SCRIPTS: generated_sources + 'scripts/',
        GENERATED_STYLES: generated_sources + 'styles/',
        GENERATED_IMAGES: generated_sources + 'images/',
        GENERATED_FONTS: generated_sources + 'fonts/',
        BUILD: build,
        DEPLOY: deploy
    },
    //
    FILTERS: {
        SCRIPTS: {
            PROD: [app + '**/*.module.js', app + '**/*.js', generated_sources + 'scripts/templateCacheHtml.js']
        },
        STYLES: {
            CSS: {
                PROD: [app + '**/*.css']
            },
            LESS: {
                DEV: [],
                PROD: []
            }
        },
        HTML: {
            PROD: [app + '**/*.html']
        },
        IMAGES: {
            PROD: [app + '**/*.jpg', app + '**/*.png']
        },
        FONTS: {
            DEV: [],
            PROD: []
        }
    }
}