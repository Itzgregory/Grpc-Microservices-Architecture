import { NestFactory } from '@nestjs/core';
import { BookModule } from './book.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(BookModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'book',
      protoPath: join(__dirname, '../../../../proto/book.proto'),
      url: 'localhost:50051',
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();