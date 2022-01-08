import express from 'express'
import { createExpressServer, useContainer } from 'routing-controllers'
import { Container } from 'typedi'
import { getRepository } from 'typeorm'
import session from 'express-session'
import passport from 'passport'
import { UserController } from '@controllers'
import { loggingMiddleware } from '@middlewares'
import { entities } from '@entities'
import { logger } from '@utils'
import './passport'

const PORT = process.env.PORT || 3000

function startServer () {
  useContainer(Container)
  // Register repository with DI container
  entities.forEach(entity => {
    const repository = getRepository(entity.entity)
    Container.set(`${entity.name}Repository`, repository)
  })
  
  const app = createExpressServer({
    controllers: [UserController],
  })
  
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(session({
    secret: 'mysecrt',
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(loggingMiddleware)
  app.listen(PORT, () => logger.info(`Server is listening on PORT ${PORT}`))
}


export default startServer
