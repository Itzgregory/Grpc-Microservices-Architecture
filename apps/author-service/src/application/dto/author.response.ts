export class AuthorResponse {
  id: string;
  name: string;
  email: string;
  createdAt: string;

  constructor(author: any) {
    this.id = author.id;
    this.name = author.name;
    this.email = author.email;
    this.createdAt = author.createdAt.toISOString();;
  }
}
