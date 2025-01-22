import {
  CreateBookRequest,
  GetBookRequest,
  UpdateBookRequest,
  DeleteBookRequest,
  ListBooksRequest,
  BookResponse,
  DeleteBookResponse,
  ListBooksResponse
} from '../../../../../proto/book';

export interface BookService {
  createBook(data: CreateBookRequest): Promise<BookResponse>;
  getBook(data: GetBookRequest): Promise<BookResponse>;
  updateBook(data: UpdateBookRequest): Promise<BookResponse>;
  deleteBook(data: DeleteBookRequest): Promise<DeleteBookResponse>;
  listBooks(data: ListBooksRequest): Promise<ListBooksResponse>;
}
