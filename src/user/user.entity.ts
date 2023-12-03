import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  @Generated('uuid')
  public readonly id!: number

  @Column({ type: 'varchar', name: 'name', comment: '用户名' })
  name: string

  @Column({ type: 'varchar', name: 'password', comment: '密码' })
  password: string

  @Column({ type: 'varchar', name: 'roles' })
  roles: string
}
