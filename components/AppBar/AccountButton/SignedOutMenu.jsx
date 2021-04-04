import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";

const StyledListItem = styled(ListItem)`
  height: 40px;
  padding: 0 1rem;
  font-style: italic;
`;

const Container = styled.div`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin-bottom: 0.5rem;
`;

const SignedOutMenu = ({ onClose }) => {
  const router = useRouter();

  return (
    <Container>
      <StyledListItem>
        <ListItemText primary="You are not signed in" />
      </StyledListItem>

      {router.pathname !== "/portfolio" && (
        <StyledButton
          color="primary"
          variant="contained"
          onClick={() => {
            onClose();
            router.push("/portfolio");
          }}
        >
          Go to sign-in
        </StyledButton>
      )}
    </Container>
  );
};

export default SignedOutMenu;
