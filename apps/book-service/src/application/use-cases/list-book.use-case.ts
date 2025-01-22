import { Injectable } from '@nestjs/common';
import { BookRepo } from '../../domain/repositories/book.repo';

@Injectable()
export class ListBooksUseCase {
  constructor(private readonly bookRepo: BookRepo) {}

  async execute(page: number, limit: number) {
    return this.bookRepo.findAll(page, limit);
  }
}
