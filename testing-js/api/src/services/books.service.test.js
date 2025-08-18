const BooksService = require('./books.service');

const fakeBooks = [
  { _id: 1, name: 'Harry Potter' },
];

const mockGetAll = jest.fn(); // Es una funcion fantasma que manejaremos.

/**
 * jest.mock('../lib/mongo.lib'
 * Suplanta a la llamada de la libreria de mongo, para que cuando sea llamada en su lugar
 * ejecute otro jest.fn(), y mediante mockImplementation sea seteado
 * el objeto con el metodo getAll: mockGetAll.
 */
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({ getAll: mockGetAll, create: () => { } })));

describe('Test for BooksServices', () => {
  let service;

  beforeEach(() => {
    /**
     * service = new BooksService() crea una instancia de BookService, que ya contiene
     * la trampa que al llamar a mongo, lo suplanta con los metodos getAll y create.
     */
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      mockGetAll.mockResolvedValue([{ _id: 1, name: 'Harry Potter 2' }]);
      // Act
      const books = await service.getBooks({});
      console.log(books[0].name);
      // Assert
      expect(books[0].name).toEqual('Harry Potter 2');
    });
  });
});
