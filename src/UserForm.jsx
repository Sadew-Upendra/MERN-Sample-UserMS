import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";

const UserForm = props => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  return (
    <Grid
      container
      spacing={2}
      sx={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "18px",
        padding: "24px",
        marginBottom: "30px",
        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.04)",
      }}
    >
      {/* <Grid item xs={12}>
        <Typography component={"h2"} sx={{ color: "#0f172a", fontWeight: 700, mb: 2 }}>
          User Form
        </Typography>
      </Grid> */}

      <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#334155",
            marginRight: "16px",
            fontSize: "16px",
            width: "90px",
            fontWeight: 600,
          }}
        >
          ID
        </Typography>

        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: "100%", maxWidth: "360px", background: "#f8fafc", borderRadius: "10px" }}
          value={id}
          onChange={e => setId(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          component={"label"}
          htmlFor="name"
          sx={{
            color: "#334155",
            marginRight: "16px",
            fontSize: "16px",
            width: "90px",
            fontWeight: 600,
          }}
        >
          Name
        </Typography>

        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: "100%", maxWidth: "360px", background: "#f8fafc", borderRadius: "10px" }}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          sx={{
            background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
            color: "#ffffff",
            borderRadius: "12px",
            px: 3,
            py: 1.2,
            fontWeight: 700,
            textTransform: "none",
            boxShadow: "0 10px 24px rgba(37, 99, 235, 0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)",
            },
          }}
        >
          Add User
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserForm;