import { Grid, Typography } from "@mui/material";
import { Item } from "./TeamPage";

interface Props {
  playerImg: string;
  statName: string;
  playerName: string;
  stat: number;
}

export function TeamLeader({ playerImg, statName, playerName, stat }: Props) {
  return (
    <Grid item xs={12} md={4}>
      <Item>
        <Typography variant="h3" sx={{ paddingBottom: 2 }}>
          {statName}
        </Typography>
        <img src={playerImg} width="25%" height="25%" alt="" />
        <Typography variant="h5" sx={{ paddingY: 2 }}>
          {playerName}
        </Typography>
        <Typography variant="body1">{stat}</Typography>
      </Item>
    </Grid>
  );
}
