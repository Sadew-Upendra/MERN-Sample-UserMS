import { Box, Typography } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
  { id: 1, name: "Kamal" },
  { id: 2, name: "Nimal" },
  { id: 3, name: "Sunil" },
  { id: 4, name: "Amaya" },
];

const Users = () => {
  return (
    <Box
      sx={{
        width: "min(1100px, calc(100% - 48px))",
        margin: "80px auto",
        padding: "24px",
        borderRadius: "24px",
        background: "linear-gradient(180deg, #f8fbff 0%, #eef6ff 100%)",
        boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 800,
          color: "#0f172a",
        }}
      >
        User Management
      </Typography>
      <UserForm />
      <UsersTable rows={users} />
    </Box>
  );
};

export default Users;