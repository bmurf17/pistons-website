import { Grid, Typography } from "@mui/material";
import { Item } from "./TeamPage";

export function NextGame() {
  return (
    <Grid item xs={12} md={4}>
      <Item>
        <Typography variant="h3" sx={{ paddingBottom: 2 }}>
          Next Game
        </Typography>
        <img
          src={
            "https://cdn.nba.com/teams/uploads/sites/1610612754/2021/10/logo-pacers.svg"
          }
          width="30%"
          height="30%"
          alt=""
        />
        <Typography variant="h5" sx={{ paddingY: 2 }}>
          Indiana Pacers
        </Typography>
        <Typography variant="body1">(25-57)</Typography>
      </Item>
    </Grid>
  );
}
