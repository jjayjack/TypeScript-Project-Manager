# TypeScript-Project-Manager

## About

TypeScript project to impliment useage of recently learned TypeScript concepts. **TO DO** Make TS application that allows user to create, edit, update and delete projects.

## Splitting Code into multiple files

### Namespaces & File Bundling

Groups code within file folder structure. TypeScript will compile all into one file. Separate files must be named the same for import / export to work. In this project, App was used as the common namespace name. Along with naming conventions, the tsconfig file must be updated to include `outFile` which tells JavaScript to concatonate namespaces into one single JavaScript file. Also need to update `"module"` from `commonjs` to `amd`. Last update is to HTML file with importing new bundle JavaScript file.

### ES 6 Modules / Imports & Exports

Browsers manage files by eac h file being compiled into single import
