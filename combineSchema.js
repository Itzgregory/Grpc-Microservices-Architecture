const fs = require('fs');
const path = require('path');

const removeDatasourceAndGenerator = (schema) => {
  return schema.replace(/generator client\s*{[^}]*}\s*/g, '')
               .replace(/datasource db\s*{[^}]*}\s*/g, '');
};

const authorSchema = fs.readFileSync(path.join(__dirname, 'prisma/author/authorSchema.prisma'), 'utf8');
const bookSchema = fs.readFileSync(path.join(__dirname, 'prisma/book/bookSchema.prisma'), 'utf8');

const authorModel = removeDatasourceAndGenerator(authorSchema);
const bookModel = removeDatasourceAndGenerator(bookSchema);

const combinedSchema = `
generator client {
  provider = "prisma-client-js"
  output = "../../node_modules/.prisma/client"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

${authorModel}
${bookModel}
`;

fs.writeFileSync(path.join(__dirname, 'prisma/combinedSchema.prisma'), combinedSchema);
console.log('Combined schema created successfully.');
