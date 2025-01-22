import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { BookGrpcService } from '../../infrastructure/grpc/book.grpc-service';
import {
  CreateBookRequest,
  BookResponse,
  GetBookRequest,
  UpdateBookRequest,
  DeleteBookRequest,
  ListBooksRequest,
  DeleteBookResponse,
  ListBooksResponse
} from '../../../../../proto/book/index';

@Controller()
export class BookGrpcController {
  constructor(private readonly bookGrpcService: BookGrpcService) {}

  @GrpcMethod('BookService', 'createBook')
  async createBook(data: CreateBookRequest): Promise<BookResponse> {
    return this.bookGrpcService.createBook(data);
  }

  @GrpcMethod('BookService', 'getBook')
  async getBook(data: GetBookRequest): Promise<BookResponse> {
    return this.bookGrpcService.getBook(data);
  }

  @GrpcMethod('BookService', 'updateBook')
  async updateBook(data: UpdateBookRequest): Promise<BookResponse> {
    return this.bookGrpcService.updateBook(data);
  }

  @GrpcMethod('BookService', 'deleteBook')
  async deleteBook(data: DeleteBookRequest): Promise<DeleteBookResponse> {
    return this.bookGrpcService.deleteBook(data);
  }

  @GrpcMethod('BookService', 'listBook')
  async listBooks(data: ListBooksRequest): Promise<ListBooksResponse> {
    return this.bookGrpcService.listBooks(data);
  }
}