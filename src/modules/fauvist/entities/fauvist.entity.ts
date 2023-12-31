import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm'
//  @ManyToOne(() => User, user => user.photos) 多对一关系
// @OneToMany(() => Photo, photo => photo.user) 一对多关系
// 推荐表
@Entity({ name: 'fauvist' })
export class FauvistEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  @Generated('uuid')
  public readonly id!: string | number

  @Column({ type: 'int', name: 'periods' })
  periods!: number

  @Column({ type: 'varchar', name: 'year' })
  year: string

  // 野肖
  @Column({ type: 'varchar', name: 'beast' })
  beast: string

  // 家禽肖
  @Column({ type: 'varchar', name: 'birds' })
  birds: string

  // 吉肖
  @Column({ type: 'varchar', name: 'propitious' })
  propitious: string

  // 凶肖
  @Column({ type: 'varchar', name: 'fierce' })
  fierce: string

  // 天肖
  @Column({ type: 'varchar', name: 'sky' })
  sky: string

  // 地肖
  @Column({ type: 'varchar', name: 'land' })
  land: string

  // 阴肖
  @Column({ type: 'varchar', name: 'cloudy' })
  cloudy: string

  // 阳肖
  @Column({ type: 'varchar', name: 'male' })
  male: string

  // 男肖
  @Column({ type: 'varchar', name: 'man' })
  man: string

  // 男肖
  @Column({ type: 'varchar', name: 'woman' })
  woman: string
  // 家野推荐
  @Column({ type: 'varchar', name: 'main' })
  main: string
}
