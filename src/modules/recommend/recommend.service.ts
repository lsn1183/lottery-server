import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateRecommendDto } from './dto/create-recommend.dto'
import { UpdateRecommendDto } from './dto/update-recommend.dto'
import { RecommendEntity } from './entities/recommend.entity'

@Injectable()
export class RecommendService {
  constructor(
    @InjectRepository(RecommendEntity) // 注入实体
    private readonly recommendRepository: Repository<RecommendEntity> // TODO: Repository方法操作数据
  ) {}

  async findAll(): Promise<RecommendEntity[]> {
    //  SELECT * FROM products ORDER BY product_name ASC; 顺序查； desc 倒序查
    return await this.recommendRepository.query('select * from recommend ORDER BY periods desc')
  }

  async findOne(id: string) {
    return await this.recommendRepository.findOne({
      where: { id }
    })
  }

  //增加
  async create(parameter: CreateRecommendDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)
    try {
      await this.recommendRepository.save(parameter)
      return true
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
      return false
    }
  }

  // 更新
  async update(id: string, parameter: UpdateRecommendDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)
    try {
      const recommendToUpdate = await this.recommendRepository.findOne({ where: { id } })
      await this.recommendRepository.save({ ...recommendToUpdate, ...parameter })
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
      const result = await this.recommendRepository.delete(id)
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
    result.list = await this.recommendRepository.find({
      where: SQLwhere,
      order: {
        periods: 'DESC'
      },
      skip: (Number(parameter.pageNum) - 1) * Number(parameter.pageSize), // 分页，跳过几项
      take: Number(parameter.pageSize), // 分页，取几项
      cache: true
    })
    // 总条数
    result.totalRows = await this.recommendRepository.count()
    // 总页数
    result.totalPage = Math.ceil((await this.recommendRepository.count()) / parameter.pageSize)

    return result
  }
}
