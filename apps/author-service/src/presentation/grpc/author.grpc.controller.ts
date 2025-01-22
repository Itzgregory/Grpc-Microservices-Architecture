import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthorGrpcService } from '../../infrastructure/grpc/author.grpc-services';
import {
  CreateAuthorRequest,
  AuthorResponse,
  GetAuthorRequest,
  UpdateAuthorRequest,
  DeleteAuthorRequest,
  ListAuthorsRequest,
  DeleteAuthorResponse,
  ListAuthorsResponse
} from '../../../../../proto/author/index';

@Controller()
export class AuthorGrpcController {
  constructor(private readonly authorGrpcService: AuthorGrpcService) {}

  @GrpcMethod('AuthorService', 'createAuthor')
  async createAuthor(data: CreateAuthorRequest): Promise<AuthorResponse> {
    return this.authorGrpcService.createAuthor(data);
  }

  @GrpcMethod('AuthorService', 'getAuthor')
  async getAuthor(data: GetAuthorRequest): Promise<AuthorResponse> {
    return this.authorGrpcService.getAuthor(data);
  }

  @GrpcMethod('AuthorService', 'updateAuthor')
  async updateAuthor(data: UpdateAuthorRequest): Promise<AuthorResponse> {
    return this.authorGrpcService.updateAuthor(data);
  }

  @GrpcMethod('AuthorService', 'deleteAuthor')
  async deleteAuthor(data: DeleteAuthorRequest): Promise<DeleteAuthorResponse> {
    return this.authorGrpcService.deleteAuthor(data);
  }

  @GrpcMethod('AuthorService', 'listAuthor')
  async listAuthors(data: ListAuthorsRequest): Promise<ListAuthorsResponse> {
    return this.authorGrpcService.listAuthors(data);
  }
}