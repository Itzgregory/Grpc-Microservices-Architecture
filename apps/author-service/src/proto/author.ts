
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
