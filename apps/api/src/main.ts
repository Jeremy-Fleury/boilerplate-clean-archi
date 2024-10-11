import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { GlobalExceptionFilter } from "@infrastructure/app/filters/global-exception.filter";
import { AppModule } from "@infrastructure/app/modules/app.module";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalFilters(new GlobalExceptionFilter());

	const config = new DocumentBuilder().setTitle("Awesome Service API").setVersion("2.0").build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("api", app, document);

	const outputPath = join(process.cwd(), "openapi.json");
	writeFileSync(outputPath, JSON.stringify(document, null, 2));

	await app.listen(3001);
}

bootstrap();
