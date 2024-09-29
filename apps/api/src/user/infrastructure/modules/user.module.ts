import { Module } from "@nestjs/common";
import type { Provider } from "@nestjs/common";
import { PrismaModule } from "../../../prisma/prisma.module";
import type { IHashService } from "../../../shared/application/services/hash.interface";
import type { IUuidService } from "../../../shared/application/services/uuid.interface";
import { HashServiceImpl } from "../../../shared/infrastructure/services/hash.service";
import { UuidGeneratorImpl } from "../../../shared/infrastructure/services/uuid.service";
import { UserFactoryService } from "../../application/services/user-factory.service";
import { CreateUserUseCase } from "../../application/use-cases/create-user.use-cases";
import { GetUserUseCase } from "../../application/use-cases/get-user.use-cases";
import type { IUserRepository } from "../../domain/repositories/user.repository.interface";
import { UserController } from "../../interface/controllers/user.controller";
import { UserRepositoryImpl } from "../repositories/user.repository.impl";
import { CREATE_USER_USE_CASE, GET_USER_USE_CASE, HASH_SERVICE, USER_REPOSITORY, UUID_SERVICE } from "./user.token";

const infrastructure: Provider[] = [
	{
		provide: USER_REPOSITORY,
		useClass: UserRepositoryImpl,
	},
	{
		provide: UUID_SERVICE,
		useClass: UuidGeneratorImpl,
	},
	{
		provide: HASH_SERVICE,
		useClass: HashServiceImpl,
	},
];

const application: Provider[] = [
	{
		provide: UserFactoryService,
		useFactory: (uuidService: IUuidService, hashService: IHashService) => {
			return new UserFactoryService(uuidService, hashService);
		},
		inject: [UUID_SERVICE, HASH_SERVICE],
	},
	{
		provide: GET_USER_USE_CASE,
		useFactory: (userRepository: IUserRepository) => {
			return new GetUserUseCase(userRepository);
		},
		inject: [USER_REPOSITORY],
	},
	{
		provide: CREATE_USER_USE_CASE,
		useFactory: (userRepository: IUserRepository, userFactoryService: UserFactoryService) => {
			return new CreateUserUseCase(userRepository, userFactoryService);
		},
		inject: [USER_REPOSITORY, UserFactoryService],
	},
];

@Module({
	imports: [PrismaModule],
	controllers: [UserController],
	providers: [...application, ...infrastructure],
	exports: [],
})
export class UserModule {}
