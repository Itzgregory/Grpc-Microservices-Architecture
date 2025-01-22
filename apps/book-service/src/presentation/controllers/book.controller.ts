import { Controller, Get, Param } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateBookUseCase } from '../../application/use-cases/create-book.use-case';  
import { CreateBookDto } from '../../application/dto/create-book.dto';  
import { BookResponse } from '../../application/dto/book.response';  
import { BookGrpcService } from 'src/infrastructure/grpc/book.grpc-service';

@Controller('books') 
export class BookController {
  constructor(
    private readonly createBookUseCase: CreateBookUseCase,
    private readonly bookGrpcService: BookGrpcService 
  ) {}

  @GrpcMethod('BookService', 'CreateBook')
  async createBook(data: CreateBookDto): Promise<BookResponse> {
    return this.createBookUseCase.execute(data);
  }

  @Get('/author/:id')
  async getAuthorById(@Param('id') id: string) {
    return await this.bookGrpcService.getAuthorById(id);
  }
}
