import { Grid, Typography } from "@mui/material";
import { Item } from "./TeamPage";

export function LastGame() {
  return (
    <Grid item xs={12} md={4}>
      <Item>
        <Typography variant="h3" sx={{ paddingBottom: 2 }}>
          Last Game
        </Typography>
        <img
          src={
            "https://www.nba.com/heat/sites/heat/files/mia_0.png?w=180&h=105"
          }
          width="30%"
          height="30%"
          alt=""
        />
        <Typography variant="h5" sx={{ paddingY: 2 }}>
          Miami Heat
        </Typography>
        <Typography variant="body1">(53-29)</Typography>
      </Item>
    </Grid>
  );
}
