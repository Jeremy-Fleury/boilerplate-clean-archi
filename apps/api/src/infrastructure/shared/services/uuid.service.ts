import { Injectable } from "@nestjs/common";
import type { IUuidService } from "application/shared/interfaces/uuid.interface";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UuidGeneratorImpl implements IUuidService {
	generateV4(): string {
		return uuidv4();
	}
}
