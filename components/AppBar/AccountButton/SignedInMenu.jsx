import styled from "styled-components";
import { useSelector } from "react-redux";
import { getBalance, getCredentials } from "../../../redux/selectors";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const StyledListItem = styled(ListItem)`
  margin-top: 0.5rem;
  height: 40px;
  padding: 0;
  padding-left: 1rem;
`;

const Container = styled.div`
  padding: 0.5rem 0;
`;

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

const SignedInMenu = ({ onClose, shouldSignOutRef }) => {
  const credentials = useSelector((state) => getCredentials(state));
  const balance = useSelector((state) => getBalance(state));

  return (
    <Container>
      <Row>
        <StyledAvatar>{credentials.username[0]}</StyledAvatar>
        <Column>
          <Username variant="subtitle1">{credentials.username}</Username>
          <Balance variant="subtitle1">{`Balance: ${balance.toFixed(
            2
          )} SEK`}</Balance>
        </Column>
      </Row>

      <StyledListItem
        button
        onClick={() => {
          shouldSignOutRef.current = true;
          onClose();
        }}
      >
        <ListItemText primary="Sign out" />
      </StyledListItem>
    </Container>
  );
};

export default SignedInMenu;
