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
exports.AuthorModule = void 0;
const common_1 = __webpack_require__(3);
const create_author_use_case_1 = __webpack_require__(4);
const author_controller_1 = __webpack_require__(7);
const prisma_author_repo_1 = __webpack_require__(10);
const author_prisma_service_1 = __webpack_require__(11);
const author_grpc_services_1 = __webpack_require__(13);
let AuthorModule = class AuthorModule {
};
exports.AuthorModule = AuthorModule;
exports.AuthorModule = AuthorModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [author_controller_1.AuthorController],
        providers: [
            create_author_use_case_1.CreateAuthorUseCase,
            prisma_author_repo_1.PrismaAuthorRepo,
            author_prisma_service_1.PrismaService,
            author_grpc_services_1.AuthorGrpcService,
        ],
    })
], AuthorModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
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
exports.CreateAuthorUseCase = void 0;
const common_1 = __webpack_require__(3);
const author_repo_interface_1 = __webpack_require__(5);
const author_response_1 = __webpack_require__(6);
let CreateAuthorUseCase = class CreateAuthorUseCase {
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    async execute(createAuthorDto) {
        const author = await this.authorRepository.create(createAuthorDto);
        return new author_response_1.AuthorResponse(author);
    }
};
exports.CreateAuthorUseCase = CreateAuthorUseCase;
exports.CreateAuthorUseCase = CreateAuthorUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof author_repo_interface_1.AuthorRepo !== "undefined" && author_repo_interface_1.AuthorRepo) === "function" ? _a : Object])
], CreateAuthorUseCase);


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorResponse = void 0;
class AuthorResponse {
    constructor(author) {
        this.id = author.id;
        this.name = author.name;
        this.email = author.email;
        this.createdAt = author.createdAt.toISOString();
        ;
    }
}
exports.AuthorResponse = AuthorResponse;


