import styled from 'styled-components'

const NewslettersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const NewsItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid green;
`

const NewsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export { NewslettersContainer, NewsItemWrapper, NewsItemContainer }
