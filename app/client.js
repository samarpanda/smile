import React from 'react'
import ReactDOM from 'react-dom'
import Page from './handlers/Root'
import { Router, Route, browserHistory, hashHistory } from 'react-router'

import rconfig from './routes'

ReactDOM.render(
  <Router history={browserHistory} routes={rconfig()} />, document.getElementById('app')
)