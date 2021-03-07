import RecommendedFunds from "../components/FundAdvisor/RecommendedFunds";
import createInitialState from "../redux/createInitialState";

export default function FundRecommendations() {
  return <RecommendedFunds />;
}

export const getStaticProps = createInitialState;
