import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Query } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { QueryUserDto } from './dto/query-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserEntity } from './entities/user.entity'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Get('list')
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id)
  }

  /**
   * 用户管理-增加用户
   */
  @Post('/add')
  addUser(@Body() createUserDto: CreateUserDto) {
    Logger.log(`增加用户接收参数：${JSON.stringify(createUserDto)}`)
    return this.userService.create(createUserDto)
  }
  /**
   * 用户管理-编辑用户
   */
  @Patch(':id') // patch 局部更新，带宽更优秀
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    Logger.log(`编辑用户接收参数：${JSON.stringify(updateUserDto)}`)
    return this.userService.update(+id, updateUserDto)
  }

  /**
   * 用户管理-删除用户
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    Logger.log(`删除用户接收参数：${JSON.stringify(id)}`)
    return this.userService.remove(+id)
  }

  @Get('query')
  getUserInfo(@Query() user: QueryUserDto) {
    console.log(user.name)
    return this.userService.pageQuery(user)
  }
}
