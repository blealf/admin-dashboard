import React, { useState, useEffect, Children } from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  position: relative;
  background: ${props => props.bgColor };
  color: ${props => props.textColor };
  padding: ${props => props.large ? "7px 11px" : "8px" };
  border-radius: 3px;
  outline: 0 !important;
  border: none;
  box-shadow: 3px 2px 5px 1px rgba(143, 136, 139, 0.5);
  margin-right: 5px;
  transition: 0.1s all;

  &:before{
    display: block;
    content: " ";
    position: absolute;
    z-index: 1;
    background: rgba(143, 136, 139, 0.1);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }
  &:hover:before {
    background: rgba(143, 136, 139, 0.3);
    cursor: pointer;
  }
`

const Button = (props) => {

  const [bgColor, setBgColor] = useState()
  const [textColor, setTextColor] = useState()

  useEffect(() => {
    selectColor(props.type)
    console.log(props)
  }, [props.type])

  const selectColor = (value) => {
    switch (value) {
      case 'primary':
        setBgColor('#5156BE')
        setTextColor('#FFFFFB')
        break
      case 'secondary':
        setBgColor('#74788D')
        setTextColor('#FFFFFB')
        break
      case 'success':
        setBgColor('#2AB57D')
        setTextColor('#FFFFFB')
        break
      case 'danger':
        setBgColor('#FD625E')
        setTextColor('#FFFFFB')
        break
      case 'warning':
        setBgColor('#FFBF53')
        setTextColor('#FFFFFB')
        break
      case 'info':
        setBgColor('#4BA6EF')
        setTextColor('#FFFFFB')
        break
      case 'light':
        setBgColor('#E9E9EF')
        setTextColor('#000000')
        break
      case 'dark':
        setBgColor('#343A40')
        setTextColor('#FFFFFB')
        break
      default:
        setBgColor('#5156BE')
        setTextColor('#FFFFFB')
    }
  }
  return (
    <Btn {...props} bgColor={bgColor} textColor={textColor}>
      {props.children}
    </Btn>
  )
}

export default Button
