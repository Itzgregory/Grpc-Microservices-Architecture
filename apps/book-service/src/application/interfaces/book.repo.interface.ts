import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';
import { BookResponse } from '../dto/book.response';

export interface BookRepo {
  create(createBookDto: CreateBookDto): Promise<BookResponse>;
  findOne(id: string): Promise<BookResponse>;
  update(id: string, updateBookDto: UpdateBookDto): Promise<BookResponse>;
  delete(id: string): Promise<boolean>;
  findAll(page: number, limit: number): Promise<BookResponse[]>;
}
