# Mirror Saga

Adds [Redux Sagas](https://github.com/redux-saga/redux-saga) to [Mirror.js](https://github.com/mirrorjs/mirror).

## Setup

```js
import mirrorSaga from 'mirror-saga'

mirror.defaults(mirrorSaga())

// OR optionally pass in mirror default options
// mirror.defaults(mirrorSaga(options))
```

## Use

Add model effects as generators (`*function`) and they will be treated as sagas by middleware.

```js
mirror.model({
  name: 'app',
  // ...
  effects: {
    *runASaga(payload) {
      yield delay(1000)
      yield actions.app.doSomething(payload)
    },
  }
})
```

Effects that are not generators will run normally.

```js
export default {
  name: 'app',
  effects: {
    // runs as async function
    async incrementAsync() {
      await asyncDelay(1000)
      actions.app.increment()
    },
    // runs as saga
    *incrementAsyncSaga() {
      yield delay(1000)
      yield actions.app.increment()
    },
  }
}
```