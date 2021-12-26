import { Service } from 'typedi'
import { UserRepository } from '@repository'

@Service()
class UserService { 
  constructor(private userRepo: UserRepository) {}
  getAllUser() {
    return [{ name: 'Brian', age: 28}, { name: 'John', age: 30}, { name: 'Amy', age: 22}]
  }

  getUser() {
    return this.userRepo.findUserByName()
  }
}

export default UserService