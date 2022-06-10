import { AppBar, Box, Toolbar, Link } from "@mui/material";
import React from "react";

export function NavBar() {
  const links = [
    { text: "Home", href: "/", paddingLeft: "0" },
    { text: "Stats", href: "/stats", paddingLeft: "25px" },
  ];

  return (
    <AppBar sx={{ backgroundColor: "#1D42BA," }} position="static">
      <Toolbar disableGutters component="nav">
        <Box
          component="nav"
          display="flex"
          flexDirection="row"
          alignItems="flex-end"
          flex={1}
          py={1.5}
          px={{ xs: 0, sm: 3 }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              underline="none"
              sx={{
                display: { xs: "none", sm: "flex" },
                color: "white",
                paddingLeft: link.paddingLeft,
                fontSize: 30,
                fontWeight: "medium",
              }}
            >
              {link.text}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
