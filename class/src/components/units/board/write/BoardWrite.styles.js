import styled from '@emotion/styled'

export const SubmitButton = styled.button`
    background-color: ${(props) => props.isActive ? "yellow" : "none"};
`

export const WriterInput = styled.input`
    border-color: green;
`