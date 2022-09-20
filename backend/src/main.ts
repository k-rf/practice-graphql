import { NestFactory } from "@nestjs/core";
// import { ExpressAdapter, NestExpressApplication } from "@nestjs/platform-express";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";

import { AppModule } from "./app.module";

async function bootstrap() {
  // const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  await app.listen(3000, "0.0.0.0");
}
bootstrap();
