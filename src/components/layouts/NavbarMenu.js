import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavbarMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/" as={Link}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
          </NavLink>
          <NavLink to="/form" as={Link}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </NavLink>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            To do
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
