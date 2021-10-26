import React, { useState, useEffect, useRef, useContext, useCallBack } from 'react'
import styled from 'styled-components'
import { selectAlertColor } from '../../../utils/colors'
import { ThemeContext } from '../../../utils/theme'
// import { Transition } from 'react-transition-group';
import '../../../assets/css/base/main.scss'

const AlertButton = styled.button`
  clip-path: polygon(5% 0, 99% 0%, 95% 99%, 0% 99%);
  z-index: 99;
  display: block;
  position: relative;
  margin-bottom: 10px;
  right: -300px;
  padding: 12px 20px;
  ${'' /* border: 1px solid ${props => props.textColor}; */}
  border: none;
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
  border-radius: 3px;
  min-width: 250px;
  text-align: left;
  transition: right 300ms ease-out;
`;

const Content = styled.div`
  display: flex;
  gap: 10px;
`;
const Dismiss = styled.div`
  display: block;
  margin-left: auto;
  cursor: pointer;
`;
<style>

</style>
const Alert = ({ id, remove, show, message, type, dismiss, timeout }) => {
  const [alertColor, setAlertColor] = useState(selectAlertColor())
  const [duration] = useState(timeout || 6000)
  const [showAlert, setShowAlert] = useState(false)
  const context = useContext(ThemeContext)
  const alertRef = useRef()

  
  
  useEffect(() => {
    if (!show) return
    setShowAlert(show)
    selectColor(type)
    setTimeout(() => {
      alertRef.current.style.right = '10px'
    }, 50);
    setTimeout(() => {
      if (!dismiss) {
        close()
        setTimeout(() => {
          alertRef.current.style.display = 'none'
          setShowAlert(false)
        }, 300)
      }
    }, duration)
    return () => {console.log('unmounting...')}
  }, [show, type, dismiss, duration])
  
  const selectColor = (value) => {
    setAlertColor(selectAlertColor(value))
  }
  
  const close = () => {
    alertRef.current.style.right = `${-(alertRef.current.offsetWidth + 50)}px`
    if (dismiss) remove(id)
  }
  
  return (
    <>
      {
        (showAlert) ? (
          <AlertButton
            textColor={alertColor.textColor}
            bgColor={alertColor.bgColor}
            ref={alertRef}
            theme={context}
          >
            <Content>
              {message}
              {dismiss ? (<Dismiss onClick={close}>X</Dismiss>) : null}
            </Content>
          </AlertButton>
        ) : null
      }
    </>
  )
}

export default React.memo(Alert)
