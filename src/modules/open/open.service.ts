import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateOpenDto } from './dto/create-open.dto'
import { UpdateOpenDto } from './dto/update-open.dto'
import { OpenEntity } from './entities/open.entity'

@Injectable()
export class OpenService {
  constructor(
    @InjectRepository(OpenEntity) // 注入实体
    private readonly openRepository: Repository<OpenEntity> // TODO: Repository方法操作数据
  ) {}

  async findAll(): Promise<OpenEntity[]> {
    return await this.openRepository.query('select * from open ORDER BY periods desc') // TODO: 原生查询语句
  }
  async findOne(periods: number) {
    // 使用封装好方法：
    return await this.openRepository.find({ where: { periods } })
  }
  // 分页查询
  async pageQuery(parameter: any): Promise<any> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)
    try {
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
      result.list = await this.openRepository.find({
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
      result.totalRows = await this.openRepository.count()
      // 总页数
      result.totalPage = Math.ceil((await this.openRepository.count()) / parameter.pageSize)
      return result
    } catch (error) {
      return error
    }
  }

  async create(createOpenDto: CreateOpenDto): Promise<boolean> {
    try {
      Logger.log('进来了', JSON.stringify(CreateOpenDto))
      await this.openRepository.save(createOpenDto)
      return true
    } catch (error) {
      return false
    }
  }

  async update(id: string, updateOpenDto: UpdateOpenDto): Promise<boolean> {
    try {
      const openToUpdate = await this.openRepository.findOne({
        where: { id }
      })
      await this.openRepository.save({ ...openToUpdate, ...updateOpenDto })
      return true
    } catch (error) {
      return false
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.openRepository.delete(id)
      return true
    } catch (error) {
      return false
    }
  }
}
