import type { MethodDefinition } from '@grpc/proto-loader'
import type { BookResponse as _book_Book, Book__Output as _book_Book__Output } from './BookResponse';
import type { CreateBookRequest as _book_CreateBookRequest, CreateBookRequest__Output as _book_CreateBookRequest__Output } from '../book/CreateBookRequest';
import type { DeleteBookRequest as _book_DeleteBookRequest, DeleteBookRequest__Output as _book_DeleteBookRequest__Output } from '../book/DeleteBookRequest';
import type { DeleteBookResponse as _book_DeleteBookResponse, DeleteBookResponse__Output as _book_DeleteBookResponse__Output } from '../book/DeleteBookResponse';
import type { GetBookRequest as _book_GetBookRequest, GetBookRequest__Output as _book_GetBookRequest__Output } from '../book/GetBookRequest';
import type { GetBooksByAuthorRequest as _book_GetBooksByAuthorRequest, GetBooksByAuthorRequest__Output as _book_GetBooksByAuthorRequest__Output } from '../book/GetBooksByAuthorRequest';
import type { ListBooksRequest as _book_ListBooksRequest, ListBooksRequest__Output as _book_ListBooksRequest__Output } from '../book/ListBooksRequest';
import type { ListBooksResponse as _book_ListBooksResponse, ListBooksResponse__Output as _book_ListBooksResponse__Output } from '../book/ListBooksResponse';
import type { UpdateBookRequest as _book_UpdateBookRequest, UpdateBookRequest__Output as _book_UpdateBookRequest__Output } from '../book/UpdateBookRequest';

export interface BookServiceDefinition {
  CreateBook: MethodDefinition<_book_CreateBookRequest, _book_Book, _book_CreateBookRequest__Output, _book_Book__Output>
  DeleteBook: MethodDefinition<_book_DeleteBookRequest, _book_DeleteBookResponse, _book_DeleteBookRequest__Output, _book_DeleteBookResponse__Output>
  GetBook: MethodDefinition<_book_GetBookRequest, _book_Book, _book_GetBookRequest__Output, _book_Book__Output>
  GetBooksByAuthor: MethodDefinition<_book_GetBooksByAuthorRequest, _book_ListBooksResponse, _book_GetBooksByAuthorRequest__Output, _book_ListBooksResponse__Output>
  ListBooks: MethodDefinition<_book_ListBooksRequest, _book_ListBooksResponse, _book_ListBooksRequest__Output, _book_ListBooksResponse__Output>
  UpdateBook: MethodDefinition<_book_UpdateBookRequest, _book_Book, _book_UpdateBookRequest__Output, _book_Book__Output>
}
