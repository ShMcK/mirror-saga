import React from 'react'
import createSagaMiddleware from 'redux-saga'
import mirror, { render, effects } from 'mirrorx'
import mirrorSaga from 'mirror-saga'

import appModel from './model'
import App from './App'

// configure mirror options
mirror.defaults(mirrorSaga())

mirror.model(appModel)

render(<App />, document.getElementById('root'))