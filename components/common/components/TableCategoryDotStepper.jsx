import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const GreyDot = styled.canvas`
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.26);
  height: 8px;
  width: 8px;
  margin-right: ${({ sc: { isLast } }) => (isLast === true ? "0" : "2px")};
  margin-top: 0.1rem;
`;

const BlueDot = styled.canvas`
  border-radius: 8px;
  background-color: #003b9b;
  height: 8px;
  width: 8px;
  margin-right: ${({ sc: { isLast } }) => (isLast === true ? "0" : "2px")};
  margin-top: 0.1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TableCategoryDotStepper = ({
  numberOfShownNavigatedColumns,
  totalNumberOfNavigatedColumns,
  index,
  left = false
}) => {
  const numberOfDots =
    totalNumberOfNavigatedColumns - numberOfShownNavigatedColumns;

  const adjustedIndex = index > numberOfDots ? numberOfDots : index;

  const numberOfGreyDots = numberOfDots - adjustedIndex;

  if (left === true) {
    return (
      <Container>
        {[...new Array(numberOfGreyDots).keys()].map(n => (
          <GreyDot
            sc={{
              isLast: numberOfGreyDots === n + 1 && adjustedIndex === 0
            }}
            key={n}
          />
        ))}

        {[...new Array(adjustedIndex).keys()].map(n => (
          <BlueDot
            sc={{
              isLast: adjustedIndex === n + 1
            }}
            key={n}
          />
        ))}
      </Container>
    );
  }
  return (
    <Container>
      {[...new Array(numberOfGreyDots).keys()].map(n => (
        <BlueDot
          sc={{
            isLast: numberOfGreyDots === 0 && adjustedIndex === n + 1
          }}
          key={n}
        />
      ))}

      {[...new Array(adjustedIndex).keys()].map(n => (
        <GreyDot
          sc={{
            isLast: numberOfGreyDots === n + 1 && adjustedIndex === 0
          }}
          key={n}
        />
      ))}
    </Container>
  );
};

export default TableCategoryDotStepper;
