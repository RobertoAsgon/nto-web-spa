import styled from 'styled-components'

const TopPlayersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const PlayerItemWrapper = styled.div`
  width: 100%;
  display: flex;
  border: 2px solid green;
  justify-content: space-around;
`

const PlayerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 75px;
    height: 75px;
  }
`

export { TopPlayersContainer, PlayerItemContainer, PlayerItemWrapper }
