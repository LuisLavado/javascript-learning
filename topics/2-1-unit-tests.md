**[Curso de Introducción al Testing con JavaScript](./../README.md)**

# Pruebas unitarias (Pruebas Aisladas)
Son las más comunes y se enfocan en probar unidades específicas, incluso conectando dependencias como BD o librerías emuladas (Dummies); se les conoce también como pruebas de estado o de caja negra, ya que solo importan las entradas y las salidas, en algunas ocasiones se hace con dependencias reales.

Una unidad puede ser una función o un método o una clase, depende del paradigma usado en desarrollo (funcional o POO); una unidad debe tener solo una responsabilidad en específico.

Una utilidad importante de las Unit Test es el Cover Report (reporte de cobertura).

## Coverage report (reporte de cobertura)
**Es una medida porcentual** que evalúa el grado en que un código ha sido ejecutado.

Es una medida porcentual que indica cuanto falta probar del código que va a ir a producción, cuál ya está probado, cuál no se usa. ISO y la FAA exigen 100% de cobertura, pero en la realidad no es tan así, por ejemplo hacer test a setter y getters puede llegar a ser innecesario, este 100% no garantiza que aparezcan errores ni que sean el mejor set de pruebas.

Nos da un `equilibrio` para no hacer pruebas innecesarias.
También es usada como técnica para eliminar código que `nunca` va a ser usado.

Comando:
```
npm run test -- --coverage
```
[<- Previous lesson |](./1-7-methodologies.md)
[Next Lesson ->](./2-2-api-project.md)
