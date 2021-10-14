import React, { useState } from 'react'
import './App.css';
// import Alert from './components/Base/Components/Alert'
import Button from './components/Base/Components/Button'
import styled from 'styled-components'
import { themes, ThemeContext } from './utils/theme'

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
      </ThemeContext.Provider>
      <AlertWrapper></AlertWrapper>
      <Button type="primary" >Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="success" >Success</Button>
      <Button type="info" >Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
    </div>
  );
}

export default App;
