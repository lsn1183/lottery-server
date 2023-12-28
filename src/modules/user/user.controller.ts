import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { Public } from 'src/common/decorator/public.decorator'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserEntity } from './entities/user.entity'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Public()
  @Get('list')
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll()
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id)
  }

  /**
   * 用户管理-增加用户
   */
  @Post('create')
  create(@Body() createUserDto: UserEntity) {
    const password = bcrypt.hashSync(createUserDto.password, 10) // 散列加密，创建用户对密码进行加密再存储
    const params = {
      password,
      name: createUserDto.name,
      id: createUserDto.id
    }
    return this.userService.create(params)
  }

  /**
   * 用户管理-编辑用户
   */
  @Patch(':id') // patch 局部更新，带宽更优秀
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  /**
   * 用户管理-删除用户
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }

  @Post('login')
  getUserInfo(@Body() user: CreateUserDto) {
    return this.userService.login(user)
  }
}
