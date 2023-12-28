import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateAnimalDto } from './dto/create-animal.dto'
import { UpdateAnimalDto } from './dto/update-animal.dto'
import { AnimalEntity } from './entities/animal.entity'

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>
  ) {}

  // 使用封装好方法：
  async findAll(): Promise<AnimalEntity[]> {
    return await this.animalRepository.query('select * from animal ORDER BY id desc')
  }

  async findOne(year: string) {
    Logger.log(`请求参数：${JSON.stringify(year)}`)
    return await this.animalRepository.find({ where: { year } })
  }

  async create(createAnimalDto: CreateAnimalDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(createAnimalDto)}`)
    try {
      await this.animalRepository.save(createAnimalDto)
      return true
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
      return false
    }
  }
  // 更新
  async update(id: string, updateAnimalDto: UpdateAnimalDto): Promise<boolean> {
    Logger.log(`请求参数：${JSON.stringify(id)}`)
    try {
      const animalToUpdate = await this.animalRepository.findOne({ where: { id } })
      await this.animalRepository.save({ ...animalToUpdate, ...updateAnimalDto })
      return true
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
      return false
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.animalRepository.delete(id)
      return true
    } catch (error) {
      Logger.log(`请求失败：${JSON.stringify(error)}`)
      return false
    }
  }
}
