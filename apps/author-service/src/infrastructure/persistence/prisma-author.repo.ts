import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/author/author.prisma.service';
import { AuthorRepo } from '../../application/interfaces/author.repo.interface';
import { CreateAuthorDto } from '../../application/dto/create-author.dto';
import { UpdateAuthorDto } from '../../application/dto/update-author.dto';
import { AuthorResponse } from '../../application/dto/author.response';

@Injectable()
export class PrismaAuthorRepo implements AuthorRepo {
  constructor(private prisma: PrismaService) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<AuthorResponse> {
    const author = await this.prisma.author.create({
      data: createAuthorDto,
    });

    return new AuthorResponse({
      id: author.id,
      name: author.name,
      email: author.email,
      createdAt: author.createdAt,
    });
  }

  async findOne(id: string): Promise<AuthorResponse> {
    const author = await this.prisma.author.findUnique({
      where: { id },
    });

    if (!author) {
      throw new Error(`Author with ID ${id} not found`);
    }

    return new AuthorResponse({
      id: author.id,
      name: author.name,
      email: author.email,
      createdAt: author.createdAt,
    });
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<AuthorResponse> {
    const author = await this.prisma.author.update({
      where: { id },
      data: updateAuthorDto,
    });

    return new AuthorResponse({
      id: author.id,
      name: author.name,
      email: author.email,
      createdAt: author.createdAt,
    });
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.author.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      throw new Error(`Failed to delete author with ID ${id}: ${error.message}`);
    }
  }

  async findAll(page: number, limit: number): Promise<AuthorResponse[]> {
    const authors = await this.prisma.author.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    return authors.map((author) => new AuthorResponse({
      id: author.id,
      name: author.name,
      email: author.email,
      createdAt: author.createdAt,
    }));
  }
}
