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

## 数据库
# 新建 user 模块，我们都放在 logical 下
nest g mo colour && nest g s colour --no-spec && nest g co colour --no-spec
# nest g resource colour modules --no-spec


## License

Nest is [MIT licensed](LICENSE).

src
 │-- constants（全局常量定义）
 │       ├──common.constants.ts
 │ -- utils（常用工具类）
 │       ├──http.util.ts
 │       └──file.util.ts
 |-- common （通用模块，包含自定义装饰器、过滤器、守卫、拦截器、中间件）
 |-- app.controller.ts  // 应用程序控制器
 |-- app.service.ts     // 应用程序业务逻辑
 |-- app.module.ts      // 应用程序根模块
 |-- main.ts            // 应用程序入口文件
nodemon-debug.json  // nodemon `debug` 模式配置文件
nodemon.json        // nodemon 配置文件
package.json        // 定义了这个项目所需要的各种模块，以及项目的配置信息
package-lock.json   // 各种模块的版本锁文件，用于后续加速安装依赖
tsconfig.json       // 文件中指定了用来编译这个项目的根文件和编译选项
tslint.json         // ts 语法检查配置文件
nodejs
├── package.json
├── README.md
├── src
│   │   └── constants（全局常量定义）
│   │       ├──common.constants.ts
│   │   └── utils（常用工具类）
│   │       ├──http.util.ts
│   │       └──file.util.ts
│   ├── app.module.ts（模块配置文件）
│   ├── common （通用模块，包含自定义装饰器、过滤器、守卫、拦截器、中间件）
│   │   ├── decorators （项目通用装饰器）
│   │   │   └── roles.decorator.ts
│   │   ├── filters （过滤器）
│   │   │   └── http-exception.filter.ts
│   │   ├── guards （守卫）
│   │   │   └── roles.guard.ts
│   │   ├── interceptors （拦截器）
│   │   │   ├── exception.interceptor.ts
│   │   │   ├── logging.interceptor.ts
│   │   ├── middleware （中间件）
│   │   │   └── logger.middleware.ts
│   │   └── pipes （管道，主要用于数据验证和类型转换）
│   │       ├── parse-int.pipe.ts
│   │       └── validation.pipe.ts
│   ├── config （配置文件信息）
│   │   ├── database.ts
│   │   ├── redis.ts
│   ├── jobs （高并发场景下队列处理）
│   ├── main.ts （入口文件）
│   ├── modules （业务代码，按目录区分模块）
│   │   ├── hello
│   │   │   ├── hello.controller.ts
│   │   │   ├── hello.module.ts
│   │   │   └── hello.service.ts
│   │   └── users
│   │   │   ├── dto （数据传输对象定义）
│   │   │   │   └── users.create.dto.ts
│   │   │   │   └── users.update.dto.ts
│   │       ├── users.controller.ts （控制层）
│   │       ├── users.entity.ts （映射数据库模型对象）
│   │       ├── users.module.ts (模块定义）
│   │       └── users.service.ts （service层）
│   ├── tasks （定时任务）
│   │   ├── tasks.module.ts
│   │   └── tasks.service.ts
│   └── templates （页面模板）
├── test （单元测试）
│   ├── app.e2e-spec.ts
├── tsconfig.json

# 以一个用户授权模块为例，通常能看到这些文件，而他们的用途如下：

*.module.ts : 通常是模块文件，用于组织和管理控制器、服务、守卫等。它是 Nest.js 应用程序的基础单元。
*.service.ts : Service 层通常用于处理模块的业务逻辑。它们通常被注入到控制器（controller）中，并可以访问数据库、执行计算等。
*.controller.ts : 控制器文件用于处理 HTTP 请求和响应。它们通常依赖于 Service 来执行业务逻辑。
*.guard.ts : 守卫文件用于实现路由保护，例如身份验证和授权。
*.interface.ts : 接口文件用于定义局部用到的类型和数据结构，以确保代码的健壮性。（ts 声明等）
*.dto.ts : 数据传输对象（DTO）用于验证客户端发送的数据。
*.entity.ts : 实体文件用于定义数据库模型。
其中一些名词的简单解释如下：

# DTO（Data Transfer Object）: 数据传输对象，用于在对象和 API 之间传输数据。
Guard: 守卫，用于实现权限控制和访问验证。
Module: 模块，NestJS 的基本组织单位，用于组织和管理控制器、服务等。
Service: 服务，包含主要的业务逻辑，通常被注入到控制器中。
Entity: 实体，用于定义数据库模型，通常与 ORM（对象关系映射）一起使用。
Interceptor: 拦截器在 NestJS 中是一个用 @Injectable() 装饰器注释的类，并实现 NestInterceptor 接口。拦截器用于在函数执行之前或之后执行一些操作，例如日志记录、异常处理、数据转换等。
Reflector: Reflector 主要用于元数据的反射和操作。在拦截器中，Reflector 可以用于获取方法或类上设置的自定义元数据，从而允许更灵活的操作。

# Module
1.根模块：每个 Nest.js 应用程序都有一个根模块，它是 Nest 用于构建应用程序图 （application graph）的起点。这个图用于解析模块与提供者（Providers）之间的关系和依赖。
2.组织组件：模块是组织和管理组件（如控制器、服务等）的有效方式。通过模块，你可以将密切相关的功能组合在一起。
3.多模块架构：对于大型应用程序，通常会采用多模块架构。每个模块都封装了一组特定的、密切相关的功能。

# Service 层（服务层）
在软件架构中，通常会有几个不同的层来组织代码和功能。这些层有助于实现关注点分离（Separation of Concerns），使得代码更易于维护和扩展。在本例中，我们主要关注以下几个层：Service 层和 Controller 层，至于 DAO 层：
无论是 nest 还是 egg，官方 demo 里都没有明确提到 dao 层，直接在 service 层操作数据库了。这对于简单的业务逻辑没问题，如果业务逻辑变得复杂，service 层的维护将会变得非常困难。业务一开始一般都很简单，它一定会向着复杂的方向演化，如果从长远考虑，一开始就应该保留 dao。
Service 层主要负责业务逻辑的实现。这一层通常会与数据库进行交互，执行 CRUD（创建、读取、更新、删除）操作，以及执行其他与业务逻辑相关的任务。
例如，一个名为 UserService 的服务可能有一个 registerUser 方法，该方法接收一个 LoginUserDto 对象，验证数据，并将新用户添加到数据库中。

# Controller 层（控制器层）
Controller 层主要负责处理来自客户端的请求和发送响应。控制器会使用 Service 层提供的方法来执行业务逻辑，并将结果返回给客户端。
例如，一个名为 UserController 的控制器可能有一个 register 方法，该方法接收客户端发送的 HTTP POST 请求和 LoginUserDto 数据。

# DTO（Data Transfer Object）
用 po 和 dto 来描述实体及其周边。po 是持久化对象和数据库的表结构一一对应；dto 数据传输对象则很灵活，可以在丰富的场景描述入参或返回值。
下面是个 user 实体的例子：

# 与 Service 层和 Controller 层的关系
在 Controller 层，DTO 用于验证来自客户端的请求数据。当客户端发送一个请求时，Nest.js 会使用 DTO 来验证请求体中的数据是否符合预期的格式和类型。
在 Service 层，DTO 用于执行业务逻辑。
这样，DTO 成为了 Controller 层和 Service 层之间的桥梁，使得数据在这两个层之间能够流动和转换，同时保证了类型安全和数据验证。
在这个例子中，LoginUserDto 是一个 DTO，它定义了用户注册时需要提交的数据格式。这个 DTO 在 Controller 层用于接收客户端的数据，并在 Service 层用于执行业务逻辑。

# Entity（实体）
在 NestJS 或其他 TypeScript 框架中，.entity.ts 文件用于定义数据库模型。这些模型通常与数据库表一一对应，并用于描述表的结构和关系。实体类通常使用装饰器（decorators）来标注字段和其类型，以便 ORM 工具能够正确地与数据库交互。。