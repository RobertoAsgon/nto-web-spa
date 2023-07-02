import styled, { css } from 'styled-components'

const RootMainView = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const HeaderContentView = styled.header`
  display: flex;
  width: 1072px;
  height: 300px;
  margin: 32px 0 44px 0;
  
`

const MainContentView = styled.div`
  display: flex;
  width: 1024px;
  margin-bottom: 180px;
`

const Background = css`
  background-color: #03030473;
  -webkit-box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
  -moz-box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
  box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
`

const RootNavMenuView = styled.aside`
  display: flex;
  flex-direction: column;
  width: 324px;
  margin-right: 16px;
  border-radius: 5px;

  ${Background}
`

const RootContentView = styled.section`
  display: flex;
  width: 100%;
  width: 800px;
  border-radius: 5px;
  margin-left: 16px;

  ${Background}
`

export { RootMainView, HeaderContentView, MainContentView, RootNavMenuView, RootContentView, Background }
