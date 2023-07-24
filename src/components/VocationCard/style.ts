import { styled } from 'styled-components'

interface VocationCardContainerProps {
  $isSelectedCard: boolean
}

const VocationCardContainer = styled.div<VocationCardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 8px 4px 8px;
  border-radius: 5px;

  h3 {
    color: #00ff00;
    margin-bottom: 4px;
  }

  img {
    width: 75px;
    height: 75px;
  }
`

export { VocationCardContainer }
