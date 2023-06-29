import styled from 'styled-components'

const RootMainView = styled.main`
  display: flex;
  justify-content: center;
`

const MainContentView = styled.div`
  display: flex;
  width: 1024px;
  margin-top: 40px;
  border: 4px solid blue;
`
const RootNavMenuView = styled.aside`
  display: flex;
  flex-direction: column;
  width: 324px;
  border: 4px solid yellow;
  margin-right: 16px;
`

const RootContentView = styled.section`
  display: flex;
  width: 100%;
  width: 800px;
  border: 4px solid red;
  margin-left: 16px;
`

export { RootMainView, MainContentView, RootNavMenuView, RootContentView }
