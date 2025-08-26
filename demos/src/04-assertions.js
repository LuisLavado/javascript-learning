// matchers
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
