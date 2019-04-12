import bcrypt from 'bcrypt-nodejs'
import passport from 'passport'
import passportLocal from 'passport-local'

import models from '../models'

const LocalStrategy = passportLocal.Strategy

export default () => {
  passport.use(new LocalStrategy({ usernameField: 'email' },
    (email, password, done) => {
      models.User.findOne({
        where: {
          email,
        }
      })
        .then(_user => {
          if (_user) {
            const valid = bcrypt.compareSync(password, _user.password)
            if (!valid) {
              return done(null, false, { message: '비밀번호를 확인해주세요.' })
            } else {
              const user = _user.get()
              delete user.password
              return done(null, user)
            }
          } else {
            return done(null, false, { message: '가입되어 있지 않은 이메일입니다.' })
          }
        })
        .catch(err => {
          console.error(err)
          done(err)
        })
    }
  ))
}
