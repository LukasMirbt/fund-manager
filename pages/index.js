import IntroComponent from "../components/Intro/Intro";
import createInitialState from "../redux/createInitialState";

export default function Intro() {
  return <IntroComponent />;
}

export const getStaticProps = createInitialState;
