import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface WrapProps {
  children: ReactNode
}

function Wrap({
  children
}: WrapProps) {
  return (
    <WrapComponent>
      {children}
    </WrapComponent>
  )
}


const WrapComponent = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default Wrap