**[Curso de Introducción al Testing con JavaScript](./../README.md)**

# Pruebas estáticas
Las pruebas estáticas se caracterizan por no ejecutar código, solo lo analizan y nos dan un feedback temprano.

Estas nos ayudan a ver si estamos teniendo buenas prácticas al escribir nuestro código.

Hay herramientas que nos ayudan a ejecutar esta pruebas estáticas como lo son:

* ESLint
* Prettier
* TypeScript

Vamos a empezar a crear pruebas estáticas con ESLint, para esto debemos instalarlo:
```
npm i -D eslint
```
Luego de instalarlo, vamos a ejecutar el siguiente comando que nos permitirá traer ciertas configuraciones y establecer configuraciones por defecto:
```
npx eslint --init
```

Luego nos va a preguntar las siguientes opciones:

* Si queremos hacer un check de nuestra sintaxis
* Si queremos hacer check de sintaxis y encontrar problemas
* Si queremos hacer check de sintaxis, encontrar problemas y forzar el estilo de código

Luego nos preguntará una serie de cosas relacionadas a que tecnologías estamos utilizando en nuestro proyecto, respondemos estas preguntas.

Luego nos pregunta si corre en navegador o en un entorno de Node.

Nos pregunta si queremos usar una guía de estilo de código, la más popular y las más recomendable suele ser la de Airbnb.

Luego elegimos el formato del código.

Por ultimo nos pregunta si deseamos instalar esos paquetes.

Ya con esto podemos tener un análisis de código estático para poder tener un estándar en el cual nos podamos basar a la hora de escribir nuestro código y siguiendo buenas practicas, siguiendo un estándar que nos permita escribir un código de la misma forma siguiendo convenciones.

Luego en el archivo de configuración package.json podemos establecer un script que nos permita hacer un examen de cualquier archivo en nuestra carpeta scr.

```
{
  ...
  "scripts": {
    ...
		// Marca los errores
    "lint": "eslint src/**",
		// Marcar los errores y arreglar los problemas
    "lint:fix": "eslint src/** --fix"
  },
  ...
}
```
```
npm run lint
```
Arreglar errores de Jest
Para que no nos salte errores cuando usamos nuestras funciones de Jest usamos en el archivo de configuración de .eslint.js la siguiente configuración:


module.exports = {
  env: {
    ...
		// Todo lo que venga de Jest no los alerta
    jest: true,
  },
  ...
};
