const onSelectionModelChange = ({
  selectionModel,
  isCheckboxHeaderDisabledRef,
  dispatch,
  setFundNames,
}) => {
  if (selectionModel.length === 0) {
    dispatch(setFundNames([]));

    const container = document.getElementsByClassName(
      "MuiDataGrid-colCellCheckbox"
    )[0];
    const checkbox = container.getElementsByClassName("MuiButtonBase-root")[0];

    const input = checkbox.getElementsByTagName("input")[0];

    container.style.pointerEvents = "none";
    checkbox.style.color = "rgba(0,0,0,0.26)";
    checkbox.setAttribute("aria-disabled", true);
    input.setAttribute("tabIndex", -1);

    isCheckboxHeaderDisabledRef.current = true;
  } else if (isCheckboxHeaderDisabledRef.current === true) {
    const container = document.getElementsByClassName(
      "MuiDataGrid-colCellCheckbox"
    )[0];
    const checkbox = container.getElementsByClassName("MuiButtonBase-root")[0];
    const input = checkbox.getElementsByTagName("input")[0];

    container.style.pointerEvents = "";
    checkbox.style.color = "";
    checkbox.setAttribute("aria-disabled", false);
    input.setAttribute("tabIndex", 0);

    isCheckboxHeaderDisabledRef.current = false;
  }
};

export default onSelectionModelChange;
