import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnimalEntity } from './animal.entity';

@Injectable()
export class AnimalService {
  // 使用InjectRepository装饰器并引入Repository这样就可以使用typeorm的操作了
  constructor(
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>,
  ) {}
  // 获取所有数据列表(animalRepository.query()方法属于typeoram)
  async findAll(): Promise<AnimalEntity[]> {
    return await this.animalRepository.query('select * from animal');
  }
  findOne(id): Promise<any> {
    return this.animalRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.animalRepository.delete(id);
  }

  async create(animal: AnimalEntity): Promise<void> {
    await this.animalRepository.save(animal);
  }
}
