import type { IHashService } from "../../../shared/application/services/hash.interface";
import type { IUuidService } from "../../../shared/application/services/uuid.interface";
import { Email } from "../../../shared/domain/value-objects/email.vo";
import { Password } from "../../../shared/domain/value-objects/password.vo";
import { Uuid } from "../../../shared/domain/value-objects/uuid.vo";
import { User } from "../../domain/entities/user.entity";

export interface IUserFactoryServiceDto {
	email: string;
	password: string;
}

export class UserFactoryService {
	constructor(
		private readonly uuidService: IUuidService,
		private readonly hashService: IHashService,
	) {}

	create(dto: IUserFactoryServiceDto): User {
		const uuid = Uuid.create(this.uuidService);
		const email = Email.create(dto.email);
		const password = Password.create(dto.password, this.hashService);

		return new User({
			uuid,
			email,
			password,
		});
	}
}
