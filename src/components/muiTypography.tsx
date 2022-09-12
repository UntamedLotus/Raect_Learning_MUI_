import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Hello_World_</Typography>
      <Typography variant="h2">h2 Hello_World_</Typography>
      <Typography variant="h3">h3 Hello_World_</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Hello_World_
      </Typography>
      <Typography variant="h5">h5 Hello_World_</Typography>
      <Typography variant="h6">h6 Hello_World_</Typography>

      <Typography variant="subtitle1">h6 sub-title-1 </Typography>
      <Typography variant="subtitle2">h6 sub-title-2 </Typography>

      <Typography variant="body1">
        p Body-1 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Accusantium id labore ea placeat harum fuga dolores. Magni quam, in
        similique libero, pariatur unde impedit aspernatur aliquam eaque,
        perferendis esse tenetur?
      </Typography>
      <Typography variant="body2">
        p Body-2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        unde expedita saepe nesciunt rem dicta velit! Quis recusandae officiis,
        in, ratione perferendis quisquam pariatur numquam velit veniam error
        tempora magnam.
      </Typography>
    </div>
  );
};
