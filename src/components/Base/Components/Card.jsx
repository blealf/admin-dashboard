import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../../utils/theme'

const CardWrapper = styled.div`
  box-shadow: 2px 2px 18px 1px ${props => props.theme.textColor};
  min-height: 20px;
  width: ${props => props.width || "300px"};
  ${'' /* border: 1px solid ${props => props.theme.textColor}; */}
  border-radius: 3px;

  * {
    padding: ${props => props.width || "10px 15px"};
    border-bottom: 1px solid ${props => props.theme.textColor};
  }

  h4 {
    border-bottom: none;
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
  }

`

const CardHeader = styled.div`
  width:  ${props => props.image ? "100%" : "90%"};;
  padding: ${props => props.image ? "0" : "10px 15px"};
  border-bottom: ${props => props.image ? "0" : "1px solid " + props.theme.textColor};;
  font-size: 1.5rem;
  img {
    height: 100%;
    width: 100%;
    padding: 0;
  }
`

const CardTitle = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.1rem;
`
const CardBody = styled.div`

`

const CardFooter = styled.div`
  border-bottom: none;

`

const Card = (props) => {
  const context = useContext(ThemeContext)
  // console.log(context.textColor)

  const renderHeader = () => {
    return props.image
      ? (<img src={props.image} alt={props.title} />)
      : props.header
  }
  const renderComponent = (value, Comp) => {
    return value ? (<Comp {...props}>{value}</Comp>) : null
  }
  return (
    <CardWrapper theme={context} {...props}>
      {renderComponent(renderHeader(), CardHeader)}
      {renderComponent(props.title, CardTitle)}
      {renderComponent(props.children, CardBody)}
      {renderComponent(props.footer, CardFooter)}
    </CardWrapper>
  )
}

export default Card
