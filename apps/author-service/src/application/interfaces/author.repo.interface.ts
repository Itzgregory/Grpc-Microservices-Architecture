import { CreateAuthorDto } from '../dto/create-author.dto';
import { UpdateAuthorDto } from '../dto/update-author.dto';
import { AuthorResponse } from '../dto/author.response';

export interface AuthorRepo {
  create(createAuthorDto: CreateAuthorDto): Promise<AuthorResponse>;
  findOne(id: string): Promise<AuthorResponse>;
  update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<AuthorResponse>;
  delete(id: string): Promise<boolean>;
  findAll(page: number, limit: number): Promise<AuthorResponse[]>;
}

