import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserInputDto {
	@IsString()
	@IsNotEmpty()
	email: string;

	@IsString()
	@IsNotEmpty()
	password: string;
}
