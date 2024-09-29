import { Catch, HttpStatus } from "@nestjs/common";
import type { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { ApplicationException } from "../../../shared/domain/exceptions/application-exception";
import { DomainException } from "../../../shared/domain/exceptions/domain-exception";
import { InfrastructureException } from "../../../shared/domain/exceptions/infrastructure-exception";
import { InterfaceException } from "../../../shared/domain/exceptions/interface-exception";

@Catch(Error)
export class GlobalExceptionFilter implements ExceptionFilter {
	private getStatusCode(exception: Error): number {
		if (exception instanceof DomainException) {
			return HttpStatus.BAD_REQUEST;
		}

		if (exception instanceof ApplicationException) {
			return HttpStatus.CONFLICT;
		}

		if (exception instanceof InfrastructureException) {
			return HttpStatus.SERVICE_UNAVAILABLE;
		}

		if (exception instanceof InterfaceException) {
			return HttpStatus.BAD_REQUEST;
		}

		return HttpStatus.INTERNAL_SERVER_ERROR;
	}

	public catch(exception: Error, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse();
		const statusCode = this.getStatusCode(exception);

		response.status(statusCode).json({
			statusCode,
			message: exception.message,
			error: exception.name,
		});
	}
}
