import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { CreateOpenDto } from './dto/create-open.dto'
// import { QueryOpenDto } from './dto/query-open.dto'
import { UpdateOpenDto } from './dto/update-open.dto'
// import { OpenEntity } from './entities/open.entity'
import { QueryOpenDto } from './dto/query-open.dto'
import { OpenEntity } from './entities/open.entity'
import { OpenService } from './open.service'

@Controller('open')
export class OpenController {
  constructor(private readonly openService: OpenService) {}
  // @Public()
  // @Get()
  // findAll(): Promise<OpenEntity[]> {
  //   return this.openService.findAll()
  // }
  // // @Public()
  @Get('page')
  pageQuery(@Query() query: QueryOpenDto): Promise<OpenEntity[]> {
    return this.openService.pageQuery(query)
  }
  // @Public()
  @Get(':periods')
  findOne(@Param('periods') periods: number) {
    return this.openService.findOne(periods)
  }

  @Post('create')
  create(@Body() createOpenDto: CreateOpenDto) {
    return this.openService.create(createOpenDto)
  }

  @Patch('update')
  update(@Body() updateOpenDto: UpdateOpenDto) {
    // Logger.log(`请求参数：id, ${JSON.stringify(updateOpenDto)}`)
    const id = updateOpenDto?.id
    return this.openService.update(id, updateOpenDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.openService.remove(+id)
  }
}
