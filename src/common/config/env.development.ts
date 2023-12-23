export default {
  // 服务基本配置
  SERVICE_CONFIG: {
    // 端口
    port: 3001
  },

  // 数据库配置
  DATABASE_CONFIG: {
    type: 'mysql',
    host: 'localhost', // 服务器主机名  本地不用改 或者 127.0.0.1
    port: 3306, // 数据库端口  默认 3306
    username: 'root', // 数据库用户名
    password: '12345678', // 数据库密码
    database: 'database', // 数据库名 存储库
    // 注册 数据库实体类 如 photo/photo.entity.ts
    // 也可以这样写 "entities": ["dist/**/*.entity{.ts,.js}"],  匹配所有 .entity 文件，
    // 或者直接设置 autoLoadEntities: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    autoLoadEntities: true, // 使用这个配置自动导入entities
    synchronize: true
  }
}
