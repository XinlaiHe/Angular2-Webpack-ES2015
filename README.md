#Webpack + Angular 2 + ES2015

##Dependencies
 - `Angular 2` The framework on which the project is build upon
 - `Webpack` The tool is used to bundle all the js file into one js file
 - `Typescript` The language used, it is a superset of javascript
 - `Typings` The tool is used to list methods for all the libraries installed which will help our codind speed

 ##Configuration
  - `package.json` where all the packages and commands listed, `tsc` will compile ts file to js file, `webpack` will bundle all the js file into one js file
  - `tsconfig.json` where the typescript compiling starts, it also specifies the target language, the src folder and dest foldler for the compilation
  - `typings.json` it includes all the js libraries that are needed for intelli-sense while coding
  - `webpack.config.js` it specifies the bundle src and dest and also output file name