import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { QueryGlobalDto } from 'src/global/query-global.dto'
import { CreateZodiacDto } from './dto/create-zodiac.dto'
import { UpdateZodiacDto } from './dto/update-zodiac.dto'
import { ZodiacService } from './zodiac.service'

@Controller('zodiac')
export class ZodiacController {
  constructor(private readonly zodiacService: ZodiacService) {}

  // 分页查询
  @Get('page')
  page(@Query() params: QueryGlobalDto) {
    return this.zodiacService.pageQuery(params)
  }
  // 查询全部
  @Get()
  findAll() {
    return this.zodiacService.findAll()
  }
  // ID 查询单个
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zodiacService.findOne(id)
  }

  // 增加
  @Post('/create')
  create(@Body() createZodiacDto: CreateZodiacDto) {
    return this.zodiacService.create(createZodiacDto)
  }
  // 更新
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZodiacDto: UpdateZodiacDto) {
    return this.zodiacService.update(id, updateZodiacDto)
  }

  // 删除
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zodiacService.remove(+id)
  }
}
