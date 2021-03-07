import React, { useState, useRef, useEffect } from "react";
import { string, objectOf, func, bool } from "prop-types";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ButtonBase from "@material-ui/core/ButtonBase";
import styled, { css } from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";

const Button = styled(ButtonBase)`
  color: rgba(0, 0, 0, 0.87);
  width: 6rem;
  height: 1.75rem;
  margin: 0;
  display: flex;
  padding: 0.3125rem;
  box-sizing: content-box;
  border-radius: 4px;
  flex-direction: ${({ sc: { alignment } }) =>
    alignment === "right" ? "row-reverse" : "row"};
  box-shadow: ${({ sc: { dataKey, key } }) =>
    dataKey === key
      ? "0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"
      : "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"};
`;

const Arrow = styled(ArrowUpward)`
  ${({ sc: { dataKey, key, isHovered, direction } }) => {
    if (isHovered === false && dataKey !== key) {
      return css`
        width: 0;
        transition: width 100ms ease-in-out;
      `;
    }
    return css`
      margin-right: 0.1rem;
      color: black;
      width: 1.5rem;
      display: flex;
      font-size: 1.5rem;
      transition: ${() => {
        if (key === dataKey) {
          return "transform 200ms ease-in-out";
        }
        return "transform 200ms ease-in-out, width 200ms ease-in-out";
      }};
      align-items: center;
      justify-content: center;
      transform: ${() => {
        if (direction === "asc") {
          if (key === dataKey && isHovered === true) {
            return "rotate(180deg)";
          }
          return "none";
        }
        if (isHovered === true) {
          return "none";
        }
        return "rotate(180deg)";
      }};
    `;
  }}
`;

const Label = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  font-family: ${({ theme: { fontFamily } }) => fontFamily};
  max-width: 4.25rem;
  /* white-space: nowrap; */
`;

const propTypes = {
  sortParameters: objectOf(string).isRequired,
  dataKey: string.isRequired,
  label: string.isRequired,
  style: objectOf(string),
  setSortParameters: func.isRequired,
  alignment: string
};

const defaultProps = {
  style: {},
  alignment: "right"
};

const SortButton = ({
  sortParameters,
  dataKey,
  label,
  style,
  setSortParameters,
  alignment
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const { direction, key } = sortParameters;

  const setDescending = () => {
    setIsHovered(false);
    setSortParameters({
      direction: "des",
      key: dataKey
    });
  };

  const setAscending = () => {
    setIsHovered(false);
    setSortParameters({
      direction: "asc",
      key: dataKey
    });
  };

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const buttonBaseOnClick = (() => {
    if (dataKey === key) {
      if (direction === "asc") {
        return setDescending;
      }
      return setAscending;
    }
    return setAscending;
  })();

  const tooltipTitle = `Sort by ${dataKey.toLowerCase()}`;

  const SCButtonProps = {
    dataKey,
    key,
    isHovered,
    alignment
  };
  const SCArrowProps = {
    dataKey,
    key,
    isHovered,
    direction
  };

  return (
    /*     <Tooltip
      data-testid={`SortButton${dataKey.replace(/\s+/g, "")}`}
      onClose={handleTooltipClose}
      onOpen={handleTooltipOpen}
      open={open}
      title={tooltipTitle}
      enterDelay={650}
      leaveDelay={200}
    > */
    <Button
      sc={SCButtonProps}
      focusRipple
      onClick={buttonBaseOnClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ ...style }}
    >
      <Arrow sc={SCArrowProps} />
      <Label /* style={{ fontSize: dataKey === "acqValue" ? "0.75rem" : null }} */
      >
        {label}
      </Label>
    </Button>
    /* </Tooltip> */
  );
};

SortButton.propTypes = propTypes;
SortButton.defaultProps = defaultProps;

export default SortButton;
