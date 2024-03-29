import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 60px rgba(57, 57, 57, 0.3);
  border-radius:30px;
  display:flex;
  gap:32px;
  padding:26px;
  width: max-content;

  div {
    display: flex;
    flex-direction:center;
    justify-content:space-between;
  }
`

export const ImageProduct = styled.img`
  width:150px;
  border-radius:10px;
`

export const ProductName = styled.p`
  font-style:normal;
  font-weight:700;
  font-size:16px;
  line-height:19px;

  color:#000000;
`

export const ProductPrice = styled.p`
  font-style:normal;
  font-weight:500;
  font-size:10px;
  line-height:21px;
  margin-top:30px;

  color:#000000;
`