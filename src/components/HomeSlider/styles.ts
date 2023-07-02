import styled from 'styled-components'
import { Background } from '../RootContainer/styles'

const HomeSliderContainer = styled.div`
  display: flex;

  img {
    height: 300px;
    ${Background}
    padding: 2px;
    border-radius: 5px;
  }
`

export { HomeSliderContainer }
