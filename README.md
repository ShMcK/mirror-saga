# Mirror Saga

Adds [Redux Sagas](https://github.com/redux-saga/redux-saga) to [Mirror.js](https://github.com/mirrorjs/mirror).

> NO LONGER MAINTAINED. MAY HAVE ISSUES.

## Example

See a [basic counter example](examples/basic).

## Setup

Install dependencies.

```
npm install mirror-saga redux-saga
```

In your mirror setup, apply mirrorSaga.

```js
import mirrorSaga from 'mirror-saga'

mirror.defaults(mirrorSaga())

// OR optionally pass in mirror default options
// mirror.defaults(mirrorSaga(options))
```

## Use

Add model effects as generators (`*function`) and they will be treated as sagas by middleware.

```js
// import saga effects from 'redux-saga' directly
import { delay } from 'redux-saga'

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

Effects that are not generators will run normally using `async/await`.

```js
import { call, take } from 'redux-saga'

const asyncDelay = (time) => new Promise((resolve, reject) => (
  setTimeout(() => resolve(), time))
)

export default {
  name: 'app',
  effects: {
    // runs as async function
    async effectExample() {
      await asyncDelay(1000)
      actions.app.increment()
    },
    // runs as saga
    *sagaExample() {
      yield take('authenticated')
      yield call(api, params)
      yield actions.app.increment()
    },
  }
}
```
