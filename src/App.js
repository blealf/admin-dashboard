import React, { useState } from 'react'
import './App.css';
import Alert from './components/Base/Components/Alert'
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
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <header className="App-header"></header>
        <button onClick={changeTheme}> Change Theme</button>
      </ThemeContext.Provider>
      <AlertWrapper>
        <Alert
          message={(
            <span>This is a text
              {' '}
              <a href="http://google.com" target="_blank" rel="noreferrer">
                this is a link
              </a>
            </span>
          )}
          type="primary"
          timeout={6000}
        />
        <Alert message="This is my sample alert" type="secondary" timeout={8000}/>
        <Alert message="This is my sample alert" type="success" timeout={10000}/>
        <Alert message="This is my sample alert" type="danger" timeout={12000}/>
        <Alert message="This is my sample alert" type="alert" timeout={14000}/>
        <Alert message="This is my sample alert" type="info" timeout={16000}/>
        <Alert message="This is my sample alert" type="light-alert"/>
        <Alert message="This is my sample alert" type="dark-alert" dismiss/>
      </AlertWrapper>
    </div>
  );
}

export default App;
