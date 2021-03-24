import InfoButton from "./InfoButton";

const renderInfoCell = ({ value }) => {
  if (value === "Total") {
    return "-";
  } else {
    return <InfoButton fundName={value} />;
  }
};

export default renderInfoCell;
