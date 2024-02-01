import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from '../container/Home'
import Login from '../container/Login/index'
import Register from '../container/Register/index'
import PrivateRoutes from './private-routes'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login"></Route>
        <Route component={Register} path="/cadastro"></Route>
        <PrivateRoutes exact component={Home} path="/"></PrivateRoutes>
      </Switch>
    </Router>
  )
}

export default Routes