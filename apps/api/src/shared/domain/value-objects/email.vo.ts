import { DomainException } from "../exceptions/domain-exception";

export class Email {
	private constructor(public readonly value: string) {
		this.validate(value);
	}

	public static create(email: string): Email {
		return new Email(email);
	}

	public static fromValue(value: string): Email {
		return new Email(value);
	}

	public equals(other: Email): boolean {
		return this.value === other.value;
	}

	private validate(email: string): void {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			throw new DomainException("Invalid email format");
		}
	}
}
