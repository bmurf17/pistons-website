import StatsDataGrid from "./StatsDataGrid";
import { TeamPage } from "./HomePage/TeamPage";
import { NavBar } from "./Layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import theme from "./Theme/theme";
import { CssBaseline } from "@mui/material";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <CssBaseline />
        <main>
          <Routes>
            <Route path="/" element={<TeamPage />} />
            <Route path="/stats" element={<StatsDataGrid />} />
          </Routes>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
