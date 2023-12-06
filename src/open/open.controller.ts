import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { CreateOpenDto } from './dto/create-open.dto'
import { QueryOpenDto } from './dto/query-open.dto'
import { UpdateOpenDto } from './dto/update-open.dto'
import { OpenEntity } from './entities/open.entity'
import { OpenService } from './open.service'

@Controller('open')
export class OpenController {
  constructor(private readonly openService: OpenService) {}

  @Get()
  findAll(): Promise<OpenEntity[]> {
    return this.openService.findAll()
  }

  @Get('page')
  pageQuery(@Query() query: QueryOpenDto): Promise<OpenEntity[]> {
    return this.openService.pageQuery(query)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.openService.findOne(id)
  }

  @Post()
  create(@Body() createOpenDto: CreateOpenDto) {
    return this.openService.create(createOpenDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpenDto: UpdateOpenDto) {
    return this.openService.update(id, updateOpenDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.openService.remove(+id)
  }
}
