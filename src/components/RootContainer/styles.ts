import styled, { css } from 'styled-components'

const RootMainView = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const MainContentView = styled.div`
  display: flex;
  width: 1024px;
  margin-top: 48px;
  margin-bottom: 180px;
`

const Background = css`
  background-color: #03030473;
  -webkit-box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
  -moz-box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
  box-shadow: 3px 3px 5px 1px rgba(42, 105, 187, 0.593);
`

const RootNavMenuView = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 274px;
  margin-right: 16px;
  border-radius: 5px;
  height: 100%;
  ${Background}
`

const RootContentView = styled.section`
  position: relative;
  padding: 24px;

  display: flex;
  flex-direction: column;
  width: 800px;
  border-radius: 5px;
  margin-left: 16px;
  ${Background}
`

export { RootMainView, MainContentView, RootNavMenuView, RootContentView, Background }
