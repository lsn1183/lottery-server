import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpenEntity } from './open.entity';

@Injectable()
export class OpenService {
  constructor(
    @InjectRepository(OpenEntity) // 注入实体
    private readonly openRepository: Repository<OpenEntity>, // TODO: Repository方法操作数据
  ) {}

  async findAll(): Promise<OpenEntity[]> {
    return await this.openRepository.query('select * from open');
  }

  async test() {
    // 使用封装好方法：
    return await this.openRepository.find({ where: { id: 1 } });
  }

  async create(params: OpenEntity) {
    // 使用封装好方法：
    return await this.openRepository.insert(params);
  }

  async update(params: OpenEntity) {
    // 使用封装好方法：
    const { periods } = params;
    const data = await this.openRepository.find({
      where: { periods: periods },
    });
    return await this.openRepository.save({ ...data, periods, ...params });
  }
}
