import { Box, Grid, Paper, styled } from "@mui/material";
import {
  astLeader,
  ppgLeader,
  rebLeader,
} from "../Constants/PistonsStatsLeaders";
import { CurrentRecord } from "./CurrentRecord";
import { LastGame } from "./LastGame";
import { NextGame } from "./NextGame";
import { TeamLeader } from "./TeamLeader";
import React from "react";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#BEC0C2",
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
                width="30%"
              ></img>
            </Item>
          </Grid>
          <LastGame />
          <CurrentRecord />
          <NextGame />
          <TeamLeader
            playerImg={ppgLeader.playerImg}
            playerName={ppgLeader.playerName}
            stat={ppgLeader.stat}
            statName={ppgLeader.statName}
          />
          <TeamLeader
            playerImg={astLeader.playerImg}
            playerName={astLeader.playerName}
            stat={astLeader.stat}
            statName={astLeader.statName}
          />
          <TeamLeader
            playerImg={rebLeader.playerImg}
            playerName={rebLeader.playerName}
            stat={rebLeader.stat}
            statName={rebLeader.statName}
          />
        </Grid>
      </Box>
    </div>
  );
}
