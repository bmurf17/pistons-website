import { Box, Card } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

function getFieldGoalPercentage(params: any) {
  return params.row.fgm / params.row.fga;
}

function formatPercentage(params: any) {
  const valueFormatted = Number(params.value * 100).toLocaleString();
  return `${valueFormatted} %`;
}

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
  {
    field: "ast",
    headerName: "AST",
    description: "Assists Per Game",
    width: 110,
  },
  {
    field: "fga",
    headerName: "FGA",
    description: "Field Goal Attempts Per Game",
    width: 110,
  },
  {
    field: "fgm",
    headerName: "FGM",
    description: "Field Goals Made Per Game",
    width: 110,
  },
  {
    field: "fgp",
    headerName: "FG%",
    description: "Field Goal Percentage",
    width: 110,
    valueGetter: getFieldGoalPercentage,
    valueFormatter: formatPercentage,
  },
];

const basketballRows = [
  { name: "Cade Cunningham", ppg: 15, reb: 4, ast: 7, fga: 9, fgm: 7 },
  { name: "Jerami Grant", ppg: 19.4, reb: 4, ast: 4, fga: 8, fgm: 5 },
  { name: "Shadiq Bey", ppg: 14, reb: 3, ast: 3, fga: 6, fgm: 3 },
  { name: "Marvin Bagely", ppg: 10, reb: 5, ast: 2, fga: 5, fgm: 3 },
  { name: "Isaiah Stewart", ppg: 8, reb: 8, ast: 1, fga: 3, fgm: 2 },
];

export default function StatsDataGrid() {
  return (
    <Card sx={{ backgroundColor: "#BEC0C2" }}>
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
