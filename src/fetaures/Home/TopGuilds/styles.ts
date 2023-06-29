import styled from 'styled-components'

const TopGuildsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const GuildItemWrapper = styled.div`
  width: 100%;
  display: flex;
  border: 2px solid green;
  justify-content: space-around;
`

const GuildItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }
`

export { TopGuildsContainer, GuildItemContainer, GuildItemWrapper }
