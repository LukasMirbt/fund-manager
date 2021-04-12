import FundListComponent from "../components/FundList/FundList";
import createInitialState from "../redux/createInitialState";

//

export default function RecommendedFunds() {
  return <FundListComponent />;
}

export const getStaticProps = createInitialState;
