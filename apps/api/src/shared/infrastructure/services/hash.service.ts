import { createHash } from "node:crypto";
import { Injectable } from "@nestjs/common";
import type { IHashService } from "../../application/services/hash.interface";

@Injectable()
export class HashServiceImpl implements IHashService {
	sha256(value: string): string {
		return createHash("sha256").update(value).digest("hex");
	}
}
