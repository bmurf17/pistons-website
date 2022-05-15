import { Box, Grid, Paper, styled, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function TeamPage() {
  return (
    <div className="body">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Item>
              <img
                src={
                  "https://palaceofpistons.files.wordpress.com/2020/01/cropped-transparent.png"
                }
                alt=""
                width="50%"
              ></img>
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <img
                src={"https://content.sportslogos.net/logos/6/223/full/444.gif"}
                alt=""
              ></img>
              <Typography>Next Game:</Typography>
            </Item>
          </Grid>

          <Grid item xs={6} md={4}>
            <Item>
              <img
                src={"https://content.sportslogos.net/logos/6/223/full/444.gif"}
                alt=""
              ></img>
              <Typography>Next Game: </Typography>
            </Item>
          </Grid>

          <Grid item xs={6} md={4}>
            <Item>
              <img
                src={"https://content.sportslogos.net/logos/6/223/full/444.gif"}
                alt=""
              ></img>
              <Typography>Next Game: </Typography>
            </Item>
          </Grid>

          <Grid item xs={6} md={8}>
            <Item>
              <img
                src={"https://content.sportslogos.net/logos/6/223/full/444.gif"}
                alt=""
              ></img>
              <Typography>Next Game: </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
