import { NestFactory } from "@nestjs/core";
import { GlobalExceptionFilter } from "./app/infrastructure/filters/global-exception.filter";
import { AppModule } from "./app/infrastructure/modules/app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalFilters(new GlobalExceptionFilter());
	await app.listen(3001);
}

bootstrap();
