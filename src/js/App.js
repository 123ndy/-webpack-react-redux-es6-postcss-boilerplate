import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import store from './store'
import Container from './components/Container'
import Home from './components/Home'
import About from './components/About'

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Container}>
        <IndexRoute component={Home} />
        <Route path='/about' component={About} />
      </Route>
    </Router>
  </Provider>),
  document.getElementById('react-container')
)
