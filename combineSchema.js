const fs = require('fs');
const path = require('path');

const authorSchema = fs.readFileSync(path.join(__dirname, 'prisma/author/authorSchema.prisma'), 'utf8');
const bookSchema = fs.readFileSync(path.join(__dirname, 'prisma/book/bookSchema.prisma'), 'utf8');

const combinedSchema = `
generator client {
  provider = "prisma-client-js"
  output = "../../node_modules/.prisma/client"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

${authorSchema}
${bookSchema}
`;

fs.writeFileSync(path.join(__dirname, 'prisma/combinedSchema.prisma'), combinedSchema);
console.log('Combined schema created successfully.');
