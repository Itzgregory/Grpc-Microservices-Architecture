import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateAuthorUseCase } from '../../application/use-cases/create-author.use-case';  
import { CreateAuthorDto } from '../../application/dto/create-author.dto';  
import { AuthorResponse } from '../../application/dto/author.response';  

@Controller()
export class AuthorController {
  constructor(private readonly createAuthorUseCase: CreateAuthorUseCase) {}

  @GrpcMethod('AuthorService', 'CreateAuthor')
  async createAuthor(data: CreateAuthorDto): Promise<AuthorResponse> {
    return this.createAuthorUseCase.execute(data);
  }
}
