import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{
          border: "1px solid",
        }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        p={2}
        margin={2}
      >
        <Box
          //   component="span"
          sx={{
            backgroundColor: "secondary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "secondary.light",
            },
          }}
        >
          Ruru
        </Box>

        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>

      <Grid container my={4} /*spacing={2} */ rowSpacing={2} columnSpacing={1}>
        <Grid item xs /* xs={12} sm={6} border="solid 1px" */>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs /* xs={6} xs={12} sm={6} */>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs /* xs='auto' xs={12} sm={6} */>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs /* xs={12} sm={6} */>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
