/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookModule = void 0;
const common_1 = __webpack_require__(3);
const microservices_1 = __webpack_require__(4);
const path_1 = __webpack_require__(5);
const create_book_use_case_1 = __webpack_require__(6);
const book_controller_1 = __webpack_require__(9);
const prisma_book_repo_1 = __webpack_require__(22);
const book_prisma_service_1 = __webpack_require__(23);
const book_grpc_service_1 = __webpack_require__(11);
let BookModule = class BookModule {
};
exports.BookModule = BookModule;
exports.BookModule = BookModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'AUTHOR_PACKAGE',
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        package: 'author',
                        protoPath: (0, path_1.join)(__dirname, '../../../../proto/author.proto'),
                        url: 'localhost:50051',
                    },
                },
            ]),
        ],
        controllers: [book_controller_1.BookController],
        providers: [
            create_book_use_case_1.CreateBookUseCase,
            prisma_book_repo_1.PrismaBookRepo,
            book_prisma_service_1.PrismaService,
            book_grpc_service_1.BookGrpcService,
        ],
    })
], BookModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateBookUseCase = void 0;
const common_1 = __webpack_require__(3);
const book_repo_1 = __webpack_require__(7);
const book_response_1 = __webpack_require__(8);
let CreateBookUseCase = class CreateBookUseCase {
    constructor(bookRepoository) {
        this.bookRepoository = bookRepoository;
    }
    async execute(createBookDto) {
        const book = await this.bookRepoository.create(createBookDto);
        return new book_response_1.BookResponse(book);
    }
};
exports.CreateBookUseCase = CreateBookUseCase;
exports.CreateBookUseCase = CreateBookUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof book_repo_1.BookRepo !== "undefined" && book_repo_1.BookRepo) === "function" ? _a : Object])
], CreateBookUseCase);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookResponse = void 0;
class BookResponse {
    constructor(book) {
        this.id = book.id;
        this.title = book.title;
        this.authorId = book.authorId;
        this.publishedYear = book.publishedYear;
        this.createdAt = book.createdAt;
    }
}
exports.BookResponse = BookResponse;


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookController = void 0;
const common_1 = __webpack_require__(3);
const microservices_1 = __webpack_require__(4);
const create_book_use_case_1 = __webpack_require__(6);
const create_book_dto_1 = __webpack_require__(10);
const book_grpc_service_1 = __webpack_require__(11);
let BookController = class BookController {
    constructor(createBookUseCase, bookGrpcService) {
        this.createBookUseCase = createBookUseCase;
        this.bookGrpcService = bookGrpcService;
    }
    async createBook(data) {
        return this.createBookUseCase.execute(data);
    }
    async getAuthorById(id) {
        return await this.bookGrpcService.getAuthorById(id);
    }
};
exports.BookController = BookController;
__decorate([
    (0, microservices_1.GrpcMethod)('BookService', 'CreateBook'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_book_dto_1.CreateBookDto !== "undefined" && create_book_dto_1.CreateBookDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], BookController.prototype, "createBook", null);
__decorate([
    (0, common_1.Get)('/author/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAuthorById", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [typeof (_a = typeof create_book_use_case_1.CreateBookUseCase !== "undefined" && create_book_use_case_1.CreateBookUseCase) === "function" ? _a : Object, typeof (_b = typeof book_grpc_service_1.BookGrpcService !== "undefined" && book_grpc_service_1.BookGrpcService) === "function" ? _b : Object])
], BookController);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateBookDto = void 0;
class CreateBookDto {
}
exports.CreateBookDto = CreateBookDto;


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookGrpcService = void 0;
const common_1 = __webpack_require__(3);
const microservices_1 = __webpack_require__(4);
const microservices_2 = __webpack_require__(4);
const book_repo_1 = __webpack_require__(7);
const index_1 = __webpack_require__(12);
let BookGrpcService = class BookGrpcService {
    constructor(bookRepo, client) {
        this.bookRepo = bookRepo;
        this.client = client;
    }
    onModuleInit() {
        this.authorService = this.client.getService('AuthorService');
    }
    async createBook(data) {
        const book = await this.bookRepo.create({
            title: data.title,
            authorId: data.authorId,
            publishedYear: data.publishedYear
        });
        return {
            id: book.id,
            title: book.title,
            authorId: book.authorId.toString(),
            publishedYear: book.publishedYear,
            createdAt: book.createdAt.toISOString(),
        };
    }
    async getBook(data) {
        const book = await this.bookRepo.findOne(data.id);
        return {
            id: book.id,
            title: book.title,
            authorId: book.authorId.toString(),
            publishedYear: book.publishedYear,
            createdAt: book.createdAt.toISOString(),
        };
    }
    async getAuthorById(id) {
        return this.authorService.getAuthorById({ id }).toPromise();
    }
    async updateBook(data) {
        const book = await this.bookRepo.update(data.id, {
            title: data.title,
            authorId: data.authorId,
            publishedYear: data.publishedYear,
        });
        return {
            id: book.id,
            title: book.title,
            authorId: book.authorId.toString(),
            publishedYear: book.publishedYear,
            createdAt: book.createdAt.toISOString(),
        };
    }
    async deleteBook(data) {
        const success = await this.bookRepo.delete(data.id);
        return { success };
    }
    async listBooks(data) {
        const books = await this.bookRepo.findAll(data.page, data.limit);
        return {
            books: books.map(book => ({
                id: book.id,
                title: book.title,
                authorId: book.authorId.toString(),
                publishedYear: book.publishedYear,
                createdAt: book.createdAt.toISOString(),
            })),
            total: books.length,
        };
    }
};
exports.BookGrpcService = BookGrpcService;
__decorate([
    (0, microservices_2.GrpcMethod)('BookService', 'createBook'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof index_1.CreateBookRequest !== "undefined" && index_1.CreateBookRequest) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], BookGrpcService.prototype, "createBook", null);
__decorate([
    (0, microservices_2.GrpcMethod)('BookService', 'getBook'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof index_1.GetBookRequest !== "undefined" && index_1.GetBookRequest) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], BookGrpcService.prototype, "getBook", null);
__decorate([
    (0, microservices_2.GrpcMethod)('BookService', 'updateBook'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof index_1.UpdateBookRequest !== "undefined" && index_1.UpdateBookRequest) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], BookGrpcService.prototype, "updateBook", null);
__decorate([
    (0, microservices_2.GrpcMethod)('BookService', 'deleteBook'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof index_1.DeleteBookRequest !== "undefined" && index_1.DeleteBookRequest) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], BookGrpcService.prototype, "deleteBook", null);
__decorate([
    (0, microservices_2.GrpcMethod)('BookService', 'listBooks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof index_1.ListBooksRequest !== "undefined" && index_1.ListBooksRequest) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], BookGrpcService.prototype, "listBooks", null);
exports.BookGrpcService = BookGrpcService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('AUTHOR_PACKAGE')),
    __metadata("design:paramtypes", [typeof (_a = typeof book_repo_1.BookRepo !== "undefined" && book_repo_1.BookRepo) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _b : Object])
], BookGrpcService);


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(15), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(21), exports);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaBookRepo = void 0;
const common_1 = __webpack_require__(3);
const book_prisma_service_1 = __webpack_require__(23);
const book_response_1 = __webpack_require__(8);
let PrismaBookRepo = class PrismaBookRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBookDto) {
        const book = await this.prisma.book.create({
            data: createBookDto,
        });
        return new book_response_1.BookResponse(book);
    }
    async findOne(id) {
        const book = await this.prisma.author.findUnique({
            where: { id },
        });
        if (!book) {
            throw new Error('Book not found');
        }
        return new book_response_1.BookResponse(book);
    }
    async update(id, updateBookDto) {
        const book = await this.prisma.book.update({
            where: { id },
            data: updateBookDto,
        });
        return new book_response_1.BookResponse(book);
    }
    async delete(id) {
        try {
            await this.prisma.book.delete({ where: { id } });
            return true;
        }
        catch {
            return false;
        }
    }
    async findAll(page, limit) {
        const books = await this.prisma.book.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
        return books.map((book) => new book_response_1.BookResponse(book));
    }
};
exports.PrismaBookRepo = PrismaBookRepo;
exports.PrismaBookRepo = PrismaBookRepo = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof book_prisma_service_1.PrismaService !== "undefined" && book_prisma_service_1.PrismaService) === "function" ? _a : Object])
], PrismaBookRepo);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(3);
const client_1 = __webpack_require__(24);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    constructor() {
        super({
            log: ['query', 'info', 'warn', 'error'],
        });
    }
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);


/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const book_module_1 = __webpack_require__(2);
const microservices_1 = __webpack_require__(4);
const path_1 = __webpack_require__(5);
async function bootstrap() {
    const app = await core_1.NestFactory.create(book_module_1.BookModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'book',
            protoPath: (0, path_1.join)(__dirname, '../../../../proto/book.proto'),
            url: 'localhost:50051',
        },
    });
    await app.startAllMicroservices();
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;