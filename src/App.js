import React, { useState, useEffect } from 'react'
import { v4 as uuidV4 } from 'uuid'
import './App.css';
import Alert from './components/Base/Components/Alert'
import Button from './components/Base/Components/Button'
import Card from './components/Base/Components/Card'
import styled from 'styled-components'
import { themes, ThemeContext } from './utils/theme'
import { AlertContext } from './utils/toasterAlert'
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
  const [alertArray, setAlertArray] = useState([])

  const changeTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  const triggerAlert = (data, show) => {
    const removeAlert = (id) => {
      setAlertArray(alertArray.filter(alert => alert.id !== id))
      console.log(alertArray.filter(alert => alert.id !== id))
    }
    // const remove()
    const id = `${uuidV4()} ${Date.now()}`
    setAlertArray([...alertArray,
      {
        id,
        alert: <Alert id={id} key={id} {...data} show={show} remove={removeAlert}></Alert>
      }
    ])
  }

  return (
    <div className="App" style={{ padding: '10px'}}>
      <ThemeContext.Provider value={theme}>
        <AlertContext.Provider value={{ toaster: triggerAlert }}>
          <header className="App-header"></header>
          <button onClick={changeTheme}> Change Theme</button>
          <button onClick={() => triggerAlert(
            { message: "Well, i think you got it all wrong and it is so true", type: "danger", dismiss: true },
            true
          )}> Show Alert</button>
          <button onClick={() => triggerAlert(
            { message: "Well, i think you got it all and it is so true", type: "success", dismiss: true },
            true
          )}> Show Alert</button>
          <button onClick={() => triggerAlert(
            { message: "Well, i think may have it all wrong and it is so true", type: "alert", dismiss: true },
            true
          )}> Show Alert</button>
          <Button type="primary">Primary</Button>
          <AlertWrapper id="toasterContainer">
            {alertArray.map(item => item.alert)}
          </AlertWrapper>
        </AlertContext.Provider>
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
