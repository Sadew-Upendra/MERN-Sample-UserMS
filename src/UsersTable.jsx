import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const UsersTable = ({ rows }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        boxShadow: "0 14px 32px rgba(15, 23, 42, 0.06)",
      }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: "#eff6ff" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 800, color: "#0f172a" }}>ID</TableCell>
            <TableCell sx={{ fontWeight: 800, color: "#0f172a" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 800, color: "#0f172a" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                hover
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ margin: "0px 8px 0 0", borderRadius: "10px" }}
                    onClick={() => {}}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ borderRadius: "10px" }}
                    onClick={() => {}}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center" sx={{ py: 5 }}>
                <Typography variant="body1" color="text.secondary">
                  No Data
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
