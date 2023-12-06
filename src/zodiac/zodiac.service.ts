import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateZodiacDto } from './dto/create-zodiac.dto';
import { UpdateZodiacDto } from './dto/update-zodiac.dto';
import { ZodiacEntity } from './entities/zodiac.entity';

@Injectable()
export class ZodiacService {
  constructor(
    @InjectRepository(ZodiacEntity) // 注入实体
    private readonly zodiacRepository: Repository<ZodiacEntity> // TODO: Repository方法操作数据
  ) {}

  async findAll(): Promise<ZodiacEntity[]> {
    //  SELECT * FROM products ORDER BY product_name ASC; 顺序查； desc 倒序查
    return await this.zodiacRepository.query('select * from zodiac ORDER BY periods desc')
  }

  async findOne(id: string) {
    return await this.zodiacRepository.findOne({
      where: { id }
    })
  }

  //增加
  async create(parameter: CreateZodiacDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)
    try {
      await this.zodiacRepository.save(parameter)
      return true
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
      return false
    }
  }

  // 更新
  async update(id: string, parameter: UpdateZodiacDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)
    try {
      const recommendToUpdate = await this.zodiacRepository.findOne({ where: { id } })
      await this.zodiacRepository.save({ ...recommendToUpdate, ...parameter })
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
      const result = await this.zodiacRepository.delete(id)
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
    result.list = await this.zodiacRepository.find({
      where: SQLwhere,
      order: {
        periods: 'DESC'
      },
      skip: (Number(parameter.pageNum) - 1) * Number(parameter.pageSize), // 分页，跳过几项
      take: Number(parameter.pageSize), // 分页，取几项
      cache: true
    })
    // 总条数
    result.totalRows = await this.zodiacRepository.count()
    // 总页数
    result.totalPage = Math.ceil((await this.zodiacRepository.count()) / parameter.pageSize)

    return result
  }
}
