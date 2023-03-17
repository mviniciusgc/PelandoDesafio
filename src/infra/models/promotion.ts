import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp
} from 'typeorm'

@Entity('promotion')
export class Promotion {
  @PrimaryGeneratedColumn()
    id!: number
  
  @Column()
    title: string
  
  @Column()
    url: string
  
  @Column('text')
    description: string
  
  @Column()
    price: string

  @CreateDateColumn({ name: 'created_at' })
    created_at: Timestamp

  @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Timestamp
}
