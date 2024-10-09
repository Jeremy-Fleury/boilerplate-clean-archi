import type { Email } from "@domain/shared/value-objects/email.vo";
import type { HashPassword } from "@domain/shared/value-objects/hashPassword.vo";
import type { Uuid } from "@domain/shared/value-objects/uuid.vo";
import type { IUserJSON } from "@domain/user/interface/user-json.interface";
import type { IUser } from "@domain/user/interface/user.interface";

export class User implements IUser {
	public readonly uuid: Uuid;
	public email: Email;
	public hashPassword: HashPassword;
	public firstName: string;
	public lastName: string;

	constructor(user: IUser) {
		this.uuid = user.uuid;
		this.email = user.email;
		this.hashPassword = user.hashPassword;
	}

	public toJSON(): IUserJSON {
		return {
			uuid: this.uuid.value,
			email: this.email.value,
			hashPassword: this.hashPassword.value,
		};
	}
}
