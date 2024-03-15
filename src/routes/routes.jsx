import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Cart from '../container/Cart'
import Home from '../container/Home'
import Login from '../container/Login/index'
import Products from '../container/Products'
import Register from '../container/Register/index'
import PrivateRoutes from './private-routes'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login"></Route>
        <Route component={Register} path="/cadastro"></Route>
        <PrivateRoutes component={Home} path="/"></PrivateRoutes>
        <PrivateRoutes component={Products} path="/produtos"></PrivateRoutes>
        <PrivateRoutes component={Cart} path={"/carrinho"} ></PrivateRoutes>
      </Switch>
    </Router>
  )
}

export default Routes