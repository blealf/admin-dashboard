import React, { useState } from 'react'
import './App.css';
import Alert from './components/Base/Components/Alert'
import Button from './components/Base/Components/Button'
import Card from './components/Base/Components/Card'
import styled from 'styled-components'
import { themes, ThemeContext } from './utils/theme'
// import { BsCheckAll, BsFillBellFill, BsFillCameraFill } from 'react-icons/bs'

const AlertWrapper = styled.div`
  display: block;
  position: absolute;
  top: 20px;
  right: 10px;
  overflow: hidden;
  white-space:nowrap;
  padding: 10px;
`;

const App = () => {

  const [theme, setTheme] = useState(themes.light)

  const changeTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  return (
    <div className="App" style={{ padding: '10px'}}>
      <ThemeContext.Provider value={theme}>
        <header className="App-header"></header>
        <button onClick={changeTheme}> Change Theme</button>
        <AlertWrapper>
          <Alert message="something here" dismiss/>
        </AlertWrapper>
        <Button type="primary">Primary</Button>
        <Card
          title="card title"
          header="Card Subtitle"
          image="https://themesbrand.com/minia/layouts/assets/images/small/img-5.jpg"
          footer="THis is the Footer"
        >
          <h4>Card Subtitle</h4>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Integer posuere erat a ante.
        </Card>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
