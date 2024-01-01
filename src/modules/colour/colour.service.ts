import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateColourDto } from './dto/create-colour.dto'
import { UpdateColourDto } from './dto/update-colour.dto'
import { ColourEntity } from './entities/colour.entity'

@Injectable()
export class ColourService {
  constructor(
    @InjectRepository(ColourEntity) // 注入实体
    private readonly colourRepository: Repository<ColourEntity> // TODO: Repository方法操作数据
  ) {}

  async findAll(): Promise<ColourEntity[]> {
    //  SELECT * FROM products ORDER BY product_name ASC; 顺序查； desc 倒序查
    return await this.colourRepository.query('select * from colour ORDER BY periods desc')
  }

  async findOne(id: string) {
    return await this.colourRepository.findOne({
      where: { id }
    })
  }

  //增加
  async create(parameter: CreateColourDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)
    try {
      await this.colourRepository.save(parameter)
      return true
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
      return false
    }
  }

  // 更新
  async update(id: string | number, parameter: UpdateColourDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)
    try {
      const recommendToUpdate = await this.colourRepository.findOne({ where: { id } })
      await this.colourRepository.save({ ...recommendToUpdate, ...parameter })
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
      const result = await this.colourRepository.delete(id)
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
    result.list = await this.colourRepository.find({
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
    result.totalRows = await this.colourRepository.count()
    // 总页数
    result.totalPage = Math.ceil((await this.colourRepository.count()) / parameter.pageSize)

    return result
  }
}
