import React from "react"
import { ContainerButton } from "./style"
import PropTypes from "react"

function Button({ children, ...rest }) {
  return (
    <ContainerButton {...rest} >
      {children}
    </ContainerButton>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}