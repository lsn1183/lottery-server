import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm'
//  @ManyToOne(() => User, user => user.photos) 多对一关系
// @OneToMany(() => Photo, photo => photo.user) 一对多关系
// 四肖推荐表
@Entity({ name: 'fourZodiac' })
export class FourZodiacEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  @Generated('uuid')
  public readonly id!: string | number

  @Column({ type: 'int', name: 'periods' })
  periods!: number
  // 单数肖
  @Column({ type: 'varchar', name: 'single' })
  single: string
  // 双数肖
  @Column({ type: 'varchar', name: 'double' })
  double: string
}
