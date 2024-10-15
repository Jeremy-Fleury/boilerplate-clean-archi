import { createHash } from "node:crypto";
import { Injectable } from "@nestjs/common";
import type { IHashService } from "application/shared/interfaces/hash.interface";

@Injectable()
export class HashServiceImpl implements IHashService {
	sha512(value: string): string {
		return createHash("sha512").update(value).digest("hex");
	}
}
