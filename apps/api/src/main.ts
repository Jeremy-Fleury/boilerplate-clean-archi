import { GlobalExceptionFilter } from "@infrastructure/app/filters/global-exception.filter";
import { AppModule } from "@infrastructure/app/modules/app.module";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalFilters(new GlobalExceptionFilter());
	await app.listen(3001);
}

bootstrap();
