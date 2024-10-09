export class InterfaceException extends Error {
	constructor(message: string) {
		super(message);
		this.name = "InterfaceException";
	}
}
