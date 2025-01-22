// Original file: proto/author.proto

import type { AuthorResponse as _author_AuthorResponse, AuthorResponse__Output as _author_AuthorResponse__Output } from '../author/AuthorResponse';

export interface ListAuthorsResponse {
  'authors'?: (_author_AuthorResponse)[];
  'total'?: (number);
}

export interface ListAuthorsResponse__Output {
  'authors': (_author_AuthorResponse__Output)[];
  'total': (number);
}
