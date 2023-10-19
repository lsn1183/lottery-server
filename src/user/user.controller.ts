import { Controller, Get } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get('login')
  login(): Promise<UserEntity[]> {
    return this.userService.login();
  }

}
