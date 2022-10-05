import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const rows = [
  [6, 5, 5, 4, 3],
  [7, 6, 5, 4, 4],
  [8, 6, 5, 4, 4],
  [8, 7, 5, 5, 5],
  [9, 7, 6, 5, 5],
  [10, 7, 6, 6, 5],
  [10, 8, 6, 6, 6],
  [11, 8, 7, 6, 6],
  [12, 8, 7, 7, 6],
  [12, 9, 7, 7, 7],
  [13, 9, 8, 7, 7],
  [14, 9, 8, 8, 7],
  [14, 10, 9, 8, 8],
  [15, 10, 9, 8, 8],
  [16, 10, 9, 9, 8],
  [16, 11, 9, 9, 9],
  [17, 11, 10, 9, 9],
  [18, 11, 10, 10, 9],
  [18, 12, 10, 10, 10],
  [19, 12, 11, 10, 10],
  [20, 12, 11, 11, 10],
  [20, 13, 11, 11, 10],
  [21, 13, 12, 11, 11],
  [21, 13, 12, 12, 11],
  [22, 14, 12, 12, 12],
  [23, 14, 13, 12, 12],
  [24, 14, 13, 13, 12],
  [24, 15, 13, 13, 12],
  [25, 15, 14, 13, 13],
  [26, 15, 14, 14, 13],
  [26, 16, 14, 14, 14],
  [27, 16, 15, 14, 14],
  [28, 16, 15, 15, 14],
  [28, 17, 15, 15, 15],
  [29, 17, 16, 15, 15],
  [30, 17, 16, 16, 15],
  [30, 18, 16, 16, 16],
  [31, 18, 17, 16, 16],
];

const Program = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Week</TableCell>
            <TableCell colSpan={5}>Reps</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{row[0]}</TableCell>
              <TableCell>{row[1]}</TableCell>
              <TableCell>{row[2]}</TableCell>
              <TableCell>{row[3]}</TableCell>
              <TableCell>{row[4]}</TableCell>
              <TableCell>{row.reduce((prev, curr) => prev + curr)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Program;
