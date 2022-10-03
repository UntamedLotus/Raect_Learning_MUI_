import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple-table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Chicky",
    last_name: "McCerery",
    email: "cmccerery0@facebook.com",
    gender: "Female",
    ip_address: "111.220.214.88",
  },
  {
    id: 2,
    first_name: "Vasily",
    last_name: "Bushaway",
    email: "vbushaway1@wikipedia.org",
    gender: "Male",
    ip_address: "97.202.185.157",
  },
  {
    id: 3,
    first_name: "Candy",
    last_name: "O'Mara",
    email: "comara2@quantcast.com",
    gender: "Female",
    ip_address: "90.78.159.108",
  },
  {
    id: 4,
    first_name: "Gwenette",
    last_name: "Goning",
    email: "ggoning3@omniture.com",
    gender: "Female",
    ip_address: "187.224.127.135",
  },
  {
    id: 5,
    first_name: "Odelinda",
    last_name: "Brick",
    email: "obrick4@telegraph.co.uk",
    gender: "Female",
    ip_address: "130.154.255.34",
  },
  {
    id: 6,
    first_name: "Millicent",
    last_name: "Johnes",
    email: "mjohnes5@blogs.com",
    gender: "Female",
    ip_address: "54.186.240.155",
  },
  {
    id: 7,
    first_name: "Aubert",
    last_name: "Mulvin",
    email: "amulvin6@bbb.org",
    gender: "Male",
    ip_address: "9.204.63.250",
  },
  {
    id: 8,
    first_name: "Lon",
    last_name: "Siveter",
    email: "lsiveter7@e-recht24.de",
    gender: "Male",
    ip_address: "252.99.101.150",
  },
  {
    id: 9,
    first_name: "Hercules",
    last_name: "MacElholm",
    email: "hmacelholm8@livejournal.com",
    gender: "Male",
    ip_address: "217.234.89.75",
  },
  {
    id: 10,
    first_name: "Carmella",
    last_name: "Ubanks",
    email: "cubanks9@dion.ne.jp",
    gender: "Female",
    ip_address: "23.243.176.17",
  },
];
