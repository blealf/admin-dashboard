import React from 'react'
import styled from 'styled-components'

const AlertWrapper = styled.button`
  padding: 5px;
  border: 1px solid red;
  min-width: 
`
const Alert = ({ message, color}) => {
  return (
    <AlertWrapper>
      {message}
    </AlertWrapper>
  )
}

export default Alert
