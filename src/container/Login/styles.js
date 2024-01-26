import { styled } from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #373737;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 92%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 92%;
  padding: 0 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form{
    display: flex;
    flex-direction:column ;
  }

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 10%;
  } 
`

export const Label = styled.p`
  font-style:normal;
  font-weight:700;
  font-size:12px;
  line-height:14px;
  color:#ffffff;
  margin-top:28px;
  margin-bottom:25px;
`

export const Input = styled.input`
   width: 24rem;
    height: 2rem;
    background: #ffffff;
    box-shadow:3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius:5px;
    border:${props => (props.error ? 'border: 2px solid #CC1717' : 'none')};
    padding-left:10px;
`

export const SingLink = styled.p`
  font-style:normal;
  font-weight:500;
  font-size:14px;
  line-height:16px;
  color: #ffffff;

  a{
    cursor: pointer;
    text-decoration:underline;
  }
`

export const ErrorMessage = styled.p`
  font-style:normal;
  font-weight:normal;
  font-size:14px;
  line-height:16px;
  color:#cc1717;
  margin-top:2px;
`