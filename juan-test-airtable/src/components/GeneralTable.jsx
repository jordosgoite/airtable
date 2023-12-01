import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const GeneralTable = ({ companyData }) => {
  return (
    <TableContainer sx={{marginTop:"30px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:"bold"}}>Full Name</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Address</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>City</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>State</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>County</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Zip Code</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Phone</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Email</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companyData.map(({ fields }) => (
            <TableRow
              key={fields.first_name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                {fields.first_name} {fields.last_name}
              </TableCell>
              <TableCell>{fields.address}</TableCell>
              <TableCell>{fields.city}</TableCell>
              <TableCell>{fields.state}</TableCell>
              <TableCell>{fields.county}</TableCell>
              <TableCell>{fields.zip}</TableCell>
              <TableCell>
                {fields.phone1} - {fields.phone2}
              </TableCell>
              <TableCell>{fields.email}</TableCell>
              <TableCell>
                <a href={fields.web}>{fields.web}</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default GeneralTable;
