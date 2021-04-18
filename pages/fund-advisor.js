import FundAdvisorComponent from "../components/FundAdvisor/FundAdvisor";
import createInitialState from "../redux/createInitialState";

export default function FundAdvisor() {
  return <FundAdvisorComponent />;
}

export const getStaticProps = createInitialState;
