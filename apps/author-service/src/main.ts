import { NestFactory } from '@nestjs/core';
import { AuthorModule } from './author.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AuthorModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'author',
      protoPath: join(__dirname, '../../../../proto/author.proto'),
      url: 'localhost:50051',
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();