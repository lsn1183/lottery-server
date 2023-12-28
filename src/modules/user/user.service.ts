import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserEntity } from './entities/user.entity'

@Injectable()
export class UserService {
  // 使用InjectRepository装饰器并引入 Repository 这样就可以使用typeorm的操作了
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}
  private readonly User: UserEntity[] = []

  // 获取所有用户数据列表(userRepository.query()方法属于typeoram)
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.query('select * from user')
  }

  async findOne(name: string): Promise<any | undefined> {
    if (!name) {
      return {
        code: 400,
        msg: '请输入用户名'
      }
    }
    try {
      return await this.userRepository.findOne({
        where: { name }
      })
    } catch (error) {
      Logger.log(`错误参数：${JSON.stringify(error)}`)
      return void 0
    }
  }

  // 增加
  async create(createUserDto: CreateUserDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(createUserDto)}`)
    try {
      await this.userRepository.save(createUserDto)
      return true
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
      return false
    }
  }

  async update(id: any, updateUserDto: UpdateUserDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(updateUserDto)}`)
    try {
      const userToUpdate = await this.userRepository.findOne(id)
      await this.userRepository.save({ ...userToUpdate, ...updateUserDto })
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
      const result = await this.userRepository.delete(id)
      Logger.log(`删除返回数据：${JSON.stringify(result)}`)
      if (result.affected == 0) {
        return false
      } else {
        return true
      }
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
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
    if (parameter.name != undefined) {
      SQLwhere.name = parameter.name
    }
    result.list = await this.userRepository.find({
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

  // 登录
  async login(createUserDto: CreateUserDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(createUserDto)}`)
    try {
      // await this.userRepository.save(createUserDto)
      return true
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
      return false
    }
  }
}
