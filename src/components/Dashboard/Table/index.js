import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  link: {
    color: "#159bfb!important",
    display: "block",
  },
});

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  caloriess,
  fats,
  carbss,
  proteins,
  link
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    caloriess,
    fats,
    carbss,
    proteins,
    link,
  };
}

const rows = [
  createData(
    1,
    "Elijah M.Weber",
    "$13.50",
    1.23,
    "$16.65",
    "$1.65",
    "$15.22",
    "Feb 26th",
    "Bi-weekly",
    "pdf"
  ),
  createData(
    2,
    "Elijah M.Weber",
    "$13.50",
    1.23,
    "$16.65",
    "$1.65",
    "$15.22",
    "Feb 26th",
    "Bi-weekly",
    "pdf"
  ),
  createData(
    3,
    "Elijah M.Weber",
    "$13.50",
    1.23,
    "$16.65",
    "$1.65",
    "$15.22",
    "Feb 26th",
    "Bi-weekly",
    "pdf"
  ),
  createData(
    4,
    "Elijah M.Weber",
    "$13.50",
    1.23,
    "$16.65",
    "$1.65",
    "$15.22",
    "Feb 26th",
    "Bi-weekly",
    "pdf"
  ),
  createData(
    5,
    "Elijah M.Weber",
    "$13.50",
    1.23,
    "$16.65",
    "$1.65",
    "$15.22",
    "Feb 26th",
    "Bi-weekly",
    "pdf"
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Box color="#6c757d" pl={2} py={2}>
        Employees
      </Box>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Rate/hour</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Gross Pay</TableCell>
            <TableCell>Taxes</TableCell>
            <TableCell>Net Pay</TableCell>
            <TableCell>Pay Data</TableCell>
            <TableCell>Frequency</TableCell>
            <TableCell>Paystub</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell className={classes.link}>
                <Link href="#">{row.calories}</Link>
              </TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.caloriess}</TableCell>
              <TableCell>{row.fats}</TableCell>
              <TableCell>{row.carbss}</TableCell>
              <TableCell>{row.proteins}</TableCell>

              <TableCell className={classes.link}>
                <Link href="/paystub">{row.link}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
