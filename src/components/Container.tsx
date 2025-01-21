import { ReactNode, FC } from 'react'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  width: min(100% - 40px, 1200px);
  margin-inline: auto;
`

interface ContainerProps {
  children: ReactNode
  className?: string
}
const Container: FC<ContainerProps> = ({ children, className }) => (
  <ContainerStyled className={className}>{children}</ContainerStyled>
)

export default Container
