## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

src
 |-- app.controller.ts  // 应用程序控制器
 |-- app.service.ts     // 应用程序业务逻辑
 |-- app.module.ts      // 应用程序根模块
 |-- main.ts                  // 应用程序入口文件
nodemon-debug.json  // nodemon `debug` 模式配置文件
nodemon.json        // nodemon 配置文件
package.json        // 定义了这个项目所需要的各种模块，以及项目的配置信息
package-lock.json   // 各种模块的版本锁文件，用于后续加速安装依赖
tsconfig.json       // 文件中指定了用来编译这个项目的根文件和编译选项
tslint.json         // ts 语法检查配置文件


## 数据库
# 新建 user 模块，我们都放在 logical 下
nest g mo user logical && nest g s user logical --no-spec && nest g co user logical --no-spec

