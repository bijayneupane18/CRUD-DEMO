import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button } from "@mui/material";

const Read = () => {
  //   function createData(firstname, lastname, checked) {
  //     return { firstname, lastname, checked };
  //   }

  //   const rows = [createData("bijay", "neupane", "true")];

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("https://63e0b1b68b24964ae002aaa3.mockapi.io/fakeData")
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">firstname</TableCell>
              <TableCell align="center">lastname</TableCell>
              <TableCell align="center">checked</TableCell>
              <TableCell align="center">update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {APIData.map((data) => (
              <TableRow
                key={data.firstname}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{data.firstname}</TableCell>
                <TableCell align="center">{data.lastname}</TableCell>
                <TableCell align="center">
                  {data.checked ? "checked" : "unchecked"}
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <Button
                    variant="outlined"
                    style={{ color: "grey", borderColor: "grey" }}
                  >
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Read;
