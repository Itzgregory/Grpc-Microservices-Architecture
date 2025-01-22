import { Injectable } from '@nestjs/common';
import { AuthorRepo } from '../../domain/repositories/author.repo';

@Injectable()
export class ListAuthorsUseCase {
  constructor(private readonly authorRepo: AuthorRepo) {}

  async execute(page: number, limit: number) {
    return this.authorRepo.findAll(page, limit);
  }
}
