import { createHash } from "node:crypto";
import type { IHashService } from "@application/shared/interfaces/hash.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class HashServiceImpl implements IHashService {
	sha512(value: string): string {
		return createHash("sha512").update(value).digest("hex");
	}
}
