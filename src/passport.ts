import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { getRepository } from 'typeorm'
import bcrypt from 'bcrypt'
import { User } from '@entities'

passport.use(new LocalStrategy(async function (username, password, done) {
  const UserRepo = getRepository(User)
  const user = await UserRepo.findOne({ name: username })
  if (!user) {
    done(null, false)
    return
  }
  const isCorrect = await bcrypt.compare(password, user.password)
  if (isCorrect) {
    done(null, user)
  } else {
    done(null, false, { message: 'Login failed' })
  }
}))

passport.serializeUser(function(user: any, done) {
  // 只將用戶 id 序列化存到 session 中
  done(null, user.id)
})


passport.deserializeUser(async function(id: number, done) {
  const UserRepo = getRepository(User)
  try {
    const user = await UserRepo.findOne({ id })
    if (!user) {
      done(null, false)
      return
    }
    done(null, user)
  } catch(e) {
    done(e)
  }
})
