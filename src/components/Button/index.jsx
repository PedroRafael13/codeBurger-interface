import React from "react"
import { ContainerButton } from "./style"
import PropTypes from "react"

export function Button({ children, ...rest }) {
  return (
    <ContainerButton {...rest} >
      {children}
    </ContainerButton>
  )
}

Button.propTypes = {
  children: PropTypes.string
}