import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common"; //import for validation pipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({whitelist: true})     //whitelist is used to remove the extra fields that are not defined in the DTO
  ); //initialise validation pipes globally in nest app
  await app.listen(3000);
}
bootstrap();
