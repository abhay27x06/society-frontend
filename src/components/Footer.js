import { Card, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Box pb={3}>
      <Card>
        <Typography variant="subtitle1">
          Made With Passion By {" "}
          <a
            href="https://github.com/abhay27x06"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            ABHAY!
          </a>
        </Typography>
      </Card>
    </Box>
  );
};

export default Footer;
