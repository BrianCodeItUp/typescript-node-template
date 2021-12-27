import { JsonController, Get, Body, Post } from 'routing-controllers'
import { Service } from 'typedi'
import { UserService } from '@services'
import { SignUpData } from '@dtos'

@Service()
@JsonController('/user')
class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  signup(@Body() userData: SignUpData) {

  }

  @Get('/signin')
  signIn() {
    return this.userService.getUser()
  }

}

export default UserController
