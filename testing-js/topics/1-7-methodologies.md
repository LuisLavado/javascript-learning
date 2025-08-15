**[Curso de Introducción al Testing con JavaScript](./../README.md)**

# Metodologías

* __TDD (Test Driven Development)__: Desarrollo guiado por pruebas, donde primero se hacen las pruebas antes de escribir el código (primero los expects).
* __BDD (Behavior Driven Development)__: Desarrollo guiado por comportamiento de acuerdo a los requisitos y luego las pruebas.

## Conceptos a tener en cuenta
### AAA (Arrange, Act, Assert)
"Mantra" para hacer pruebas.

- **Arrange** (Preparar) / **Given** (Dado algo)
- **Act** (Actuar, Ejecutar) / **When** (Cuando)
- **Assert** (Asertar,verificar lo esperado) / **Then** (Entonces)

### Falso Positívo
Cuando una prueba índica un error, pero todo está bien, por ejemplo, testeando el método `suma de 1 + 1 y pongo el expect en 5`, es un falso positivo, luego la prueba está mal.

### Falso Negativo
Son más comunes, ya que parece que todo está normal, pero no se ha identificado el error. Puede que el de pruebas no sea tan amplio como para encontrar el error, debería ser más amplio; esto sucede cuando caemos en tan solo, probar el Happy Path, probar las condiciones en las que sabemos que el sistema funciona, por ejemplo, en el SET de dividir las primeras pruebas salían bien porque no se tomó en cuenta la división entre cero 0, luego se hizo la prueba y el refactor. En caso de falso negativo lo mejor es aplicar TDD.

### Sistema Legacy
Son sistemas que te piden agregar pruebas a algo funcional, incluso en paralelo; hay que refactorizar los métodos enormes a pequeños para hacer unit test de pocos a muchos métodos; legacy no lleva una buena arquitectura.

### Clean Architecture
Este patrón lleva buenas prácticas desde el principio, cada método está bien dividido y con responsabilidades acertadas, es mucho más facil de agregar el set de pruebas.
