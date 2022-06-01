import { Grid, Typography } from "@mui/material";
import { Item } from "./TeamPage";

export function CurrentRecord() {
  return (
    <Grid item xs={12} md={4}>
      <Item>
        <Typography variant="h3" sx={{ paddingBottom: 2 }}>
          Record
        </Typography>
        <img
          src={"https://content.sportslogos.net/logos/6/223/full/444.gif"}
          width="30%"
          height="30%"
          alt=""
        />
        <Typography variant="h5" sx={{ paddingY: 2 }}>
          Detroit Pistons
        </Typography>
        <Typography variant="body1">(23-59)</Typography>
      </Item>
    </Grid>
  );
}
