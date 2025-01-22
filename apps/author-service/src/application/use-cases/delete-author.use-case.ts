import { Injectable } from '@nestjs/common';
import { AuthorRepo } from '../../domain/repositories/author.repo';

@Injectable()
export class DeleteAuthorUseCase {
  constructor(private readonly authorRepo: AuthorRepo) {}

  async execute(id: string) {
    return this.authorRepo.delete(id);
  }
}
