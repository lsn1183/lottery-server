import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateHistoryDto } from './dto/create-history.dto'
import { UpdateHistoryDto } from './dto/update-history.dto'
import { HistoryEntity } from './entities/history.entity'

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity) // 注入实体
    private readonly historyRepository: Repository<HistoryEntity> // TODO: Repository方法操作数据
  ) {}

  async findAll(): Promise<HistoryEntity[]> {
    const data = await this.historyRepository.query('select * from history ORDER BY periods desc')
    return data // TODO: 原生查询语句
  }
  async findOne(id: string) {
    // 使用封装好方法：
    return await this.historyRepository.find({ where: { id } })
  }

  // 分页查询
  async pageQuery(parameter: any): Promise<any> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)

    // 定义返回格式
    const result = {
      pageNum: Number(parameter.pageNum),
      pageSize: Number(parameter.pageSize),
      totalPage: 0,
      totalRows: 0,
      list: []
    }

    // 返回条数
    const SQLwhere: any = {}
    if (parameter.periods != undefined) {
      SQLwhere.periods = parameter.periods
    }
    result.list = await this.historyRepository.find({
      where: SQLwhere,
      order: {
        // id: 'ASC', // ASC 顺序，DESC 倒序
        periods: 'DESC' // 从期数排序查
      },
      skip: (parameter.pageNum - 1) * Number(parameter.pageSize), // 分页，跳过几项
      take: parameter.pageSize, // 分页，取几项
      cache: true
    })
    // 总条数
    result.totalRows = await this.historyRepository.count()
    // 总页数
    result.totalPage = Math.ceil((await this.historyRepository.count()) / parameter.pageSize)
    return result
  }

  async create(CreateHistoryDto: CreateHistoryDto): Promise<boolean> {
    try {
      await this.historyRepository.save(CreateHistoryDto)
      return true
    } catch (error) {
      return false
    }
  }

  async update(id: string, UpdateHistoryDto: UpdateHistoryDto): Promise<boolean> {
    try {
      const openToUpdate = await this.historyRepository.findOne({
        where: { id }
      })
      await this.historyRepository.save({ ...openToUpdate, ...UpdateHistoryDto })
      return true
    } catch (error) {
      return false
    }
  }

  async remove(id: number): Promise<boolean> {
    try {
      await this.historyRepository.delete(id)
      return true
    } catch (error) {
      return false
    }
  }
}
