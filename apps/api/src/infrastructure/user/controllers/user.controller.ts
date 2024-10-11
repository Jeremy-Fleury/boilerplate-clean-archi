import type { CreateUserUseCase } from "@application/user/use-cases/create-user.use-cases";

import type { GetUserByEmailUseCase } from "@application/user/use-cases/get-user-by-email.use-cases";
import { Email } from "@domain/shared/value-objects/email.vo";
import { Password } from "@domain/shared/value-objects/password.vo";
import type { User } from "@domain/user/entities/user.entity";
import type { CreateUserInputDto } from "@infrastructure/user/dtos/create-user-input.dto";
import { CREATE_USER_USE_CASE, GET_USER_BY_EMAIL_USE_CASE } from "@infrastructure/user/modules/user.token";
import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("User")
@Controller("user")
export class UserController {
	constructor(
		@Inject(CREATE_USER_USE_CASE)
		private readonly createUserUseCase: CreateUserUseCase,
		@Inject(GET_USER_BY_EMAIL_USE_CASE)
		private readonly getUserByEmailUseCase: GetUserByEmailUseCase,
	) {}

	@Get(":email")
	async getUserByEmail(@Param("email") email: string): Promise<User> {
		return this.getUserByEmailUseCase.execute(new Email(email));
	}

	@Post()
	async create(@Body() dto: CreateUserInputDto): Promise<void> {
		await this.createUserUseCase.execute({
			email: new Email(dto.email),
			password: new Password(dto.password),
		});
	}
}
