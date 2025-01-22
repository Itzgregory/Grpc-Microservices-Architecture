import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CreateBookUseCase } from './application/use-cases/create-book.use-case';
import { BookController } from './presentation/controllers/book.controller';
import { PrismaBookRepo } from './infrastructure/persistence/prisma-book.repo';
import { PrismaService } from '../../../prisma/book/book.prisma.service';
import { BookGrpcService } from './infrastructure/grpc/book.grpc-service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTHOR_PACKAGE', 
        transport: Transport.GRPC,
        options: {
          package: 'author', 
          protoPath: join(__dirname, '../../../../proto/author.proto'),
          url: 'localhost:50051', 
        },
      },
    ]),
  ],
  controllers: [BookController],
  providers: [
    CreateBookUseCase,
    PrismaBookRepo,
    PrismaService,
    BookGrpcService,
  ],
})
export class BookModule {}
