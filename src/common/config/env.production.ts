export default {
  // 服务基本配置
  SERVICE_CONFIG: {
    // 端口
    port: 3001
  },

  // 数据库配置
  DATABASE_CONFIG: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'az12345678',
    database: 'database',
    entities: ['dist/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true
  }
}
