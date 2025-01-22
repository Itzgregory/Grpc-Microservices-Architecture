const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const fs = require('fs');
const grpc = require('@grpc/grpc-js');

const authorOutDir = path.join(__dirname, 'apps', 'author-service', 'src', 'proto');
const bookOutDir = path.join(__dirname, 'apps', 'book-service', 'src', 'proto');

[authorOutDir, bookOutDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

async function generateProtos() {
  try {
    const authorProtoPath = path.join(__dirname, 'proto', 'author.proto');
    const bookProtoPath = path.join(__dirname, 'proto', 'book.proto');

    const authorPackageDefinition = await protoLoader.load(authorProtoPath, options);
    const bookPackageDefinition = await protoLoader.load(bookProtoPath, options);

    const authorGrpcObject = grpc.loadPackageDefinition(authorPackageDefinition);
    const bookGrpcObject = grpc.loadPackageDefinition(bookPackageDefinition);

    const authorTs = `
// author.ts
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export interface Author {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface AuthorService {
  createAuthor(data: CreateAuthorRequest, metadata?: Metadata): Observable<Author>;
  getAuthor(data: GetAuthorRequest, metadata?: Metadata): Observable<Author>;
  updateAuthor(data: UpdateAuthorRequest, metadata?: Metadata): Observable<Author>;
  deleteAuthor(data: DeleteAuthorRequest, metadata?: Metadata): Observable<DeleteAuthorResponse>;
  listAuthors(data: ListAuthorsRequest, metadata?: Metadata): Observable<ListAuthorsResponse>;
}

export interface CreateAuthorRequest { name: string; email: string; }
export interface GetAuthorRequest { id: string; }
export interface UpdateAuthorRequest { id: string; name: string; email: string; }
export interface DeleteAuthorRequest { id: string; }
export interface DeleteAuthorResponse { success: boolean; }
export interface ListAuthorsRequest { page: number; limit: number; }
export interface ListAuthorsResponse { authors: Author[]; total: number; }
`;

    const bookTs = `
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
`;

    fs.writeFileSync(path.join(authorOutDir, 'author.ts'), authorTs);
    fs.writeFileSync(path.join(bookOutDir, 'book.ts'), bookTs);

    console.log('Proto files generated successfully!');
  } catch (error) {
    console.error('Error generating proto files:', error);
    process.exit(1);
  }
}

generateProtos();
