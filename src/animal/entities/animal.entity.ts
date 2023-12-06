import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
// 生肖表
@Entity({ name: 'animal' })
export class AnimalEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ type: 'varchar', name: 'nums' })
  nums: string

  @Column({ type: 'varchar', name: 'color' })
  color: string

  @Column({ type: 'varchar', name: 'name' })
  name: string

  @Column({ type: 'varchar', name: 'property' })
  property: string

  @Column({ type: 'varchar', name: 'general' })
  general: string

  @Column({ type: 'varchar', name: 'profession' })
  profession: string
}
