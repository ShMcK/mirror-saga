import React from 'react'
import { actions, connect } from 'mirrorx'

const App = (props) => (
  <div>
    <h1>{props.count}</h1>
    {/* dispatch the actions */}
    <button onClick={() => actions.app.decrement()}>-</button>
    <button onClick={() => actions.app.increment()}>+</button>
    {/* dispatch the async action */}
    <button onClick={() => actions.app.incrementAsync()}>+ Async</button>
    {/* <button onClick={() => actions.app.genInc()}>+ Gen</button> */}
  </div>
)

const mapState = state => {
  return { count: state.app }
}

export default connect(mapState)(App)
