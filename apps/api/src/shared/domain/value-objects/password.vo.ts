import type { IHashService } from "../../application/services/hash.interface";
import { DomainException } from "../exceptions/domain-exception";

export class Password {
	private constructor(public readonly value: string) {
		this.validateHash(value);
	}

	public static create(clearPassword: string, hashService: IHashService): Password {
		Password.validateClearPassword(clearPassword);
		const hashPassword = hashService.sha256(clearPassword);
		return new Password(hashPassword);
	}

	public static fromValue(hashPassword: string): Password {
		return new Password(hashPassword);
	}

	public equals(other: Password): boolean {
		return this.value === other.value;
	}

	private validateHash(hashPassword: string): void {
		const sha256Regex = /^[a-f0-9]{64}$/;

		if (!sha256Regex.test(hashPassword)) {
			throw new DomainException("Invalid password hash");
		}
	}

	private static validateClearPassword(password: string): void {
		const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$/;

		if (!passwordRegex.test(password)) {
			throw new DomainException("Invalid password format");
		}
	}
}
