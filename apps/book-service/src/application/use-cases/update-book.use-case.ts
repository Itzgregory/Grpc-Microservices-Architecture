import { Injectable } from '@nestjs/common';
import { BookRepo } from '../../domain/repositories/book.repo';
import { UpdateBookDto } from '../dto/update-book.dto';

@Injectable()
export class UpdateBookUseCase {
  constructor(private readonly bookRepo: BookRepo) {}

  async execute(id: string, updateBookDto: UpdateBookDto) {
    return this.bookRepo.update(id, updateBookDto);
  }
}
