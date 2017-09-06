import sagaMiddleware from './middleware'

const isGenerator = (fn) => (
  fn && fn.constructor && fn.constructor.name === 'GeneratorFunction'
)

export default effects => (name, handler) => {
  if (isGenerator(handler)) {
    effects[name] = (...p) => {
      sagaMiddleware.run(handler, ...p)
    }
  } else {
    effects[name] = handler
  }
}