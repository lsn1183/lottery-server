// 程序根模块
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { env } from './common/config'
// 子模块加载
import { AnimalModule } from './animal/animal.module'
import { OpenModule } from './open/open.module'
import { RecommendModule } from './recommend/recommend.module'
import { UserModule } from './user/user.module'
import { ZodiacModule } from './zodiac/zodiac.module'

// console.log('env', env)

/**
 * @Module() 定义一个模块，并管理这个模块的导入集合、控制器集合、提供者集合、导出集合
 */
@Module({
  // TypeOrmModule.forRoot() 默认加载项目根目录下的 ormconfig.json 配置文件用于配置数据库连接
  // TypeORM 配置文件详细文档 https://typeorm.io/#/using-ormconfig
  imports: [
    TypeOrmModule.forRoot(env.DATABASE_CONFIG),
    UserModule,
    AnimalModule,
    OpenModule,
    RecommendModule,
    ZodiacModule
  ], // 导入其他模块的集合
  controllers: [AppController], // 当前模块的控制器集合
  providers: [AppService], // 当前模块的提供者集合
  exports: [] // 导出当前模块的提供者，用于被其他模块调用
})
export class AppModule {}
