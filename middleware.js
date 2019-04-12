const { validateToken } = require('./jwt')
const config = require('../config')

export const authenticate = async (req, res, next) => {
  const token = req.get(config.header.token)

  try {
    if (token) {
      req.user = await validateToken({ token })
      next()
    } else {
      throw new Error('로그인 후 이용해주세요.')
    }
  } catch (err) {
    err.status = 401
    next(err)
  }
}

export const checkAuthenticate = async (req, res, next) => {
  const token = req.get(config.header.token)

  try {
    if (token) {
      req.user = await validateToken({ token })
      next()
    } else {
      req.user = null
      next()
    }
  } catch (err) {
    err.status = 401
    next(err)
  }
}

export const adminAuthenticate = async (req, res, next) => {
  const token = req.get(config.header.token)

  try {
    if (token) {
      req.user = await validateToken({ token })

      if (req.user.isAdmin) {
        next()
      } else {
        throw new Error('관리자만 접근 가능합니다.')
      }
    } else {
      throw new Error('관리자만 접근 가능합니다.')
    }
  } catch (err) {
    err.status = 401
    next(err)
  }
}