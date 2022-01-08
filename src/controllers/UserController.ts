import { JsonController, Get, Body, Post, HttpCode, InternalServerError, Res, UseBefore } from 'routing-controllers'
import { Service } from 'typedi'
import passport from 'passport'
import { UserService } from '@services'
import { SignupDto, SigninDto } from '@dtos'

@Service()
@JsonController('/user')
class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  async signup(@Body() userData: SignupDto) {
    try {
      await this.userService.signup(userData)
      return {}
    } catch(e) {
      throw new InternalServerError(e.message)
    }
  }

  @Get('/signin')
  @UseBefore(passport.authenticate('local'))
  async signIn(signinDto: SigninDto) {
    console.log('authentication successfully')
  }

  // @Get('/me')
}

export default UserController
