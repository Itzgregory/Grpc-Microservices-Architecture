import { CreateAuthorDto } from '../../application/dto/create-author.dto';
import { UpdateAuthorDto } from '../../application/dto/update-author.dto';
import { AuthorResponse } from '../../application/dto/author.response';

export interface AuthorRepo {
  create(createAuthorDto: CreateAuthorDto): Promise<AuthorResponse>;
  findOne(id: string): Promise<AuthorResponse>;
  update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<AuthorResponse>;
  delete(id: string): Promise<boolean>;
  findAll(page: number, limit: number): Promise<AuthorResponse[]>;
}
