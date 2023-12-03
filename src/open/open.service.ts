import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { OpenEntity } from './open.entity'

@Injectable()
export class OpenService {
  constructor(
    @InjectRepository(OpenEntity) // 注入实体
    private readonly openRepository: Repository<OpenEntity> // TODO: Repository方法操作数据
  ) {}

  // private readonly OpenList: OpenEntity[] = []

  async findAll(): Promise<OpenEntity[]> {
    return await this.openRepository.query('select * from open') // TODO: 原生查询语句
  }

  async findOne(ids: string) {
    // 使用封装好方法：
    return await this.openRepository.find({ where: { id: ids } })
  }

  async create(params: OpenEntity) {
    // 使用封装好方法：
    return await this.openRepository.insert(params)
  }

  async update(params: OpenEntity) {
    // 使用封装好方法：
    const { periods } = params
    const data = await this.openRepository.find({
      where: { periods: periods }
    })
    return await this.openRepository.save({ ...data, periods, ...params })
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
  }
}
