import sagaMiddleware from './middleware'
import { addEffect } from './effects'

const mirrorSaga = (options = { middlewares: [] }) =>
  Object.assign(options, {
    middlewares: options.middlewares.concat([sagaMiddleware]),
    addEffect,
  })

export default mirrorSaga