/***/ }),
/* 7 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorController = void 0;
const common_1 = __webpack_require__(3);
const microservices_1 = __webpack_require__(8);
const create_author_use_case_1 = __webpack_require__(4);
const create_author_dto_1 = __webpack_require__(9);
let AuthorController = class AuthorController {
    constructor(createAuthorUseCase) {
        this.createAuthorUseCase = createAuthorUseCase;
    }
    async createAuthor(data) {
        return this.createAuthorUseCase.execute(data);
    }
};
exports.AuthorController = AuthorController;
__decorate([
    (0, microservices_1.GrpcMethod)('AuthorService', 'CreateAuthor'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_author_dto_1.CreateAuthorDto !== "undefined" && create_author_dto_1.CreateAuthorDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AuthorController.prototype, "createAuthor", null);
exports.AuthorController = AuthorController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof create_author_use_case_1.CreateAuthorUseCase !== "undefined" && create_author_use_case_1.CreateAuthorUseCase) === "function" ? _a : Object])
], AuthorController);


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAuthorDto = void 0;
class CreateAuthorDto {
}
exports.CreateAuthorDto = CreateAuthorDto;


/***/ }),
/* 10 */
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaAuthorRepo = void 0;
const common_1 = __webpack_require__(3);
const author_response_1 = __webpack_require__(6);
let PrismaAuthorRepo = class PrismaAuthorRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAuthorDto) {
        const author = await this.prisma.author.create({
            data: createAuthorDto,
        });
        return new author_response_1.AuthorResponse({
            id: author.id,
            name: author.name,
            email: author.email,
            createdAt: author.createdAt,
        });
    }
    async findOne(id) {
        const author = await this.prisma.author.findUnique({
            where: { id },
        });
        if (!author) {
            throw new Error(`Author with ID ${id} not found`);
        }
        return new author_response_1.AuthorResponse({
            id: author.id,
            name: author.name,
            email: author.email,
            createdAt: author.createdAt,
        });
    }
    async update(id, updateAuthorDto) {
        const author = await this.prisma.author.update({
            where: { id },
            data: updateAuthorDto,
        });
        return new author_response_1.AuthorResponse({
            id: author.id,
            name: author.name,
            email: author.email,
            createdAt: author.createdAt,
        });
    }
    async delete(id) {
        try {
            await this.prisma.author.delete({
                where: { id },
            });
            return true;
        }
        catch (error) {
            throw new Error(`Failed to delete author with ID ${id}: ${error.message}`);
        }
    }
    async findAll(page, limit) {
        const authors = await this.prisma.author.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
        return authors.map((author) => new author_response_1.AuthorResponse({
            id: author.id,
            name: author.name,
            email: author.email,
            createdAt: author.createdAt,
        }));
    }
};
exports.PrismaAuthorRepo = PrismaAuthorRepo;
exports.PrismaAuthorRepo = PrismaAuthorRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PRISMA_SERVICE')),
    __metadata("design:paramtypes", [Object])
], PrismaAuthorRepo);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(3);
const client_1 = __webpack_require__(12);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    constructor() {
        super({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL,
                },
            },
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
/* 12 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 13 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorGrpcService = void 0;
const common_1 = __webpack_require__(3);
const microservices_1 = __webpack_require__(8);
const author_repo_1 = __webpack_require__(14);
const index_1 = __webpack_require__(15);
let AuthorGrpcService = class AuthorGrpcService {
    constructor(authorRepo) {
        this.authorRepo = authorRepo;
    }
    async createAuthor(data) {
        const author = await this.authorRepo.create({
            name: data.name,
            email: data.email,
        });
        return {
            id: author.id,
            name: author.name,
            email: author.email,
            createdAt: author.createdAt,
        };
    }
    async getAuthor(data) {
        const author = await this.authorRepo.findOne(data.id);
        if (!author) {
            throw new Error('Author not found');
        }
        return {
            id: author.id,
            name: author.name,
            email: author.email,
            createdAt: author.createdAt,
        };
    }
    async updateAuthor(data) {
        const author = await this.authorRepo.update(data.id, {
            name: data.name,
            email: data.email,
        });
        return {
            id: author.id,
            name: author.name,
            email: author.email,
            createdAt: author.createdAt,
        };
    }
    async deleteAuthor(data) {
        const success = await this.authorRepo.delete(data.id);
        return { success };
    }
    async listAuthors(data) {
        const authors = await this.authorRepo.findAll(data.page, data.limit);
        return {
            authors: authors.map(author => ({
                id: author.id,
                name: author.name,
                email: author.email,
                createdAt: author.createdAt,
            })),
            total: authors.length,
        };
    }
};
exports.AuthorGrpcService = AuthorGrpcService;
__decorate([
    (0, microservices_1.GrpcMethod)('AuthorService', 'createAuthor'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof index_1.CreateAuthorRequest !== "undefined" && index_1.CreateAuthorRequest) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AuthorGrpcService.prototype, "createAuthor", null);
__decorate([
    (0, microservices_1.GrpcMethod)('AuthorService', 'GetAuthorById'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof index_1.GetAuthorRequest !== "undefined" && index_1.GetAuthorRequest) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthorGrpcService.prototype, "getAuthor", null);
__decorate([
    (0, microservices_1.GrpcMethod)('AuthorService', 'updateAuthor'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof index_1.UpdateAuthorRequest !== "undefined" && index_1.UpdateAuthorRequest) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AuthorGrpcService.prototype, "updateAuthor", null);
__decorate([
    (0, microservices_1.GrpcMethod)('AuthorService', 'deleteAuthor'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof index_1.DeleteAuthorRequest !== "undefined" && index_1.DeleteAuthorRequest) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AuthorGrpcService.prototype, "deleteAuthor", null);
__decorate([
    (0, microservices_1.GrpcMethod)('AuthorService', 'listAuthor'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof index_1.ListAuthorsRequest !== "undefined" && index_1.ListAuthorsRequest) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], AuthorGrpcService.prototype, "listAuthors", null);
exports.AuthorGrpcService = AuthorGrpcService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof author_repo_1.AuthorRepo !== "undefined" && author_repo_1.AuthorRepo) === "function" ? _a : Object])
], AuthorGrpcService);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 15 */
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
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(24), exports);


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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("path");

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
const author_module_1 = __webpack_require__(2);
const microservices_1 = __webpack_require__(8);
const path_1 = __webpack_require__(25);
async function bootstrap() {
    const app = await core_1.NestFactory.create(author_module_1.AuthorModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'author',
            protoPath: (0, path_1.join)(__dirname, '../../../../proto/author.proto'),
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