# TypeScript-Project-Manager

## About

TypeScript project to impliment useage of recently learned TypeScript concepts. **TO DO** Make TS application that allows user to create, edit, update and delete projects.

## Splitting Code into multiple files

Both options provide a clearer way to read and run an application. Recommendation is to use ES Modules because it takes type safety into effect by making sure the code compilers and runs as expected.

### Namespaces & File Bundling

Groups code within file folder structure. TypeScript will compile all into one file. Separate files must be named the same for import / export to work. In this project, App was used as the common namespace name. Along with naming conventions, the tsconfig file must be updated to include `outFile` which tells JavaScript to concatonate namespaces into one single JavaScript file. Also need to update `"module"` from `commonjs` to `amd`. Last update is to HTML file with importing new bundle JavaScript file.

#### Disadvantages of Namespaces

Compiles without errors even if one of the imports is not imported.

### ES 6 Modules / Imports & Exports

Preferred method of utilizing separate files to be compiled into one JavaScript file. Benefit is that user will receive compiling error due to import not being available. _Type safety is available when using ES Modules_
Browsers manage files by each file being compiled into single import. tsconfig file must be updated to `module`:`es2015` and disable `outFile`. Next replace script source within `HTML` file back to app.js and remove defer tag. Then add `type="module"` as attribute to script source.
