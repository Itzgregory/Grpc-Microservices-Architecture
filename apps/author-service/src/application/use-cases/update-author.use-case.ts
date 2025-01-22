import { Injectable } from '@nestjs/common';
import { AuthorRepo } from '../../domain/repositories/author.repo';
import { UpdateAuthorDto } from '../dto/update-author.dto';

@Injectable()
export class UpdateAuthorUseCase {
  constructor(private readonly authorRepo: AuthorRepo) {}

  async execute(id: string, updateAuthorDto: UpdateAuthorDto) {
    return this.authorRepo.update(id, updateAuthorDto);
  }
}
