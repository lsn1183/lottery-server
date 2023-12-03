import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { QueryOpenDto } from './dto/queryOpen.dto'
import { OpenEntity } from './open.entity'
import { OpenService } from './open.service'

@Controller('open')
export class OpenController {
  constructor(private readonly entityService: OpenService) {}

  @Get('page')
  page(@Query() query: QueryOpenDto): Promise<OpenEntity[]> {
    return this.entityService.pageQuery(query)
  }

  @Post('create')
  create(@Body() body): Promise<any> {
    return this.entityService.create(body)
  }

  @Put('update')
  update(@Body() body): Promise<any> {
    return this.entityService.create(body)
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return `This action removes a #${id} cat`
  }
}
