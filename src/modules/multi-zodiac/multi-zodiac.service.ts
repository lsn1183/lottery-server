import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateMultiZodiacDto } from './dto/create-multi-zodiac.dto'
import { UpdateMultiZodiacDto } from './dto/update-multi-zodiac.dto'
import { MultiZodiacEntity } from './entities/multi-zodiac.entity'

@Injectable()
export class MultiZodiacService {
  constructor(
    @InjectRepository(MultiZodiacEntity) // 注入实体
    private readonly multiZodiacRepository: Repository<MultiZodiacEntity> // TODO: Repository方法操作数据
  ) {}

  async findAll(): Promise<MultiZodiacEntity[]> {
    //  SELECT * FROM products ORDER BY product_name ASC; 顺序查； desc 倒序查
    return await this.multiZodiacRepository.query('select * from multiZodiac ORDER BY periods desc')
  }

  async findOne(id: string) {
    return await this.multiZodiacRepository.findOne({
      where: { id }
    })
  }

  //增加
  async create(parameter: CreateMultiZodiacDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)
    try {
      await this.multiZodiacRepository.save(parameter)
      return true
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
      return false
    }
  }

  // 更新
  async update(id: string, parameter: UpdateMultiZodiacDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)
    try {
      const recommendToUpdate = await this.multiZodiacRepository.findOne({ where: { id } })
      await this.multiZodiacRepository.save({ ...recommendToUpdate, ...parameter })
      return true
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
      return false
    }
  }

  // 删除
  async remove(id: number): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(id)}`)
    try {
      const result = await this.multiZodiacRepository.delete(id)
      Logger.log(`删除返回数据：${JSON.stringify(result)}`)
      if (result.affected == 0) {
        return false
      } else {
        return true
      }
    } catch (error) {
      return false
    }
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
    if (parameter.id != undefined) {
      SQLwhere.id = parameter.id
    }
    result.list = await this.multiZodiacRepository.find({
      where: SQLwhere,
      order: {
        year: 'DESC', // ASC 顺序，DESC 倒序
        periods: 'DESC'
      },
      skip: (Number(parameter.pageNum) - 1) * Number(parameter.pageSize), // 分页，跳过几项
      take: Number(parameter.pageSize), // 分页，取几项
      cache: true
    })
    // 总条数
    result.totalRows = await this.multiZodiacRepository.count()
    // 总页数
    result.totalPage = Math.ceil((await this.multiZodiacRepository.count()) / parameter.pageSize)
    return result
  }
}
