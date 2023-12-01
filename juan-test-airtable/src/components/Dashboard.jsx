import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import GeneralTable from "./GeneralTable";

const Dashboard = ({companies}) => {
  const [companyInfo, setCompanyInfo] = React.useState();

  const handleSelectChange = (data) =>{
    setCompanyInfo(companies.filter((item) => item.fields.company_name === data))
  }
  return (
    <Box sx={{ width: '100%', marginTop:"50px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Assigned Companies</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Assigned Companies"
          onChange={(e)=> handleSelectChange(e.target.value)}
          sx={{width:"40%"}}
        >
          {companies && companies.map((item)=> <MenuItem key={item.id} value={item.fields.company_name}>{item.fields.company_name}</MenuItem>
          )}
        </Select>
      </FormControl>
      {companyInfo && <GeneralTable companyData={companyInfo}/>}
    </Box>
  );
};
export default Dashboard;
