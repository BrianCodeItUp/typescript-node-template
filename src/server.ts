import express from 'express'
import { createExpressServer, useContainer } from 'routing-controllers'
import { Container } from 'typedi'
import { UserController } from '@controllers'
import { loggingMiddleware } from '@middlewares'

useContainer(Container)

const app = createExpressServer({
  controllers: [UserController],
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(loggingMiddleware)

export default app
