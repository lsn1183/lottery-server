import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common'
import { AddUserDto } from './dto/addUser.dto'
import { DeleteUserDto } from './dto/deleteUser.dto'
import { QueryUserDto } from './dto/queryUser.dto'
import { UpdateUserDto } from './dto/updateUser.dto'
import { UserEntity } from './user.entity'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  findAll(@Body() queryUserDto: QueryUserDto): Promise<UserEntity[]> {
    return this.userService.findAll(queryUserDto)
  }

  @Get('query')
  getUserInfo(@Query() user: QueryUserDto): Promise<UserEntity[]> {
    console.log(user.name)
    return this.userService.pageQuery(user)
  }
  /**
   * 用户管理-增加用户
   */
  @Post('/add')
  addUser(@Body() addUserDto: AddUserDto): Promise<boolean> {
    Logger.log(`增加用户接收参数：${JSON.stringify(addUserDto)}`)
    return this.userService.save(addUserDto)
  }

  /**
   * 用户管理-编辑用户
   */
  @Post('/edit')
  updateUser(@Body() updateUserDto: UpdateUserDto): Promise<boolean> {
    Logger.log(`编辑用户接收参数：${JSON.stringify(updateUserDto)}`)
    return this.userService.save(updateUserDto)
  }

  /**
   * 用户管理-删除用户
   */
  @Post('/delete')
  deleteUser(@Body() deleteUserDto: DeleteUserDto): Promise<boolean> {
    Logger.log(`删除用户接收参数：${JSON.stringify(deleteUserDto)}`)
    return this.userService.delete(deleteUserDto)
  }
}
