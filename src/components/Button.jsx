import styled from 'styled-components'

const Button = styled.button`
    background: ${props => props.primary ? "#2490ff": "white" && props.default ? "white": "white"};
    color: ${props => props.primary ? "white" : "black" && props.link ? "#2490ff" : ""};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border:${props => props.default ? " solid grey" : "none" && props.dashed ? "1px dashed grey" : "none"};
    border-radius : 2px;
`


export {Button}