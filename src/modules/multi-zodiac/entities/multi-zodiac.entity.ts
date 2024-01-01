import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm'
//  @ManyToOne(() => User, user => user.photos) 多对一关系
// @OneToMany(() => Photo, photo => photo.user) 一对多关系
// 多个生肖推荐表
@Entity({ name: 'multiZodiac' })
export class MultiZodiacEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  @Generated('uuid')
  public readonly id!: string | number

  @Column({ type: 'int', name: 'periods' })
  periods!: number

  @Column({ type: 'varchar', name: 'main' })
  main: string

  @Column({ type: 'varchar', name: 'year' })
  year: string

  // 单数肖
  @Column({ type: 'varchar', name: 'single' })
  single: string

  // 双数肖
  @Column({ type: 'varchar', name: 'double' })
  double: string

  // 3数肖
  @Column({ type: 'varchar', name: 'three' })
  three: string

  // 4数肖
  @Column({ type: 'varchar', name: 'four' })
  four: string

  // 5数肖
  @Column({ type: 'varchar', name: 'five' })
  five: string

  // 6数肖
  @Column({ type: 'varchar', name: 'six' })
  six: string

  // 8数肖
  @Column({ type: 'varchar', name: 'eight' })
  eight: string

  // 9数肖
  @Column({ type: 'varchar', name: 'nine' })
  nine: string

  // 10数肖
  @Column({ type: 'varchar', name: 'ten' })
  ten: string
}
