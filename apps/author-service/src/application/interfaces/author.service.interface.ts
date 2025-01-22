import {
  CreateAuthorRequest,
  GetAuthorRequest,
  UpdateAuthorRequest,
  DeleteAuthorRequest,
  ListAuthorsRequest,
  AuthorResponse,
  DeleteAuthorResponse,
  ListAuthorsResponse
} from '../../../../../proto/author';

export interface AuthorService {
  createAuthor(data: CreateAuthorRequest): Promise<AuthorResponse>;
  getAuthor(data: GetAuthorRequest): Promise<AuthorResponse>;
  updateAuthor(data: UpdateAuthorRequest): Promise<AuthorResponse>;
  deleteAuthor(data: DeleteAuthorRequest): Promise<DeleteAuthorResponse>;
  listAuthors(data: ListAuthorsRequest): Promise<ListAuthorsResponse>;
}