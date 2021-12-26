import {EntityRepository, Repository} from "typeorm";
import { Service} from 'typedi'
import { UserEntity } from "@entities";

@Service()
@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  findUserByName() {
    return { name: 'Brian', age: 28 }
  }
}

export default UserRepository