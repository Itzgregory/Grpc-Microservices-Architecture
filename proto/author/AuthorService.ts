import type { MethodDefinition } from '@grpc/proto-loader'
import type { AuthorResponse as _author_AuthorResponse, AuthorResponse__Output as _author_AuthorResponse__Output } from '../author/AuthorResponse';
import type { CreateAuthorRequest as _author_CreateAuthorRequest, CreateAuthorRequest__Output as _author_CreateAuthorRequest__Output } from '../author/CreateAuthorRequest';
import type { DeleteAuthorRequest as _author_DeleteAuthorRequest, DeleteAuthorRequest__Output as _author_DeleteAuthorRequest__Output } from '../author/DeleteAuthorRequest';
import type { DeleteAuthorResponse as _author_DeleteAuthorResponse, DeleteAuthorResponse__Output as _author_DeleteAuthorResponse__Output } from '../author/DeleteAuthorResponse';
import type { GetAuthorRequest as _author_GetAuthorRequest, GetAuthorRequest__Output as _author_GetAuthorRequest__Output } from '../author/GetAuthorRequest';
import type { ListAuthorsRequest as _author_ListAuthorsRequest, ListAuthorsRequest__Output as _author_ListAuthorsRequest__Output } from '../author/ListAuthorsRequest';
import type { ListAuthorsResponse as _author_ListAuthorsResponse, ListAuthorsResponse__Output as _author_ListAuthorsResponse__Output } from '../author/ListAuthorsResponse';
import type { UpdateAuthorRequest as _author_UpdateAuthorRequest, UpdateAuthorRequest__Output as _author_UpdateAuthorRequest__Output } from '../author/UpdateAuthorRequest';

export interface AuthorServiceDefinition {
  CreateAuthor: MethodDefinition<_author_CreateAuthorRequest, _author_AuthorResponse, _author_CreateAuthorRequest__Output, _author_AuthorResponse__Output>
  DeleteAuthor: MethodDefinition<_author_DeleteAuthorRequest, _author_DeleteAuthorResponse, _author_DeleteAuthorRequest__Output, _author_DeleteAuthorResponse__Output>
  GetAuthor: MethodDefinition<_author_GetAuthorRequest, _author_AuthorResponse, _author_GetAuthorRequest__Output, _author_AuthorResponse__Output>
  ListAuthors: MethodDefinition<_author_ListAuthorsRequest, _author_ListAuthorsResponse, _author_ListAuthorsRequest__Output, _author_ListAuthorsResponse__Output>
  UpdateAuthor: MethodDefinition<_author_UpdateAuthorRequest, _author_AuthorResponse, _author_UpdateAuthorRequest__Output, _author_AuthorResponse__Output>
}
