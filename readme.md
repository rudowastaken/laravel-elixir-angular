# [DEPRECATED] 
I would personally recommend to use Browserify or Webpack. It scales much better and it's not forcing any paricular structure to your code.

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

Directory structure in `resources/assets/angular` is not forced, the only limitation is to provide at least one **\*module.js** script with module initialization:

```
var foo = angular.module('foo', []);
```

Example use of a nested structure might look like this: 
```
 /resources
     /angular
         foo.module.js
         /some-feature
             some-feature.module.js
             some-feature.controller.js
```

Finally, if you'd like to output to a different directory than the default `public/js`, then you may override this, while changing the name of resulting script if desired:

```
mix.angular("resources/assets/angular/", "public/js/angular/", "application.js");
```
