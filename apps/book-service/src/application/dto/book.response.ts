export class BookResponse {
    id: string;
    title: string;
    authorId: String;
    publishedYear: number;
    createdAt: Date;

    constructor(book: any) {
      this.id = book.id;
      this.title = book.title;
      this.authorId = book.authorId;
      this.publishedYear = book.publishedYear;
      this.createdAt = book.createdAt;

    }
  }
  