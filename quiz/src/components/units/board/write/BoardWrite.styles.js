import styled from "@emotion/styled";

export const SubmitButton = styled.button`
    background-color: ${(props) => (props.isActive ? "yellow" : "green")};
    width: 500px;
`;

export const Writerinput = styled.input`
    border-color: green;
`;
