import sagaMiddleware from './middleware'
import addEffect from './effects'

export default (options = {}) => {
  const middlewares = options.middlewares || []
  // overwrite defaults
  return Object.assign(options, {
    middlewares: middlewares.concat([sagaMiddleware]),
    addEffect,
  })
}