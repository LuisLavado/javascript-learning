const BooksService = require('./books.service');

const fakeBooks = [
  { _id: 1, name: 'Harry Potter' },
];

const mongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => { },
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => mongoLibStub));

describe('Test for BooksServices', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
    });
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books[0].name);
      // Assert
      expect(books[0].name).toEqual('Harry Potter');
    });
  });
});
