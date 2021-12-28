import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
class User { 
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column({ type: 'varchar', length: 255 })
  password: string
  
  @CreateDateColumn()
  createdDate: Date

  @UpdateDateColumn()
  updatedDate: Date
}

export default User