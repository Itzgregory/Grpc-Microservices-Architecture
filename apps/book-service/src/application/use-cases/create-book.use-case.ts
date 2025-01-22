import { Injectable } from '@nestjs/common';
import { BookRepo } from '../../domain/repositories/book.repo';
import { CreateBookDto } from '../dto/create-book.dto';
import {BookResponse} from '../dto/book.response';

@Injectable()
export class CreateBookUseCase {
  constructor(private readonly bookRepoository: BookRepo) {}

  async execute(createBookDto: CreateBookDto): Promise<BookResponse> {
    const book = await this.bookRepoository.create(createBookDto);
    return new BookResponse(book);
  }
}
