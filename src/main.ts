// 程序入口文件
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { json, urlencoded } from 'express'
import { AppModule } from './app.module'
import { env } from './common/config'
import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter'
import { TransformInterceptor } from './filters/transform.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  app.useGlobalFilters(new HttpExceptionFilter()) // TODO: 过滤器
  app.useGlobalInterceptors(new TransformInterceptor()) // TODO: 统一请求成功的返回数据
  app.use(json({ limit: '1mb' }))
  app.use(urlencoded({ extended: true, limit: '1mb' }))
  const config = new DocumentBuilder() // TODO: set config
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build()
  const document = SwaggerModule.createDocument(app, config) // TODO: swagger
  SwaggerModule.setup('api', app, document)
  await app.listen(env.SERVICE_CONFIG, '0.0.0.0')
}
bootstrap()
