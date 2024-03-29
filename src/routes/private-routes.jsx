import { React } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from "prop-types"

function privateRoutes({ component, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Redirect to='/login' />
  }

  return <Route {...rest} component={component} />
}

export default privateRoutes

privateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}