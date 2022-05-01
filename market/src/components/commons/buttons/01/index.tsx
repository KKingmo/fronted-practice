import styled from "@emotion/styled";

interface IProps {
  isActive: "boolean";
  title: "string";
}

const Button = styled.button`
  font-family: "Gompyo", sans-serif;
  width: 300px;
  color: #ffffff;
  padding: 15px 0;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${(props) => (props.isOn ? "#000000" : "#bdbdbd")};
  &:hover {
    background: #f5da4f;
    color: #000000;
  }
`;

export default function Button01(props: IProps) {
  return (
    <Button type={props.type} isOn={props.isActive}>
      {props.title}
    </Button>
  );
}
