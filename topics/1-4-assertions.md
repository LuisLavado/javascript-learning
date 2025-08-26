**[Curso de Introducción al Testing con JavaScript](./../README.md)**

# Assertions / matchers
Nos referimos a `Afirmaciones/comparadores`:
```
test('test obj', () => {
  const data = { name: 'nico' };
  data.lastname = 'Lavado';
  expect(data).toEqual({ name: "luis", lastname: 'Lavado' });
});

test('test null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('test boolean', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('test string', () => {
  expect('Christoph').toMatch(/stop/);
});

test('test list / array', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
```

## setup / Teardown
En Jest hay cláusulas para isolar las pruebas, donde un escenario de pruebas no afecte a otro, para ello se agrupan los casos con `describe()`. **`Teardown`** se trata de demoler o quitar casos de prueba anteriores para que no afecten en el actual al usar los `hooks`, que son sentencias adicionales según el tiempo de ejecución del grupo o los casos.
```
// `describe` reune un conjunto de bruebas, mejora la lectura del código y la encapsulación.
describe('group 1', () => {
  // beforeAll es una sentencia [setup] que corre antes de todas las pruebas xej update db
  // este tipo de utilidad se puede llamar hook y respeta el alcance o scope del grupo (describe).
  beforeAll(() => {
    console.log('beforeAll');
    // update bd
  });

  // afterAll es lo mismo pero después XD.
  afterAll(() => {
    console.log('afterAll');
    // down db
  });

  // beforeEach corre antes de cada caso de prueba hasta el último.
  beforeEach(() => {
    console.log('beforeEach');
  });

  // afterEach es lo mismo pero después XD.
  afterEach(() => {
    console.log('afterEach');
  });


  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('group 2', () => {
    beforeAll(() => {
      console.log('beforeAll');
      // update bd
    });

    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });

    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
```
[<- Previous lesson |](./1-3-static-tests.md)
[Next Lesson ->](./1-5-setup-implemented.md)
