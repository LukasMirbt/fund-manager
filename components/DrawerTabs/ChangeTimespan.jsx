import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InsetInputWithLabel from "../common/components/InsetInputWithLabel";

const Container = styled.div`
  margin-top: ${({ theme: { drawerSpacingTop } }) => drawerSpacingTop};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const LeftInput = styled(InsetInputWithLabel)``;

const RightInput = styled(InsetInputWithLabel)`
  margin-left: 0.5rem;
`;

const ChangeTimespan = ({ dateParameters, setDateParameters }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const isButtonSelected = (() => {
      if (
        dateParameters.start === undefined &&
        dateParameters.end === undefined
      ) {
        return true;
      }
      if (dateParameters.end - dateParameters.start === 0.5 * 31104000000) {
        return true;
      }
      if (dateParameters.end - dateParameters.start === 1 * 31104000000) {
        return true;
      }
      if (dateParameters.end - dateParameters.start === 3 * 31104000000) {
        return true;
      }
      if (dateParameters.end - dateParameters.start === 5 * 31104000000) {
        return true;
      }
      return false;
    })();

    if (isButtonSelected === true) {
      setStartDate("");
      setEndDate("");
    }
  }, [dateParameters.end, dateParameters.start]);

  const [invalidStartDate, setInvalidStartDate] = useState(false);
  const [invalidEndDate, setInvalidEndDate] = useState(false);

  const submitStartDate = (e) => {
    e.preventDefault();

    const trimmedStartDate = startDate.trim();

    if (
      Number.isNaN(new Date(trimmedStartDate).getTime()) &&
      trimmedStartDate !== ""
    ) {
      setInvalidEndDate(true);
      return;
    }

    const newDateParameters = {
      end: dateParameters.end,
    };

    if (trimmedStartDate === "") {
      newDateParameters.start = new Date(0);
    } else {
      newDateParameters.start = new Date(trimmedStartDate);
    }

    setDateParameters(newDateParameters);
    setInvalidStartDate(false);
  };

  const submitEndDate = (e) => {
    e.preventDefault();

    const trimmedEndDate = endDate.trim();

    if (
      Number.isNaN(new Date(trimmedEndDate).getTime()) &&
      trimmedEndDate !== ""
    ) {
      setInvalidEndDate(true);
      return;
    }

    const newDateParameters = {
      start: dateParameters.start,
    };

    if (trimmedEndDate === "") {
      newDateParameters.end = new Date();
    } else {
      newDateParameters.end = new Date(trimmedEndDate);
    }

    setDateParameters(newDateParameters);
    setInvalidStartDate(false);
  };

  return (
    <Container>
      <form onSubmit={submitStartDate}>
        <LeftInput
          value={startDate}
          setValue={setStartDate}
          label="Start date"
          placeholder="yyyy-mm-dd"
        />
      </form>

      <form onSubmit={submitEndDate}>
        <RightInput
          value={endDate}
          setValue={setEndDate}
          label="End date"
          placeholder="yyyy-mm-dd"
        />
      </form>
    </Container>
  );
};

export default ChangeTimespan;
