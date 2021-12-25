import UserService from "../user.service";

describe('test', () => {
  test('Get all User Service', () => {
    const userService = new UserService()
    const users = userService.getAllUser()
    expect(users).not.toBeNull()
  })
})