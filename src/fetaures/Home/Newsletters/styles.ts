import styled from 'styled-components'

const NewslettersContainer = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const NewsItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NewsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`

const NewsItemTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 24px;

  h3 {
    margin-left: 8px;
    color: white;
    max-width: 500px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;

    margin-right: 30px;
  }

  background-color: #03030473;
  -webkit-box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
  -moz-box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
  box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
`

const NewsItemDatePublished = styled.div`
  margin-right: 8px;
  color: white;
  span {
    font-size: 10px;
  }
  p {
    font-size: 12px;
  }
`

export { NewslettersContainer, NewsItemWrapper, NewsItemContainer, NewsItemTitle, NewsItemDatePublished }
