import StatsDataGrid from "./StatsDataGrid";
import { TeamPage } from "./HomePage/TeamPage";
import { NavBar } from "./Layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<TeamPage />} />
          <Route path="/stats" element={<StatsDataGrid />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
