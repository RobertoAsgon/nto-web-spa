import styled from 'styled-components'

const TopPlayersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
`

const PlayerItemContainer = styled.div`
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

const PlayerItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  ${PlayerItemContainer}:hover {
    cursor: pointer;
    background-color: #02172c59;

    background-color: #03030473;
    -webkit-box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
    -moz-box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
    box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
  }
`

const PlayerItemDescription = styled.div`
  display: flex;
  color: white;
  margin-top: 4px;

  p:last-child {
    margin-left: 4px;
  }
`

export { TopPlayersContainer, PlayerItemContainer, PlayerItemWrapper, PlayerItemDescription }
