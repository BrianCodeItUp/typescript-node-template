import { createExpressServer, useContainer } from 'routing-controllers'
import { Container } from 'typedi'
import { UserController } from '@controllers'

useContainer(Container)

const app = createExpressServer({
  controllers: [UserController]
})

export default app