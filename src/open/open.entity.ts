import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm'

@Entity({ name: 'open' })
export class OpenEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  @Generated('uuid')
  public readonly id: string

  @Column({ type: 'int', name: 'periods' }) // 期数
  periods: number

  @Column({ type: 'varchar', name: 'particular' }) // 特马
  particular: string
  @Column({ type: 'varchar', name: 'particular_property' }) // 属性
  particular_property: string
  @Column({ type: 'varchar', name: 'particular_color' }) // 颜色
  particular_color: string

  @Column({ type: 'varchar', name: 'ordinary1' }) // 平码
  ordinary1: string
  @Column({ type: 'varchar', name: 'ordinary1_property' }) // 属性
  ordinary1_property: string
  @Column({ type: 'varchar', name: 'ordinary1_color' }) // 颜色
  ordinary1_color: string

  @Column({ type: 'varchar', name: 'ordinary2_property' })
  ordinary2_property: string
  @Column({ type: 'varchar', name: 'ordinary2' })
  ordinary2: string
  @Column({ type: 'varchar', name: 'ordinary2_color' }) // 颜色
  ordinary2_color: string

  @Column({ type: 'varchar', name: 'ordinary3' })
  ordinary3: string
  @Column({ type: 'varchar', name: 'ordinary3_property' })
  ordinary3_property: string
  @Column({ type: 'varchar', name: 'ordinary3_color' })
  ordinary3_color: string

  @Column({ type: 'varchar', name: 'ordinary4' })
  ordinary4: string
  @Column({ type: 'varchar', name: 'ordinary4_property' })
  ordinary4_property: string
  @Column({ type: 'varchar', name: 'ordinary4_color' })
  ordinary4_color: string

  @Column({ type: 'varchar', name: 'ordinary5' })
  ordinary5: string
  @Column({ type: 'varchar', name: 'ordinary5_property' })
  ordinary5_property: string
  @Column({ type: 'varchar', name: 'ordinary5_color' })
  ordinary5_color: string

  @Column({ type: 'varchar', name: 'ordinary6' })
  ordinary6: string
  @Column({ type: 'varchar', name: 'ordinary6_property' })
  ordinary6_property: string
  @Column({ type: 'varchar', name: 'ordinary6_color' })
  ordinary6_color: string
}
