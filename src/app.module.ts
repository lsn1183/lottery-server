// 程序根模块
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { env } from './common/config';
// 子模块加载
import { AnimalModule } from './animal/animal.module';
import { UserModule } from './user/user.module';
/**
 * @Module() 定义一个模块，并管理这个模块的导入集合、控制器集合、提供者集合、导出集合
 */
@Module({
  // TypeOrmModule.forRoot() 默认加载项目根目录下的 ormconfig.json 配置文件用于配置数据库连接
  // TypeORM 配置文件详细文档 https://typeorm.io/#/using-ormconfig
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // 服务器主机名  本地不用改 或者 127.0.0.1
      port: 3306, // 数据库端口  默认 3306
      username: 'root', // 数据库用户名
      password: '12345678', // 数据库密码
      database: 'database', // 数据库 存储库
      // 注册 数据库实体类 如 photo/photo.entity.ts
      // 也可以这样写 "entities": ["dist/**/*.entity{.ts,.js}"],  匹配所有 .entity 文件，
      // 或者直接设置 autoLoadEntities: true,
      entities: [],
      synchronize: true,
      autoLoadEntities: true, // 使用这个配置自动导入entities
    }),
    UserModule,
    AnimalModule,
  ], // 导入其他模块的集合
  controllers: [AppController], // 当前模块的控制器集合
  providers: [AppService], // 当前模块的提供者集合
  exports: [], // 导出当前模块的提供者，用于被其他模块调用
})
export class AppModule {}
