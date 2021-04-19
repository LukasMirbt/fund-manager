import styled from "styled-components";

export const getChangeCellColor = (value) => {
  if (value.slice(0, -2) === "0.00") {
    return "blue";
  } else {
    return value[0] === "-" ? "#E62020" : "darkgreen";
  }
};

const StyledCell = styled.div`
  color: ${({ sc: { value } }) => getChangeCellColor(value)};
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const ChangeCell = ({ value }) => (
  <StyledCell sc={{ value }}>{value}</StyledCell>
);

export default ChangeCell;
