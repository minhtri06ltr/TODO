import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavbarMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "rgba(60 ,53 ,53,1)",
        }}
      >
        <Toolbar
          variant="dense"
          style={{ margin: "0 auto" }}
        >
          <NavLink to="/" as={Link}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              sx={{ ml: 2 }}
            >
              <HomeIcon
                fontSize="large"
                color="success"
              />
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
              <ControlPointDuplicateIcon
                fontSize="large"
                color="secondary"
              />
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
