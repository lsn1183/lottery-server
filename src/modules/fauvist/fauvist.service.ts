import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFauvistDto } from './dto/create-fauvist.dto';
import { UpdateFauvistDto } from './dto/update-fauvist.dto';
import { FauvistEntity } from './entities/fauvist.entity';
// SELECT * FROM `database`.`recommend` ORDER BY `periods` DESC LIMIT 0,1000
@Injectable()
export class FauvistService {
  constructor(
    @InjectRepository(FauvistEntity) // 注入实体
    private readonly fauvistRepository: Repository<FauvistEntity> // TODO: Repository方法操作数据
  ) {}

  async findAll(): Promise<FauvistEntity[]> {
    //  SELECT * FROM products ORDER BY product_name ASC; 顺序查； desc 倒序查
    return await this.fauvistRepository.query('select * from fauvist ORDER BY periods desc')
  }

  async findOne(id: string) {
    return await this.fauvistRepository.findOne({
      where: { id }
    })
  }

  //增加
  async create(parameter: CreateFauvistDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)
    try {
      await this.fauvistRepository.save(parameter)
      return true
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
      return false
    }
  }

  // 更新
  async update(id: string, parameter: UpdateFauvistDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)
    try {
      const recommendToUpdate = await this.fauvistRepository.findOne({ where: { id } })
      await this.fauvistRepository.save({ ...recommendToUpdate, ...parameter })
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
      const result = await this.fauvistRepository.delete(id)
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
    result.list = await this.fauvistRepository.find({
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
    result.totalRows = await this.fauvistRepository.count()
    // 总页数
    result.totalPage = Math.ceil((await this.fauvistRepository.count()) / parameter.pageSize)
    return result
  }
}
