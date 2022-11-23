import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(date, timein, timeout) {
  return { date, timein, timeout};
}

const rows = [
  createData('', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', ''),
  createData('', '', '', '', '', '', ''),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Time In</StyledTableCell>
            <StyledTableCell align="center">Time Out</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.timein}</StyledTableCell>
              <StyledTableCell align="center">{row.timeout}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}