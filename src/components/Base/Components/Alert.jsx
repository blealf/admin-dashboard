import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../../utils/theme'
// import { Transition } from 'react-transition-group';
import '../../../assets/css/base/main.scss'

const AlertButton = styled.button`
  z-index: 99;
  display: block;
  position: relative;
  margin-bottom: 10px;
  right: -300px;
  padding: 12px;
  border: 1px solid ${props => props.textColor};
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
  border-radius: 3px;
  min-width: 250px;
  text-align: left;
  transition: right 300ms ease-out;
`;

const Content = styled.div`
  display: flex;
`;
const Dismiss = styled.div`
  display: block;
  margin-left: auto;
  cursor: pointer;
`;
<style>

</style>
const Alert = ({ message, type, dismiss, timeout }) => {

  const [textColor, setTextColor] = useState()
  const [bgColor, setBgColor] = useState()
  const [duration] = useState(timeout || 6000)
  const context = useContext(ThemeContext)

  const alertRef = useRef()

  useEffect(() => {
    selectColor(type)
    setTimeout(() => {
      alertRef.current.style.right = '10px'
    }, 400);
    setTimeout(() => {
      if (!dismiss) {
        close()
        setTimeout(() => {
          alertRef.current.style.display = 'none'
        }, 300)
      }
    }, duration)
  }, [type, dismiss, duration, timeout])

  const selectColor = (value) => {
    switch (value) {
      case 'primary':
        setBgColor('#B9BBE5')
        setTextColor('#393C85')
        break
      case 'secondary':
        setBgColor('#C7C9D1')
        setTextColor('#6B5486')
        break
      case 'success':
        setBgColor('#AAE1CB')
        setTextColor('#667F88')
        break
      case 'danger':
        setBgColor('#FEC0BF')
        setTextColor('#B14542')
        break
      case 'alert':
        setBgColor('#FFE5BA')
        setTextColor('#EBAF5F')
        break
      case 'info':
        setBgColor('#B7DBF9')
        setTextColor('#5B74B9')
        break
      case 'light-alert':
        setBgColor('#F6F6F9')
        setTextColor('#C0ABA7')
        break
      case 'dark-alert':
        setBgColor('#AEB0B3')
        setTextColor('#24507F')
        break
      default:
        setBgColor('#93c9ff')
        setTextColor('#2d6399')
    }
  }

  const setDismiss = () => {
    if(dismiss) {
      return <Dismiss onClick={close}>X</Dismiss>
    }
  }

  const close = () => {
    alertRef.current.style.right =  `${-(alertRef.current.offsetWidth + 50)}px`
  }

  return (
    <AlertButton
      textColor={textColor}
      bgColor={bgColor}
      ref={alertRef}
      theme={context}
    >
      <Content>
        {message}
        {setDismiss()}
      </Content>
    </AlertButton>
  )
}

export default Alert
