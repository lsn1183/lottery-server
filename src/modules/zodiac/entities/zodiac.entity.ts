import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm'
//  @ManyToOne(() => User, user => user.photos) 多对一关系
// @OneToMany(() => Photo, photo => photo.user) 一对多关系
// 推荐表
@Entity({ name: 'zodiac' })
export class ZodiacEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  @Generated('uuid')
  public readonly id!: string | number

  @Column({ type: 'int', name: 'periods' })
  periods!: number

  @Column({ type: 'varchar', name: 'names' })
  names: string
}
