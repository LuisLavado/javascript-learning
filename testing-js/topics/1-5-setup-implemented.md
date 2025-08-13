**[Curso de Introducción al Testing con JavaScript](./../README.md)**

# Implementado Setup

Enlace: https://github.com/platzi/curso-testing-js

* 06-person.js:
```
class Person {
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }

  calcIMC() {
    const result = Math.round(this.weight / (this.height * this.height));
    if (result < 0) {
      return 'no found';
    } if (result >= 0 && result < 18) {
      return 'down';
    } if (result >= 18 && result <= 24) {
      return 'normal';
    } if (result >= 25 && result <= 26) {
      return 'overweight';
    } if (result >= 27 && result <= 29) {
      return 'overweight level 1';
    } if (result >= 30 && result <= 39) {
      return 'overweight level 2';
    } if (result >= 40) {
      return 'overweight level 3';
    }
    return 'not found';
  }
}
module.exports = Person;
```
* 06-person.test.js:
```
const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Luis', 45, 1.7);
  });

  test('should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
```

