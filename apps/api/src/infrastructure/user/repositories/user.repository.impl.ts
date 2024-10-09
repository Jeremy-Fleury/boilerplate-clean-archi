import { UserFactoryService } from "@application/user/services/user-factory.service";
import type { Email } from "@domain/shared/value-objects/email.vo";
import type { Uuid } from "@domain/shared/value-objects/uuid.vo";
import type { User } from "@domain/user/entities/user.entity";
import type { IUserRepository } from "@domain/user/repositories/user.repository.interface";
import { PrismaService } from "@infrastructure/prisma/services/prisma.service";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class UserRepositoryImpl implements IUserRepository {
	constructor(@Inject(PrismaService) private readonly prismaService: PrismaService) {}

	async findByEmail(email: Email): Promise<User | null> {
		const user = await this.prismaService.user.findUnique({
			where: {
				email: email.value,
			},
		});

		if (!user) {
			return null;
		}

		return UserFactoryService.fromJSON(user);
	}

	async create(user: User): Promise<User> {
		const createdUser = await this.prismaService.user.create({
			data: user.toJSON(),
		});

		return UserFactoryService.fromJSON(createdUser);
	}

	async update(user: User): Promise<User> {
		const updatedUser = await this.prismaService.user.update({
			where: {
				uuid: user.uuid.value,
			},
			data: user.toJSON(),
		});

		return UserFactoryService.fromJSON(updatedUser);
	}

	async delete(email: Email): Promise<void> {
		await this.prismaService.user.delete({
			where: {
				email: email.value,
			},
		});
	}
}
