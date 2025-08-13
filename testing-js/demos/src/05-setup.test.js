/**
 * setup/Teardown
 * En Jest hay cláusulas para isolar las pruebas, donde un escenario de pruebas no afecte a otro, para ello se agrupan los casos con describe(). Teardown se trata de demoler o quitar casos de prueba anteriores para que no afecten en el actual al usar los hooks, que son sentencias adicionales según el tiempo de ejecución del grupo o los casos.
 */

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
