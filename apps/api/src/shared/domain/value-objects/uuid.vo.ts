import type { IUuidService } from "../../application/services/uuid.interface";
import { DomainException } from "../exceptions/domain-exception";

export class Uuid {
	private constructor(public readonly value: string) {
		this.validate(value);
	}

	public static create(uuidService: IUuidService): Uuid {
		const uuid = uuidService.generateV4();
		return new Uuid(uuid);
	}

	public static fromValue(value: string): Uuid {
		return new Uuid(value);
	}

	public equals(other: Uuid): boolean {
		return this.value === other.value;
	}

	private validate(uuid: string) {
		const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

		if (!regex.test(uuid)) {
			throw new DomainException("Invalid UUID format");
		}
	}
}
