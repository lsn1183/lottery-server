import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { Public } from 'src/common/decorator/public.decorator'
import { QueryGlobalDto } from 'src/global/query-global.dto'
import { CreateFauvistDto } from './dto/create-fauvist.dto'
import { UpdateFauvistDto } from './dto/update-fauvist.dto'
import { FauvistService } from './fauvist.service'

// 家禽野兽篇吉凶
@Controller('fauvist')
export class FauvistController {
  constructor(private readonly fauvistService: FauvistService) { }

  // 分页查询
  @Public()
  @Get('page')
  page(@Query() params: QueryGlobalDto) {
    return this.fauvistService.pageQuery(params)
  }
  // 查询全部
  @Public()
  @Get()
  findAll() {
    return this.fauvistService.findAll()
  }
  // ID 查询单个
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fauvistService.findOne(id)
  }

  // 增加
  @Post('/create')
  create(@Body() createFauvistDto: CreateFauvistDto) {
    return this.fauvistService.create(createFauvistDto)
  }

  // 更新
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFauvistDto: UpdateFauvistDto) {
    return this.fauvistService.update(id, updateFauvistDto)
  }

  // 删除
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fauvistService.remove(+id)
  }
}
