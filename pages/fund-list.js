import FundListComponent from "../components/FundList/FundList";
import createInitialState from "../redux/createInitialState";

export default function FundList() {
  return <FundListComponent />;
}

export const getStaticProps = createInitialState;
