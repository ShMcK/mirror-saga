import React from 'react'
import createSagaMiddleware from 'redux-saga'
import mirror, { render } from 'mirrorx'
// import mirrorSaga from 'mirror-saga'

import appModel from './model'
import App from './App'

// create middleware
// const sagaMiddleware = createSagaMiddleware()

// configure mirror options
// mirror.defaults(mirrorSaga())

mirror.model(appModel)

render(<App />, document.getElementById('root'))
