import sagaMiddleware from './middleware'

const isGenerator = (fn) => (
  fn && fn.constructor && fn.constructor.name === 'GeneratorFunction'
)

export const addEffect = effects => (name, handler) => {
  console.log('addEffect')
  effects[name] = handler
  // if generator, start saga
  if (isGenerator(handler)) {
    console.log('run ', name)
    sagaMiddleware.run(effects[name])
  }
}
