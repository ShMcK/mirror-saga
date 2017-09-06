import sagaMiddleware from './middleware'
import { addEffect } from './effects'

const mirrorSaga = (options = {}) => {

  // setup saga middleware
  const middlewares = options.middlewares || []
  return Object.assign(options, {
    middlewares: middlewares.concat([sagaMiddleware]),
    addEffect,
  })
}

export default mirrorSaga