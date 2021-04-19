import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import UserInfoRow from "./UserInfoRow";

const StyledListItem = styled(ListItem)`
  margin-top: 0.5rem;
  height: 40px;
  padding: 0;
  padding-left: 1rem;
`;

const Container = styled.div`
  padding: 0.5rem 0;
`;

const SignedInMenu = ({ onClose, shouldSignOutRef }) => {
  return (
    <Container role="menu">
      <UserInfoRow />

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
