import { NotFoundError, BadRequestError } from 'routing-controllers'
import { Service, Inject } from 'typedi'
import { Repository } from 'typeorm'
import bcrypt from 'bcrypt'
import { SignupDto, SigninDto } from '@dtos'
import { logger } from '@utils'
import { User } from '@entities'

@Service()
class UserService { 
  constructor(@Inject('userRepository') private userRepo: Repository<User>) {}

  async signup(signupDto: SignupDto) {
    const hashedPassword = await bcrypt.hash(signupDto.password, 10)
    try {
      await this.userRepo.insert({
        name: signupDto.username,
        email: signupDto.email,
        password: hashedPassword
      })
    } catch(e) {
      logger.error(`UserServer signup ${JSON.stringify(e)}`)
      throw e
    }
  }

  async signin(signinDto: SigninDto) {
    const user = await this.userRepo.findOne({ email: signinDto.email })
    if (user) {
      const isCorrect = await bcrypt.compare(signinDto.password, user.password)
      if (isCorrect) {
        return user
      }
      throw new BadRequestError('Signin Fail')
    }
    throw new NotFoundError('User Not Found')
  }
}

export default UserService