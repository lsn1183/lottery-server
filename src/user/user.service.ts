import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from '../user/user.entity'
import { UpdateUserDto } from './dto/updateUser.dto'

@Injectable()
export class UserService {
  // 使用InjectRepository装饰器并引入 Repository 这样就可以使用typeorm的操作了
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}
  private readonly User: UserEntity[] = []

  // 获取所有用户数据列表(userRepository.query()方法属于typeoram)
  async findAll(parameter: any): Promise<UserEntity[]> {
    console.log('parameter', parameter)
    return await this.userRepository.query('select * from user')
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
      rows: []
    }

    // 返回条数
    const SQLwhere: any = {}
    if (parameter.name != undefined) {
      SQLwhere.name = parameter.name
    }
    result.rows = await this.userRepository.find({
      where: SQLwhere,
      order: {
        id: 'DESC'
      },
      skip: (parameter.pageNum - 1) * Number(parameter.pageSize), // 分页，跳过几项
      take: parameter.pageSize, // 分页，取几项
      cache: true
    })

    // 总条数
    result.totalRows = await this.userRepository.count()

    // 总页数
    result.totalPage = Math.ceil((await this.userRepository.count()) / parameter.pageSize)

    return result
  }

  // 增加/更新
  async save(parameter: UpdateUserDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(parameter)}`)
    try {
      await this.userRepository.save(parameter)
      return true
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
      return false
    }
  }

  // 删除
  async delete(ids: any): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(ids)}`)
    try {
      const result = await this.userRepository.delete(ids)
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
}
