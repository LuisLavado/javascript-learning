**[Curso de Introducción al Testing con JavaScript](./../README.md)**

# ¿Qué es el testing?
En el mundo actual las tecnologias con las que vivimos necesitan codigo, esto ha hecho que el desarrollo de software se haya vuelto industrial, donde contamos con procesos y herramientas, como el testing, que nos permiten entregar mas rapido proyectos de calidad a nuestros clientes reduciendo el riesgo de errores en produccion.

## ¿Por que hacer testing?
Normalmente hay cuatro fases en el desarrollo de software para crear un producto:

Diseño ⇒ Desarrollo ⇒ Pruebas ⇒ Produccion

En estas fases, detectar un error se vuelve cada vez mas costoso. Ahi es donde hacemos tecnicas para prevenir estas situaciones. El testing es la manera en la que nosotros gestionamos el riesgo y tratamos de evitar, en la medida de lo posible, los errores en el sistema.

Gestionar riesgos como Google:
* __Analisis de codigo estatico:__ Mientras desarrollamos vamos viendo nuestros resultados.
* __Pruebas unitarias:__ Nos aseguramos que el codigo funciona como queremos.
* __Pruebas de integracion:__ Verificar que varios elementos funcionan bien trabajando juntos.
* __Revision de codigo:__ Equipo o persona encargada de revisar el codigo de las demas personas.
* __QA:__ Equipos de creacion de pruebas automaticas o manuales.

## La piramide del testing
La pirámide clásica del testing: (de menos a más costoso y tendría que haber más pruebas de las primeras que de las últimas)

* unit tests
* integration tests
* end to end tests (e2e)
* ui test: emulan el dispositivo físico

En javascript se recomienda en vez la pirámide el trofeo de tests:

* static tests: el tronco (el segundo mayor número de pruebas)
* unit tests: mismo num. de pruebas que e2e y menos que static e integration
* integration tests: el mayor número de pruebas debe ser aquí
* e2e tests: mismo tamaño que unit tests y menos que static e integration

## Hablemos sobre deuda técnica
Deuda Técnica Igual que en las finanzas, las deudas no son buenas ni malas, solo son una estrategia para alcanzar algo y luego se paga.

haciendo pruebas se maneja el `riesgo`

* Diseño
* Desarrollo
* Pruebas
* Producción

El momento y pruebas dependen de la fase en la que se encuentra la compañía:

* Tracción
* Inflexión
* Escala
* Expansión

La deuda de deficiencia del desarrollador puede ser alta porque en la fase de tracción, la compañía busca velocidad > precisión , de modo que en esta etapa el testing no se valora, ya que buscan lanzar, lanzar, lanzar...

Cuando se entra a la fase de inflexión, hay más usuarios y se empiezan a escribir más pruebas, curando la deuda.

## Herramientas de testing
Estas herramientas mencionadas están clasificadas según el tipo o nivel de pruebas a realizar.

* __Multipropósito o Robustas__: Pueden ejecutar la mayoría de pruebas de la pirámide o trofeo, tanto para backend, frontend, integration test, algunas hasta UI y API s testing. ++Jest,++ _Chai, Mocha, Ava, Jasmine _

* __UI Testing__: Pruebas desplegadas en un dispositivo real o simulado bajo un Browser (navegador) automatizando toques y gestos en la aplicación. ++Playwright,++ _ Cypress, WebdriverIO, Puppeteer_

* __API Testing__: En general, las APIs no tienen UI, usan protocolos de servicios por peticiones. ++Supertest,++ Dredd, Postman

* __Pruebas Estáticas__: Estas pruebas no ejecutan el código, estas herramientas se integran al editor de código y van analizando si hay alguna mala práctica. ESLint, Prettier, Typescript tools (TSLint)

Todas estas herramientas manejan una sola estructura (de forma), de modo que el lenguaje o framework pasa a un segundo plano.

## Enlaces

* [State of JavaScript](https://stateofjs.com/)
