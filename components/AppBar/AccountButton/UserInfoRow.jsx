import styled from "styled-components";
import { useSelector } from "react-redux";
import { getBalance, getCredentials } from "../../../redux/selectors";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const Username = styled(Typography)`
  margin-right: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
`;

const StyledAvatar = styled(Avatar)`
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: forestgreen;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  min-width: 240px;
  padding-bottom: 0.5rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.divider}`};
`;

const Balance = styled(Typography)`
  font-size: 0.875rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

const UserInfoRow = () => {
  const credentials = useSelector((state) => getCredentials(state));
  const balance = useSelector((state) => getBalance(state));

  return (
    <Row>
      <StyledAvatar aria-hidden>{credentials.username[0]}</StyledAvatar>
      <Column>
        <Username variant="subtitle1" component="h2">
          {credentials.username}
        </Username>
        <Balance
          variant="subtitle1"
          component="h2"
        >{`Balance: ${balance.toFixed(2)} SEK`}</Balance>
      </Column>
    </Row>
  );
};

export default UserInfoRow;
