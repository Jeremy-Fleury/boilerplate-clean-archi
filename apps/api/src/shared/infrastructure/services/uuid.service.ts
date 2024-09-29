import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import type { IUuidService } from "../../application/services/uuid.interface";

@Injectable()
export class UuidGeneratorImpl implements IUuidService {
	generateV4(): string {
		return uuidv4();
	}
}
