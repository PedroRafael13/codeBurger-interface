import React from 'react'
import * as Yup from 'yup'
import { Container, ContainerItens, Input, Label, LoginImage, SingLink, ErrorMessage } from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import Logo from '../../assets/login-image.svg'
import LoginImg from '../../assets/logo-image2.svg'
import Button from '../../components/Button'

function Login() {
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email("O e-mail é invalido").required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatório").min(6, "A senha deve ter no minimo 6 caracteristicas"),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Tudo certo, seja bem-vindo 👌',
        error: 'Verfique seu e-mail e senha 🤯'
      }
    )

    putUserData(data)
  }

  return (
    <Container>
      <LoginImage src={Logo} />

      <ContainerItens>
        <img src={LoginImg} />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)} >
          <Label>Email</Label>
          <Input type="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }} >Entrar</Button>
        </form>
        <SingLink>Não tem conta? <a>Faça sua conta</a> </SingLink>
      </ContainerItens>
    </Container>
  )
}

export default Login