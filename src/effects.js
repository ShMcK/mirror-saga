import sagaMiddleware from './middleware'

const isGenerator = (fn) => (
  fn && fn.constructor && fn.constructor.name === 'GeneratorFunction'
)

export default effects => (name, handler) => {
  if (isGenerator(handler)) {
    // trigger saga middleware with 
    effects[name] = (...p) => {
      sagaMiddleware.run(handler, ...p)
    }
  } else {
    // add function effect
    effects[name] = handler
  }
}