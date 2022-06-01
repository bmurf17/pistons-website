import { Box, Card } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const basketballColums: GridColDef[] = [
  { field: "name", headerName: "Name", width: 175 },
  {
    field: "ppg",
    headerName: "PPG",
    description: "Points Per Game",
    width: 110,
  },
  {
    field: "reb",
    headerName: "REB",
    description: "Rebounds Per Game",
    width: 110,
  },
];

const basketballRows = [
  { name: "Cade Cunningham", ppg: 15, reb: 4 },
  { name: "Jerami Grant", ppg: 19.4, reb: 4 },
  { name: "Shadiq Bey", ppg: 14, reb: 3 },
  { name: "Marvin Bagely", ppg: 10, reb: 5 },
  { name: "Isaiah Stewart", ppg: 8, reb: 8 },
];

export default function StatsDataGrid() {
  return (
    <Card>
      <Box sx={{ height: "80vh" }}>
        <DataGrid
          rows={basketballRows}
          columns={basketballColums}
          getRowId={(row) => row.name}
          hideFooter={true}
        />
      </Box>
    </Card>
  );
}
