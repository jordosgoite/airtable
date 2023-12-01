import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const GeneralTable = ({ companyData }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City - State - Country</TableCell>
            <TableCell>Zip Code</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companyData.map(({fields}) => (
            <TableRow
              key={fields.first_name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{fields.first_name} {fields.last_name}</TableCell>
              <TableCell>{fields.address}</TableCell>
              <TableCell>{fields.city} - {fields.state} - {fields.county}</TableCell>
              <TableCell>{fields.zip}</TableCell>
              <TableCell>{fields.phone1} - {fields.phone2}</TableCell>
              <TableCell>{fields.email}</TableCell>
              <TableCell>{fields.web}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default GeneralTable;
