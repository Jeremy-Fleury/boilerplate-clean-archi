import { DomainException } from "@domain/shared/exceptions/domain-exception";

export class HashPassword {
	constructor(public readonly value: string) {
		this.validate(value);
	}

	public equals(other: HashPassword): boolean {
		return this.value === other.value;
	}

	private validate(hashPassword: string): void {
		const sha512Regex = /^[a-f0-9]{128}$/i;

		if (!sha512Regex.test(hashPassword)) {
			throw new DomainException("Invalid password hash");
		}
	}
}
