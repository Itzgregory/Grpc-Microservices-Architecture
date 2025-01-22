import { Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthorService } from '../../application/interfaces/author.service.interface';
import { AuthorRepo } from '../../domain/repositories/author.repo';
import {
  CreateAuthorRequest,
  GetAuthorRequest,
  UpdateAuthorRequest,
  DeleteAuthorRequest,
  ListAuthorsRequest,
  AuthorResponse,
  DeleteAuthorResponse,
  ListAuthorsResponse,
} from '../../../../../proto/author/index';

@Injectable()
export class AuthorGrpcService implements AuthorService {
  constructor(private readonly authorRepo: AuthorRepo) {}

  @GrpcMethod('AuthorService', 'createAuthor')
  async createAuthor(data: CreateAuthorRequest): Promise<AuthorResponse> {
    const author = await this.authorRepo.create({
      name: data.name,
      email: data.email,
    });
    return {
      id: author.id,
      name: author.name,
      email: author.email,
      createdAt: author.createdAt,
    };
  }


  @GrpcMethod('AuthorService', 'GetAuthorById')
  async getAuthor(data: GetAuthorRequest): Promise<AuthorResponse> {
    const author = await this.authorRepo.findOne(data.id); // Fetch author by ID
    if (!author) {
      throw new Error('Author not found');
    }
    return {
      id: author.id,
      name: author.name,
      email: author.email,
      createdAt: author.createdAt,
    };
  }


  @GrpcMethod('AuthorService', 'updateAuthor')
  async updateAuthor(data: UpdateAuthorRequest): Promise<AuthorResponse> {
    const author = await this.authorRepo.update(data.id, {
      name: data.name,
      email: data.email,
    });
    return {
      id: author.id,
      name: author.name,
      email: author.email,
      createdAt: author.createdAt,
    };
  }

  @GrpcMethod('AuthorService', 'deleteAuthor')
  async deleteAuthor(data: DeleteAuthorRequest): Promise<DeleteAuthorResponse> {
    const success = await this.authorRepo.delete(data.id);
    return { success };
  }

  @GrpcMethod('AuthorService', 'listAuthor')
  async listAuthors(data: ListAuthorsRequest): Promise<ListAuthorsResponse> {
    const authors = await this.authorRepo.findAll(data.page, data.limit);
    return {
      authors: authors.map(author => ({
        id: author.id,
        name: author.name,
        email: author.email,
        createdAt: author.createdAt,
      })),
      total: authors.length,
    };
  }
}
