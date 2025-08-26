**[Curso de Introducción al Testing con JavaScript](./../README.md)**

# Tu primer test

## Creando el proyecto

```
mkdir testing-js
cd testing-js
touch .gitignore
touch .editorconfig // Para los OS: Linux, Windows MacOS
```
Llenamos los códigos generados desde los enlaces:
* [Gitignore generator](https://www.toptal.com/developers/gitignore)
* [editorconfig Airbnb ](https://github.com/airbnb/javascript/blob/master/.editorconfig)
```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
# editorconfig-tools is unable to ignore longs strings or urls
max_line_length = off

[CHANGELOG.md]
indent_size = false
```
Creamos las carpetas en donde vamos a trabajar
```
// En testing-js
mkdir api
mkdir demos
mkdir webapp
```
Ingresamos a `demos`:
```
cd demos
npm init -y
touch .editorconfig // Para node
```

Instalamos `jest`, aquí el enlace de [Jest](https://jestjs.io/docs/getting-started)
```
npm install --save-dev jest
````
Para que VS Code pueda autocompletar código de Jest, instalar esta dependencia de npm:
```
npm i @types/jest -D
```

Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a sum.js file:
```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```
Then, create a file named sum.test.js. This will contain our actual test:
```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
Add the following section to your package.json:
```
{
  "scripts": {
    "test": "jest"
  }
}
```
Finally, `run yarn test` or `npm test` and Jest will print this message:
```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```

[<- Previous lesson |](./1-1-what-is-testing.md)
[Next Lesson ->](./1-3-static-tests.md)
