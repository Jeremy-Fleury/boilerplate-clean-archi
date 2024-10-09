import { DomainException } from "@domain/shared/exceptions/domain-exception";

export class Email {
	constructor(public readonly value: string) {
		this.validate(value);
	}

	public equals(other: Email): boolean {
		return this.value === other.value;
	}

	private validate(email: string): void {
		/**
		 * RFC 5322 Official Standard
		 * https://emailregex.com/
		 */
		const emailRegex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!emailRegex.test(email)) {
			throw new DomainException("Invalid email format");
		}
	}
}
