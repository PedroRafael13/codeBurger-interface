import React from "react"
import { Button, Container, ContainerItens, Input, Label, LoginImage, SingLink } from "./styles"
import { useForm } from "react-hook-form"

import Logo from "../../assets/login-image.svg"
import LoginImg from "../../assets/logo-image2.svg"

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);

  return (
    <Container>
      <LoginImage src={Logo} />

      <ContainerItens>
        <img src={LoginImg} />
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} >
          <Label>Email</Label>
          <Input type="email" {...register("email")} />

          <Label>Senha</Label>
          <Input type="password" {...register("password")} />

          <Button type="submit" >Entrar</Button>
        </form>
        <SingLink>Não tem conta? <a>Faça sua conta</a> </SingLink>
      </ContainerItens>
    </Container>
  )
}

export default Login