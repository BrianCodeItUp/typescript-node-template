import { Service } from 'typedi'

@Service()
class UserService { 
  getAllUser() {
    return [{ name: 'Brian', age: 28}, { name: 'John', age: 30}, { name: 'Amy', age: 22}]
  }
}

export default UserService