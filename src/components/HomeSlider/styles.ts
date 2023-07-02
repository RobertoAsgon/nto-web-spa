import styled from 'styled-components'
import { Background } from '../RootContainer/styles'

const HomeSliderContainer = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;

  img {
    position: relative;
    height: 150px;
    ${Background}
    padding: 2px;
    border-radius: 5px;
  }
`

export { HomeSliderContainer }
