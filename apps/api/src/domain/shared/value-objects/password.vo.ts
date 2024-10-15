import { DomainException } from "domain/shared/exceptions/domain-exception";

export class Password {
	constructor(public readonly value: string) {
		this.validate(value);
	}

	public equals(other: Password): boolean {
		return this.value === other.value;
	}

	private validate(password: string): void {
		/**
		 * Minimum 12 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character
		 */
		const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$/;

		if (!passwordRegex.test(password)) {
			throw new DomainException("Invalid password format");
		}
	}
}
