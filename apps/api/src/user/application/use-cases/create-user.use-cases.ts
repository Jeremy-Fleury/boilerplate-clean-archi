import type { IUserRepository } from "../../domain/repositories/user.repository.interface";
import type { UserFactoryService } from "../services/user-factory.service";

interface ICreateUserUseCaseDto {
	email: string;
	password: string;
}

export class CreateUserUseCase {
	constructor(
		private readonly userRepository: IUserRepository,
		private readonly userFactoryService: UserFactoryService,
	) {}

	async execute(dto: ICreateUserUseCaseDto): Promise<void> {
		const user = this.userFactoryService.create({
			email: dto.email,
			password: dto.password,
		});
		await this.userRepository.create(user);
	}
}
