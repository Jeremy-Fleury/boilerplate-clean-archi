import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import type { CreateUserUseCase } from "../../application/use-cases/create-user.use-cases";
import type { GetUserUseCase } from "../../application/use-cases/get-user.use-cases";
import type { User } from "../../domain/entities/user.entity";
import { CREATE_USER_USE_CASE, GET_USER_USE_CASE } from "../../infrastructure/modules/user.token";
import type { CreateUserInputDto } from "../dtos/create-user-input.dto";

@Controller("users")
export class UserController {
	constructor(
		@Inject(CREATE_USER_USE_CASE)
		private readonly createUserUseCase: CreateUserUseCase,
		@Inject(GET_USER_USE_CASE)
		private readonly getUserUseCase: GetUserUseCase,
	) {}

	@Get(":uuid")
	async get(@Param("uuid") uuid: string): Promise<User> {
		return this.getUserUseCase.execute(uuid);
	}

	@Post()
	async create(@Body() dto: CreateUserInputDto): Promise<void> {
		await this.createUserUseCase.execute(dto);
	}
}
