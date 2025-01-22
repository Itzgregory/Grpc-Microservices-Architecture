import { Injectable } from '@nestjs/common';
import { BookRepo } from '../../domain/repositories/book.repo';

@Injectable()
export class GetBookUseCase {
  constructor(private readonly bookRepo: BookRepo) {}

  async execute(id: string) {
    return this.bookRepo.findOne(id);
  }
}
