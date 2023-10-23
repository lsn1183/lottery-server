import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity({ name: 'open' })
export class OpenEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  @Generated('uuid')
  public readonly id!: number;

  @Column({ type: 'varchar', name: 'periods' })
  periods: string;

  @Column({ type: 'varchar', name: 'particular' }) // 特马
  particular: string;

  @Column({ type: 'varchar', name: 'ordinary1' }) // 平码
  ordinary1: string;

  @Column({ type: 'varchar', name: 'ordinary2' })
  ordinary2: string;

  @Column({ type: 'varchar', name: 'ordinary3' })
  ordinary3: string;

  @Column({ type: 'varchar', name: 'ordinary4' })
  ordinary4: string;

  @Column({ type: 'varchar', name: 'ordinary5' })
  ordinary5: string;

  @Column({ type: 'varchar', name: 'ordinary6' })
  ordinary6: string;
}
