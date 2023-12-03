import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm'
// 推荐表
@Entity({ name: 'recommend' })
export class RecommendEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  @Generated('uuid')
  public readonly id: string
  @Column({ type: 'int', name: 'periods' })
  periods: number

  @Column({ type: 'varchar', name: 'nums1' })
  nums1: string

  @Column({ type: 'varchar', name: 'nums2' })
  nums2: string

  @Column({ type: 'varchar', name: 'nums3' })
  nums3: string
}
