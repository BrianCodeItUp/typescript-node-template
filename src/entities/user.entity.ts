import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

export enum Gender {
  male = 'male',
  female = 'female'
}

@Entity({ name: "user"})
class UserEntity { 
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column({ unique: true })
  email: string

  @Column({ type: 'enum', enum: Gender })
  gender: Gender
}

export default UserEntity