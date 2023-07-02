import styled from 'styled-components'

const TopGuildsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`
const GuildItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 6px 12px 6px 12px;
  border-radius: 5px;

  h3 {
    color: white;
    margin-bottom: 4px;
  }

  img {
    width: 100px;
    height: 100px;
  }
`

const GuildItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  ${GuildItemContainer}:hover {
    cursor: pointer;
    background-color: #02172c59;

    background-color: #03030473;
    -webkit-box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
    -moz-box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
    box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
  }
`

const GuildItemDescription = styled.div`
  display: flex;
  color: white;
  align-items: center;

  margin-top: 4px;

  p:first-child {
    margin-right: 4px;
  }
`

export { TopGuildsContainer, GuildItemContainer, GuildItemWrapper, GuildItemDescription }
