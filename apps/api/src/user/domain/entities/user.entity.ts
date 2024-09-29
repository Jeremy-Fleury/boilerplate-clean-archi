import { Email } from "../../../shared/domain/value-objects/email.vo";
import { Password } from "../../../shared/domain/value-objects/password.vo";
import { Uuid } from "../../../shared/domain/value-objects/uuid.vo";

export interface IUser {
	uuid: Uuid;
	email: Email;
	password: Password;
}

export interface IUserJSON {
	uuid: string;
	email: string;
	password: string;
}

export class User implements IUser {
	public readonly uuid: Uuid;
	public email: Email;
	public password: Password;
	public firstName: string;
	public lastName: string;

	constructor(user: IUser) {
		this.uuid = user.uuid;
		this.email = user.email;
		this.password = user.password;
	}

	public static fromJSON(json: IUserJSON): User {
		return new User({
			uuid: Uuid.fromValue(json.uuid),
			email: Email.fromValue(json.email),
			password: Password.fromValue(json.password),
		});
	}

	public toJSON(): IUserJSON {
		return {
			uuid: this.uuid.value,
			email: this.email.value,
			password: this.password.value,
		};
	}
}
