import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm'
//  @ManyToOne(() => User, user => user.photos) 多对一关系
// @OneToMany(() => Photo, photo => photo.user) 一对多关系
// 平特1肖&&头尾数&&单双数
@Entity({ name: 'zodiac' })
export class ZodiacEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  @Generated('uuid')
  public readonly id!: string | number

  @Column({ type: 'int', name: 'periods' })
  periods!: number

  @Column({ type: 'varchar', name: 'year' })
  year: string
  //  单码
  @Column({ type: 'varchar', name: 'single' })
  single: string
  // 尾数
  @Column({ type: 'varchar', name: 'mantissa' })
  mantissa: string
}
