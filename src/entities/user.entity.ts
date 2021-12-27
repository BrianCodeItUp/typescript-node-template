import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: "user"})
class UserEntity { 
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

export default UserEntity