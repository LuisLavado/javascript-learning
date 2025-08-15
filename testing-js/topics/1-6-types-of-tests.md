**[Curso de Introducción al Testing con JavaScript](./../README.md)**

# Tipos de pruebas

En el desarrollo de software tenemos fases:
* Requerimientos
* Diseño / Arquitectura
* Desarrollo
* QA
* Producción

Dependiendo de la Metodológia de software.

## Conceptos que debemos conocer

### SUT (System Under Test):
Sujeto Bajo Prueba, por ejemplo, Person sería nuestro SUT, no necesariamente tiene que ser un sistema.

### Validar:
A la hora de validar resolvemos la siguiente pregunta: `¿estamos construyendo el sistema correcto?`, por lo general, en la capa de requerimientos con el cliente y si le da valor a él.

### Verificar:
Cuando ya se hacen pruebas, se verifica teniendo en mente la pregunta: `¿estamos construyendo el sistema correctamente?`, casi obviando que ya se produce valor al cliente.

En todas las capas se pueden hacer pruebas, incluso sin código, como en los UML o en la revisión con el equipo de Scrum.

## En las fases:

### Requerimientos
* __SUT__: Requerimientos
* __Ejecución__: Manuales
* __Objetivo__: Validar
* __Herramientas__: Inspección

### Diseño / Arquitectura
* __SUT__: Sistema
* __Ejecución__: Manuales / Automáticas
* __Objetivo__: Verificar
* __Herramientas__: Case Tools

### Desarrollo / Implementación
* __SUT__: Depende
* __Ejecución__: Automáticas
* __Objetivo__: Verificar

Pruebas estaticas, funcionales y no funcionales.

**Pruebas Funcionales** Son las que validan que se cumplan los requerimientos de valor para el cliente (como guardar bien los buenos datos de un usuario); hasta este punto es lo que hemos hecho en VS code. Por norma general, las pruebas unitarias las entrega el desarrollador, el tester se empieza a involucrar en las pruebas de integración o E2E.

**¿Quién hace las pruebas?**
* _Unit test_: Si escribes código tienes que escribir el Unit test

**Pruebas No Funcionales** Verifican más el óptimo manejo de los recursos del software, no el cumplimiento de requisitos persé, como lo son pruebas de:
* Rendimiento
* De carga o estabilidad
* Pruebas de estrés
* Usabilidad
* Seguridad.

Estas pruebas no necesariamente deben estar desde el principio.

NOTA: Hay una nueva área de pruebas No Funcionales que se llama 🐒 Ingeniería del caos, 🐒 su pionero es Netflix. Consiste en desconectar servicios en producción, como por ejemplo, desconectar una BD para ver como reacciona el equipo y establecer soluciones.
