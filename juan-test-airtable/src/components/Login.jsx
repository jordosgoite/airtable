import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import { emailErrorMsg } from "../helpers/emails";
import Dashboard from "./Dashboard";

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [allData, setAllData] = useState([]);
  const [dataPerEmail, setDataPerEmail] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch(
      `${process.env.REACT_APP_URL}/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`,
      {
        headers: new Headers({
          Authorization: `Bearer ${process.env.REACT_APP_URL_TOKEN}`,
        }),
      }
    )
      .then(async (resp) => {
        let records = await resp.json();
        setAllData(records.records);
      })
      .catch((error) => console.log(error));
  };

  const handleEmailInfo = () => {
    const itemFound = allData.find((item) => item.fields.RepEmail === email);
    if (itemFound) {
      let filteredData = allData.filter(
        (item) => item.fields.RepEmail === email
      );
      setDataPerEmail(filteredData);
      setEmailError("");
    } else {
      setEmailError(emailErrorMsg);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderRadius="8px"
        boxShadow="0px 1px 5px 0px #0000001F"
        padding={5}
        mt={10}
        sx={{ width: dataPerEmail ? "100%" : "40%" }}
      >
        <Box display="flex" alignItems="flex-start">
          <Typography style={{ fontWeight: "500" }}>
            Welcome to the App
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Box width={dataPerEmail ? "40%" : "100%"} marginTop={2}>
            <InputLabel htmlFor="basic-TextField-email">Email</InputLabel>
            <OutlinedInput
              id="basic-TextField-email"
              type="email"
              fullWidth={true}
              sx={{
                "& .MuiOutlinedInput-input": {
                  padding: "9.5px 12px !important",
                  border: "transparent",
                  outline: "none",
                },
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography
              sx={{ padding: "10px", color: "red", fontSize: "10px" }}
            >
              {emailError}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            width={dataPerEmail ? "40%" : "100%"}
            marginTop={0}
          >
            <Button onClick={handleEmailInfo}>Search</Button>
          </Box>
        </Box>
        {dataPerEmail && emailError === "" && (
          <Dashboard companies={dataPerEmail} />
        )}
      </Box>
    </Container>
  );
}

export default Login;
