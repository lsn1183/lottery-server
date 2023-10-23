import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnimalEntity } from './animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>,
  ) {}
  async findAll(): Promise<AnimalEntity[]> {
    return await this.animalRepository.query('select * from animal');
  }
  async findOne(id: string) {
    return await this.animalRepository.find({ where: { nums: id } });
  }

  async remove(id: number): Promise<void> {
    await this.animalRepository.delete(id);
  }

  async create(animal: AnimalEntity) {
    await this.animalRepository.save(animal);
  }

  async test(id: string) {
    // 使用封装好方法：
    return await this.animalRepository.find({ where: { nums: id } });
  }
}
