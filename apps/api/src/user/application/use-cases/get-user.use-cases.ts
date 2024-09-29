import { ApplicationException } from "src/shared/domain/exceptions/application-exception";
import type { User } from "../../domain/entities/user.entity";
import type { IUserRepository } from "../../domain/repositories/user.repository.interface";

export class GetUserUseCase {
	constructor(private readonly userRepository: IUserRepository) {}

	async execute(uuid: string): Promise<User> {
		const user = await this.userRepository.findByUuid(uuid);

		if (!user) {
			throw new ApplicationException("User not found");
		}

		return user;
	}
}
