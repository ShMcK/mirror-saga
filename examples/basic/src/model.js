import { actions } from 'mirrorx'

const delay = (time) => new Promise((resolve, reject) => (
  setTimeout(() => resolve(), time))
)

export default {
  name: 'app',
  initialState: 0,
  reducers: {
    increment(state) { return state + 1 },
    decrement(state) { return state + 1 },
  },
  effects: {
    async incrementAsync() {
      await delay(1000)
      actions.app.increment()
    },
    // *genInc() {
    //   yield console.log('increment')
    //   actions.app.increment()
    // }
  }
}
