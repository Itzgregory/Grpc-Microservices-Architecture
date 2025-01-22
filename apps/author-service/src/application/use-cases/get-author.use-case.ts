import { Injectable } from '@nestjs/common';
import { AuthorRepo } from '../../domain/repositories/author.repo';

@Injectable()
export class GetAuthorUseCase {
  constructor(private readonly authorRepo: AuthorRepo) {}

  async execute(id: string) {
    return this.authorRepo.findOne(id);
  }
}
