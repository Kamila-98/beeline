import "./App.css";
import TextField from "@mui/material/TextField";
// import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import React, { useState } from "react";
import axios from "axios";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function App() {
  const [stateDate, setStateDate] = useState({
    start: "",
    end: "",
  });

  const [table, setTable] = useState([]);

  const getDataUsers = async () => {
    axios
      .get(
        `http://176.126.164.43:85/rassrochka/api/v1/profiles/getDtoForMain/${stateDate.start}/${stateDate.end}`
      )
      .then((res) => setTable(res.data));
  };
  console.log(table);

  return (
    <div className="App">
      <div className="date_calendar">
        <TextField
          className="text_input"
          id="outlin`ed-basic"
          label="start data"
          value={stateDate.start}
          onChange={(e) => {
            setStateDate({ ...stateDate, start: e.target.value });
          }}
        />
        <TextField
          className="text_input"
          id="outlin`ed-basic"
          label="end dats"
          value={stateDate.end}
          onChange={(e) => {
            setStateDate({ ...stateDate, end: e.target.value });
          }}
        />
      </div>

      <div className="btn_date">
        <Button onClick={getDataUsers} variant="contained">
          Получить данные по этим датам
        </Button>
      </div>

      <div className="table_content">
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell>fullName</TableCell>
              <TableCell align="right">passportInn</TableCell>
              <TableCell align="right">deviceImei</TableCell>
              <TableCell align="right">registrationDate</TableCell>
              <TableCell align="right">salesmanLogin</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {table.map((publication) => (
              <TableRow key={publication.id}>
                <TableCell>{publication.fullName}</TableCell>
                <TableCell>{publication.passportInn}</TableCell>
                <TableCell>{publication.deviceImei}</TableCell>
                <TableCell>{publication.registrationDate}</TableCell>
                <TableCell>{publication.salesmanLogin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </div>
    </div>
  );
}

export default App;
