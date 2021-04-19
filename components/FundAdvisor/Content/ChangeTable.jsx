import React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getChangeCellColor } from "../../DataGrid/Cells/ChangeCell";

const Container = styled(TableContainer)`
  max-width: 550px;
  flex-shrink: 0;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: none;
  border: ${({ theme }) => `1px solid ${theme.palette.divider}`};
`;

const ChangeCell = styled(TableCell)`
  color: ${({ sc: { color } }) => color};
`;

const ChangeTable = ({ fundName, row }) => {
  return (
    <Container component={Paper}>
      <Table
        aria-label={`Table displaying ${fundName} course change over time`}
      >
        <caption>{`${fundName} course change over time`}</caption>
        <TableHead>
          <TableRow key={row.name}>
            {row.map(({ headerData }) => (
              <TableCell key={headerData} align="right">
                {headerData}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={row.name}>
            {row.map(({ cellData }, index) => (
              <ChangeCell
                sc={{ color: getChangeCellColor(cellData) }}
                key={index}
                align="right"
              >
                {cellData}
              </ChangeCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

export default ChangeTable;
