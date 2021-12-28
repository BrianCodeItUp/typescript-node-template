import { JsonController, Get, Body, Post, Res, HttpCode, InternalServerError } from 'routing-controllers'
import { Response } from 'express'
import { Service } from 'typedi'
import { UserService } from '@services'
import { SignUpData } from '@dtos'

@Service()
@JsonController('/user')
class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  @HttpCode(201)
  async signup(@Body() userData: SignUpData, @Res() res: Response) {
    try {
      await this.userService.signup(userData)
      return {}
    } catch(e) {
      throw new InternalServerError(e.message)
    }
  }

  @Get('/signin')
  signIn() {
    // return this.userService.getUser()
  }

}

export default UserController
