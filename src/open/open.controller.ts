import { Controller, Get, HttpCode, Post, Put, Request } from '@nestjs/common';
import { OpenEntity } from './open.entity';
import { OpenService } from './open.service';

interface OpenDto {
  periods: string;
  particular: string;
  ordinary1: string;
  ordinary2: string;
  ordinary3: string;
  ordinary4: string;
  ordinary5: string;
  ordinary6: string;
}

@Controller('open')
export class OpenController {
  constructor(private readonly entityService: OpenService) {}

  @Get('list')
  @HttpCode(200)
  findAll(): Promise<OpenEntity[]> {
    return this.entityService.findAll();
  }

  @Get('id')
  @HttpCode(200)
  getId(): Promise<any> {
    return this.entityService.test();
  }

  @Post('create/lottery')
  create(@Request() req): Promise<any> {
    return this.entityService.create(req.body);
  }

  @Put('update/lottery')
  update(@Request() req): any {
    return this.entityService.create(req.body);
  }

  // @Delete(':id')
  // remove(@Param('id') id) {
  //   return `This action removes a #${id} cat`;
  // }
}
