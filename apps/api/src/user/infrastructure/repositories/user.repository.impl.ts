import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/infrastructure/services/prisma.service";
import { User } from "../../domain/entities/user.entity";
import type { IUserRepository } from "../../domain/repositories/user.repository.interface";

@Injectable()
export class UserRepositoryImpl implements IUserRepository {
	constructor(@Inject(PrismaService) private readonly prismaService: PrismaService) {}

	async findByEmail(email: string): Promise<User | null> {
		const user = await this.prismaService.user.findUnique({
			where: {
				email,
			},
		});

		return user ? User.fromJSON(user) : null;
	}

	async findByUuid(uuid: string): Promise<User | null> {
		const user = await this.prismaService.user.findUnique({
			where: {
				uuid,
			},
		});

		return user ? User.fromJSON(user) : null;
	}

	async findAll(): Promise<User[]> {
		const users = await this.prismaService.user.findMany();

		return users.map(User.fromJSON);
	}

	async create(user: User): Promise<User> {
		const createdUser = await this.prismaService.user.create({
			data: user.toJSON(),
		});

		return User.fromJSON(createdUser);
	}

	async update(user: User): Promise<User> {
		const updatedUser = await this.prismaService.user.update({
			where: {
				uuid: user.uuid.value,
			},
			data: user.toJSON(),
		});

		return User.fromJSON(updatedUser);
	}

	async delete(uuid: string): Promise<void> {
		await this.prismaService.user.delete({
			where: {
				uuid,
			},
		});
	}
}
