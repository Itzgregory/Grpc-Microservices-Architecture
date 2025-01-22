import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { BookService } from '../../application/interfaces/book.service.interface';
import { BookRepo } from '../../domain/repositories/book.repo';
import {
  CreateBookRequest,
  GetBookRequest,
  UpdateBookRequest,
  DeleteBookRequest,
  ListBooksRequest,
  BookResponse,
  DeleteBookResponse,
  ListBooksResponse,
} from '../../../../../proto/book/index';

interface AuthorServiceClient {
  getAuthorById(data: { id: string }): Observable<any>;
}

@Injectable()
export class BookGrpcService implements BookService, OnModuleInit {
  private authorService: AuthorServiceClient;

  constructor(
    private readonly bookRepo: BookRepo,
    @Inject('AUTHOR_PACKAGE') private readonly client: ClientGrpc
  ) {}

  onModuleInit() {
    this.authorService = this.client.getService<AuthorServiceClient>('AuthorService');
  }

  @GrpcMethod('BookService', 'createBook')
  async createBook(data: CreateBookRequest): Promise<BookResponse> {
    const book = await this.bookRepo.create({
      title: data.title,
      authorId: data.authorId,
      publishedYear: data.publishedYear
    });
    return {
      id: book.id,
      title: book.title,
      authorId: book.authorId.toString(), 
      publishedYear: book.publishedYear,
      createdAt: book.createdAt.toISOString(), 
    };
  }

  @GrpcMethod('BookService', 'getBook')
  async getBook(data: GetBookRequest): Promise<BookResponse> {
    const book = await this.bookRepo.findOne(data.id);
    return {
      id: book.id,
      title: book.title,
      authorId: book.authorId.toString(),
      publishedYear: book.publishedYear,
      createdAt: book.createdAt.toISOString(), 
    };
  }

  async getAuthorById(id: string) {
    return this.authorService.getAuthorById({ id }).toPromise();
  }

  @GrpcMethod('BookService', 'updateBook')
  async updateBook(data: UpdateBookRequest): Promise<BookResponse> {
    const book = await this.bookRepo.update(data.id, {
      title: data.title,
      authorId: data.authorId,
      publishedYear: data.publishedYear,
    });
    return {
      id: book.id,
      title: book.title,
      authorId: book.authorId.toString(),  
      publishedYear: book.publishedYear,
      createdAt: book.createdAt.toISOString(), 
    };
  }

  @GrpcMethod('BookService', 'deleteBook')
  async deleteBook(data: DeleteBookRequest): Promise<DeleteBookResponse> {
    const success = await this.bookRepo.delete(data.id);
    return { success };
  }

  @GrpcMethod('BookService', 'listBooks')
  async listBooks(data: ListBooksRequest): Promise<ListBooksResponse> {
    const books = await this.bookRepo.findAll(data.page, data.limit);
    return {
      books: books.map(book => ({
        id: book.id,
        title: book.title,
        authorId: book.authorId.toString(),  
        publishedYear: book.publishedYear,
        createdAt: book.createdAt.toISOString(), 
      })),
      total: books.length,
    };
  }
}
