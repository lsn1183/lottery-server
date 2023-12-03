import { Body, Controller, Delete, Get, Logger, Post, Query } from '@nestjs/common'
import { AddRecommendDto } from './dto/addRecommend.dto'
import { DeleteRecommendDto } from './dto/deleteRecommend.dto'
import { QueryRecommendDto } from './dto/queryRecommend.dto'
import { UpdateRecommendDto } from './dto/updateRecommend.dto'
import { RecommendEntity } from './recommend.entity'
import { RecommendService } from './recommend.service'

@Controller('recommend')
export class RecommendController {
  constructor(private readonly recommendService: RecommendService) {}

  @Get('page')
  query(@Query() queryDto: QueryRecommendDto): Promise<RecommendEntity[]> {
    return this.recommendService.pageQuery(queryDto)
  }

  @Post('/add')
  addUser(@Body() addDto: AddRecommendDto): Promise<boolean> {
    Logger.log(`增加用户接收参数：${JSON.stringify(addDto)}`)
    return this.recommendService.save(addDto)
  }

  @Post('/edit')
  updateUser(@Body() updateDto: UpdateRecommendDto): Promise<boolean> {
    Logger.log(`编辑用户接收参数：${JSON.stringify(updateDto)}`)
    return this.recommendService.save(updateDto)
  }

  @Delete('/delete')
  deleteUser(@Body() deleteDto: DeleteRecommendDto): Promise<boolean> {
    Logger.log(`删除用户接收参数：${JSON.stringify(deleteDto)}`)
    return this.recommendService.delete(deleteDto)
  }
}
