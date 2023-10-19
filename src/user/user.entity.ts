import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'varchar', name: 'roles' })
  roles: string;

  @Column({ type: 'varchar', name: 'user' })
  user: string;

  @Column({ type: 'varchar', name: 'password' })
  password: string;
}
