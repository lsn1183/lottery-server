// 程序入口文件
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter';
import { TransformInterceptor } from './filters/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter()); // TODO: 过滤器
  app.useGlobalInterceptors(new TransformInterceptor()); // TODO: 统一请求成功的返回数据
  await app.listen(3001);
}
bootstrap();
