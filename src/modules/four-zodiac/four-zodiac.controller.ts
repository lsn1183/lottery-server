import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { Public } from 'src/common/decorator/public.decorator'
import { QueryGlobalDto } from 'src/global/query-global.dto'
import { CreateFourZodiacDto } from './dto/create-four-zodiac.dto'
import { UpdateFourZodiacDto } from './dto/update-four-zodiac.dto'
import { FourZodiacService } from './four-zodiac.service'

@Controller('fourzodiac')
export class FourZodiacController {
  constructor(private readonly fourZodiacService: FourZodiacService) {}

  // 分页查询
  @Public()
  @Get('page')
  page(@Query() params: QueryGlobalDto) {
    return this.fourZodiacService.pageQuery(params)
  }
  // 查询全部
  @Public()
  @Get()
  findAll() {
    return this.fourZodiacService.findAll()
  }
  // ID 查询单个
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fourZodiacService.findOne(id)
  }

  // 增加
  @Post('/create')
  create(@Body() createFourZodiacDto: CreateFourZodiacDto) {
    return this.fourZodiacService.create(createFourZodiacDto)
  }

  // 更新
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFourZodiacDto: UpdateFourZodiacDto) {
    return this.fourZodiacService.update(id, updateFourZodiacDto)
  }

  // 删除
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fourZodiacService.remove(+id)
  }
}
