let mix = require('laravel-mix');

mix
    .copy('src/index.html', 'public')
    .copy('src/target.html', 'public')
    .js('src/app.js', 'public/js')
    .vue({ version: 3 });
