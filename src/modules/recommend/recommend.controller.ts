import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { CreateRecommendDto } from './dto/create-recommend.dto'
import { QueryRecommendDto } from './dto/query-recommend.dto'
import { UpdateRecommendDto } from './dto/update-recommend.dto'
import { RecommendService } from './recommend.service'

@Controller('recommend')
export class RecommendController {
  constructor(private readonly recommendService: RecommendService) {}

  // 分页查询
  // @Public()
  @Get('page')
  page(@Query() params: QueryRecommendDto) {
    return this.recommendService.pageQuery(params)
  }
  // 查询全部
  // @Public() // token校验白名单
  @Get()
  findAll() {
    return this.recommendService.findAll()
  }
  // ID 查询单个
  // @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recommendService.findOne(id)
  }

  // 增加
  @Post('create')
  create(@Body() createRecommendDto: CreateRecommendDto) {
    return this.recommendService.create(createRecommendDto)
  }
  // 更新
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecommendDto: UpdateRecommendDto) {
    return this.recommendService.update(id, updateRecommendDto)
  }

  // 删除
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recommendService.remove(+id)
  }
}
