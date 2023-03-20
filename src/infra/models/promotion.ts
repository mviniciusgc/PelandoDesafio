import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity('promotion')
export class Promotion {
  @PrimaryGeneratedColumn()
    promotion_id!: number
  
  @Column()
    title: string
  
  @Column()
    url: string

  @Column()
    img: string
  
  @Column('text')
    description: string
  
  @Column()
    price: string

  @CreateDateColumn({ name: 'created_at' })
    created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date
}
