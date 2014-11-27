## Usage

This is a simple wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-angular');

elixir(function(mix) {
   mix.angular();
});
```

This will scan your `resources/assets/angular` directory for all .js files. Offers check of your source files by *JSHint*, generates *Sourcemaps*,  concatenates and minifies (if environment is set to production) the final script.

Directory structure in `resources/assets/angular` is not forced, the only limitation is to provide at least one **Foo_module.js** script with module initialization:

```
var foo = angular.module('foo', []);
```

Finally, if you'd like to output to a different directory than the default `public/js`, then you may override this, while changing the name of resulting script if desired:

```
mix.angular("resources/assets/angular/", "public/js/angular/", "application.js");
```
