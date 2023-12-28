import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm'
//  @ManyToOne(() => User, user => user.photos) 多对一关系
// @OneToMany(() => Photo, photo => photo.user) 一对多关系
// 推荐表
@Entity({ name: 'colour' })
export class ColourEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  @Generated('uuid')
  public readonly id!: string | number

  @Column({ type: 'int', name: 'periods' })
  periods!: number

  @Column({ type: 'varchar', name: 'nums' })
  nums: string

  @Column({ type: 'varchar', name: 'main' })
  main: string | number

  @Column({ type: 'varchar', name: 'color1' })
  color1: string

  @Column({ type: 'varchar', name: 'color2' })
  color2: string

  @Column({ type: 'varchar', name: 'year' })
  year: string
}
