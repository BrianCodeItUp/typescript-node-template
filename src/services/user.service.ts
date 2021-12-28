import { Service, Inject } from 'typedi'
import { Repository } from 'typeorm'
import bcrypt from 'bcrypt'
import { SignUpData } from '@dtos'
import { logger } from '@utils'
import { User } from '@entities'

@Service()
class UserService { 
  constructor(@Inject('userRepository') private userRepo: Repository<User>) {}

  async signup(signupData: SignUpData) {
    const hashedPassword = await bcrypt.hash(signupData.password, 10)
    try {
      await this.userRepo.insert({
        name: signupData.username,
        email: signupData.email,
        password: hashedPassword
      })
    } catch(e) {
      logger.error(`UserServer signup ${JSON.stringify(e)}`)
      throw e
    }
  }

  getAllUser() {
    return [{ name: 'Brian', age: 28}, { name: 'John', age: 30}, { name: 'Amy', age: 22}]
  }
}

export default UserService