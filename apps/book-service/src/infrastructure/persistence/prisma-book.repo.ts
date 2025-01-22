import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/book/book.prisma.service';
import { BookRepo } from '../../domain/repositories/book.repo';
import { CreateBookDto } from '../../application/dto/create-book.dto';
import { UpdateBookDto } from '../../application/dto/update-book.dto';
import { BookResponse } from '../../application/dto/book.response';

@Injectable()
export class PrismaBookRepo implements BookRepo {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto): Promise<BookResponse> {
    const book = await this.prisma.book.create({
      data: createBookDto,
    });
    return new BookResponse(book);
  }

  async findOne(id: string): Promise<BookResponse> {
    const book = await this.prisma.author.findUnique({
      where: { id },
    });
    if (!book) {
      throw new Error('Book not found');
    }
    return new BookResponse(book);
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<BookResponse> {
    const book = await this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
    return new BookResponse(book);
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.book.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }

  async findAll(page: number, limit: number): Promise<BookResponse[]> {
    const books = await this.prisma.book.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    return books.map((book) => new BookResponse(book));
  }
}
