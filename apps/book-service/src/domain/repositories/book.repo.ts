import { CreateBookDto } from '../../application/dto/create-book.dto';
import { UpdateBookDto } from '../../application/dto/update-book.dto';
import { BookResponse } from '../../application/dto/book.response';

export interface BookRepo {
  create(createBookDto: CreateBookDto): Promise<BookResponse>;
  findOne(id: string): Promise<BookResponse>;
  update(id: string, updateBookDto: UpdateBookDto): Promise<BookResponse>;
  delete(id: string): Promise<boolean>;
  findAll(page: number, limit: number): Promise<BookResponse[]>;
}
