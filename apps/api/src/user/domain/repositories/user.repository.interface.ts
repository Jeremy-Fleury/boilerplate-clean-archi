import type { User } from "../entities/user.entity";

export interface IUserRepository {
	findByEmail(email: string): Promise<User | null>;
	findByUuid(uuid: string): Promise<User | null>;
	findAll(): Promise<User[]>;
	create(user: User): Promise<User>;
	update(user: User): Promise<User>;
	delete(uuid: string): Promise<void>;
}
