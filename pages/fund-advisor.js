import RecommendedFunds from "../components/FundAdvisor/FundAdvisor";
import createInitialState from "../redux/createInitialState";

export default function FundRecommendations() {
  return <RecommendedFunds />;
}

export const getStaticProps = createInitialState;
