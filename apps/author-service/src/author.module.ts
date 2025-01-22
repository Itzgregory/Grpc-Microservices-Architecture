import { Module } from '@nestjs/common';
import { CreateAuthorUseCase } from './application/use-cases/create-author.use-case'; 
import { AuthorController } from './presentation/controllers/author.controller'; 
import { PrismaAuthorRepo } from './infrastructure/persistence/prisma-author.repo';  
import { PrismaService } from '../../../prisma/author/author.prisma.service'; 
import { AuthorGrpcService } from './infrastructure/grpc/author.grpc-services';  

@Module({
  imports: [],
  controllers: [AuthorController],  
  providers: [
    CreateAuthorUseCase, 
    PrismaAuthorRepo,  
    PrismaService, 
    AuthorGrpcService,  
  ],
})
export class AuthorModule {}
