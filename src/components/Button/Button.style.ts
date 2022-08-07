import styled from 'styled-components';

const ButtonStyle = styled.button<{ backgroundColor: string }>`
  border: 1px white solid;
  background-color: ${props => props.backgroundColor};
  color: #fff;
  padding: 1rem;
  border-radius: 20px;

&:hover {
    border: 1px ${props => props.backgroundColor} solid;
    background-color: white;
    color: blue;
}
`;

export default ButtonStyle;