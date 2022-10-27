import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
> svg {
  transition: 200ms ease;
}
&:hover > svg {
  transform: rotate(20deg);
}
`

export default LogoBox;