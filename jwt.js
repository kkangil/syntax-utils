import jwt from 'jsonwebtoken'

export const createToken = (payload = {}) => {
  return jwt.sign(payload, 'privateKey', { algorithm: 'HS256' })
}

export const validateToken = (options = {}) => {
  const {
    token
  } = options

  return new Promise((resolve, reject) => {
    jwt.verify(token, 'privateKey', (err, payload) => {
      if (err) {
        reject(err)
      } else {
        resolve(payload)
      }
    })
  })
}

export const parseJwt = token => {
  const decoded = jwt.decode(token, { complete: true })

  return decoded.payload
}
