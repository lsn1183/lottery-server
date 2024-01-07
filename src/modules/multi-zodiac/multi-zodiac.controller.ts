import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { QueryGlobalDto } from 'src/global/query-global.dto'
import { CreateMultiZodiacDto } from './dto/create-multi-zodiac.dto'
import { UpdateMultiZodiacDto } from './dto/update-multi-zodiac.dto'
import { MultiZodiacService } from './multi-zodiac.service'

@Controller('multiZodiac')
export class MultiZodiacController {
  constructor(private readonly multiZodiacService: MultiZodiacService) {}

  // 分页查询
  // @Public()
  @Get('page')
  page(@Query() params: QueryGlobalDto) {
    return this.multiZodiacService.pageQuery(params)
  }
  // 查询全部
  // @Public()
  @Get()
  findAll() {
    return this.multiZodiacService.findAll()
  }
  // ID 查询单个
  // @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.multiZodiacService.findOne(id)
  }

  // 增加
  @Post('/create')
  create(@Body() createMultiZodiacDto: CreateMultiZodiacDto) {
    return this.multiZodiacService.create(createMultiZodiacDto)
  }

  // 更新
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMultiZodiacDto: UpdateMultiZodiacDto) {
    return this.multiZodiacService.update(id, updateMultiZodiacDto)
  }

  // 删除
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.multiZodiacService.remove(id)
  }
}
