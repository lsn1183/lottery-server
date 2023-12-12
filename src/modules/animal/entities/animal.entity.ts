import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm'
// 生肖表
@Entity({ name: 'animal' })
export class AnimalEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  @Generated('uuid')
  public readonly id!: string | number

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

  @Column({ type: 'varchar', name: 'type' })
  type: string
}
