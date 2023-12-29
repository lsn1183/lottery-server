import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { QueryGlobalDto } from 'src/global/query-global.dto'
import { ColourService } from './colour.service'
import { CreateColourDto } from './dto/create-colour.dto'
import { UpdateColourDto } from './dto/update-colour.dto'

@Controller('colour')
export class ColourController {
  constructor(private readonly colourService: ColourService) {}
  // 分页查询
  // @Public()
  @Get('page')
  page(@Query() params: QueryGlobalDto) {
    return this.colourService.pageQuery(params)
  }
  // 查询全部
  // @Public()
  @Get()
  findAll() {
    return this.colourService.findAll()
  }
  // ID 查询单个
  // @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colourService.findOne(id)
  }
  // 增加
  @Post('create')
  create(@Body() createColourDto: CreateColourDto) {
    return this.colourService.create(createColourDto)
  }
  // 更新
  @Patch(':id')
  update(@Param('id') id: string | number, @Body() updateColourDto: UpdateColourDto) {
    return this.colourService.update(id, updateColourDto)
  }

  // 删除
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colourService.remove(+id)
  }
}
