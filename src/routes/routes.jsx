import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from '../container/Login/index'
import Register from '../container/Register/index'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login"></Route>
        <Route component={Register} path="/cadastro"></Route>
      </Switch>
    </Router>
  )
}

export default Routes