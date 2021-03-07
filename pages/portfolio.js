import PortfolioComponent from "../components/Portfolio/Portfolio";
import { getCredentials } from "../redux/selectors";
import { useSelector } from "react-redux";
import Login from "../components/Login/Login";
import createInitialState from "../redux/createInitialState";

export default function Portfolio() {
  const credentials = useSelector((state) => getCredentials(state));

  return credentials.token === undefined ? <Login /> : <PortfolioComponent />;
}

export const getStaticProps = createInitialState;
