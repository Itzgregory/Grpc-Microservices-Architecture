import { Injectable } from '@nestjs/common';
import { AuthorRepo } from '../interfaces/author.repo.interface';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { AuthorResponse } from '../dto/author.response';

@Injectable()
export class CreateAuthorUseCase {
  constructor(private readonly authorRepository: AuthorRepo) {}

  async execute(createAuthorDto: CreateAuthorDto): Promise<AuthorResponse> {
    const author = await this.authorRepository.create(createAuthorDto);
    return new AuthorResponse(author);  
  }
}
