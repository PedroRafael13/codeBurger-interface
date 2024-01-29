import React from "react"
import * as Yup from 'yup'
import { Container, ContainerItens, Input, Label, LoginImage, SingLink, ErrorMessage } from "./styles"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'

import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import Logo from "../../assets/register-image.svg"
import LoginImg from "../../assets/logo-image2.svg"
import Button from "../../components/Button"

function Register() {

  const schema = Yup.object().shape({
    name: Yup.string().required("O seu nome é obrigatório"),
    email: Yup.string().email("O e-mail é invalido").required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatório").min(6, "A senha deve ter no minimo 6 caracteristicas"),
    confirmPassword: Yup.string().required("A senha é obrigatório").oneOf([Yup.ref('password')], "As senhas devem ser iguais"),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post('users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      }, {
        validateStatus: () => true
      })

      if (status === 200 || status === 201) {
        toast.promise('Cadastro criado com sucesso!')
      }
      else if (status === 409) {
        toast.error('O e-mail já esta registrado, faça login')
      }
      else {
        throw new Error()
      }
    } catch (errors) {
      toast.error('O sistema está fora do ar, tente novamente mais tarde')
    }
  }

  return (
    <Container>
      <LoginImage src={Logo} />

      <ContainerItens>
        <img src={LoginImg} />
        <h1>Cadrastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)} >

          <Label error={errors.name?.message}>Nome</Label>
          <Input type="text" {...register("name")} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input type="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>Criar Conta</Button>
        </form>
        <SingLink>Já tem conta? <Link style={{ color: '#FFFf' }} to='/Login'>Entrar</Link> </SingLink>
      </ContainerItens>
    </Container>
  )
}

export default Register