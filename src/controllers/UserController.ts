import { JsonController, Get, Post, Controller } from 'routing-controllers'
import { Service } from 'typedi'
import { UserService } from '@services'

@Service()
@JsonController('/user')
class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUser () {
    return this.userService.getUser()
  }
}

export default UserController
