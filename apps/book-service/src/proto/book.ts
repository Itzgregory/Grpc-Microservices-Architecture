
// book.ts
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export interface Book {
  id: string;
  title: string;
  authorId: string;
  publishedYear: number;
  createdAt: Date;
}

export interface BookService {
  createBook(data: CreateBookRequest, metadata?: Metadata): Observable<Book>;
  getBook(data: GetBookRequest, metadata?: Metadata): Observable<Book>;
  updateBook(data: UpdateBookRequest, metadata?: Metadata): Observable<Book>;
  deleteBook(data: DeleteBookRequest, metadata?: Metadata): Observable<DeleteBookResponse>;
  listBooks(data: ListBooksRequest, metadata?: Metadata): Observable<ListBooksResponse>;
  getBooksByAuthor(data: GetBooksByAuthorRequest, metadata?: Metadata): Observable<ListBooksResponse>;
}

export interface CreateBookRequest { title: string; authorId: string; publishedYear: number; }
export interface GetBookRequest { id: string; }
export interface UpdateBookRequest { id: string; title: string; authorId: string; publishedYear: number; }
export interface DeleteBookRequest { id: string; }
export interface DeleteBookResponse { success: boolean; }
export interface ListBooksRequest { page: number; limit: number; }
export interface ListBooksResponse { books: Book[]; total: number; }
export interface GetBooksByAuthorRequest { authorId: string; }
