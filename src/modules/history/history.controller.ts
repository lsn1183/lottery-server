import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { CreateHistoryDto } from './dto/create-history.dto'
import { QueryHistoryDto } from './dto/query-history.dto'
import { UpdateHistoryDto } from './dto/update-history.dto'
import { HistoryEntity } from './entities/history.entity'
import { HistoryService } from './history.service'

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}
  // @Public()
  @Get()
  findAll(): Promise<HistoryEntity[]> {
    return this.historyService.findAll()
  }
  // @Public()
  @Get('page')
  pageQuery(@Query() query: QueryHistoryDto): Promise<HistoryEntity[]> {
    return this.historyService.pageQuery(query)
  }
  // @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historyService.findOne(id)
  }

  @Post('create')
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.create(createHistoryDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoryDto: UpdateHistoryDto) {
    return this.historyService.update(id, updateHistoryDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historyService.remove(+id)
  }
}
