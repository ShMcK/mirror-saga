import { actions } from 'mirrorx'
import { delay } from 'redux-saga'

const asyncDelay = (time) => new Promise((resolve, reject) => (
  setTimeout(() => resolve(), time))
)

export default {
  name: 'app',
  initialState: 0,
  reducers: {
    increment(state) { return state + 1 },
    decrement(state) { return state - 1 },
    set(state, value) { return value },
  },
  effects: {
    async incrementAsync() {
      await asyncDelay(1000)
      actions.app.increment()
    },
    *incrementAsyncSaga() {
      yield delay(1000)
      yield actions.app.increment()
    },
    *setState(value) {
      yield actions.app.set(value)
    }
  }
}