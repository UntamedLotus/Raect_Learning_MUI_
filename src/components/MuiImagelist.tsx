import React from "react";
import {
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
} from "@mui/material";

export const MuiImagelist = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}? w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList
        variant="woven"
        sx={{ width: 900, height: 850 }}
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}? w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Box sx={{ width: 900, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}? w=248&&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1664206626597-2c158e274a96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Welkin",
  },

  {
    img: "https://images.unsplash.com/photo-1647248128729-1b815ecf6bf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxuYXR1cmUlMjBhZXN0aGV0aWMlMjBwYXN0ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "YellowTip",
  },

  {
    img: "https://images.unsplash.com/photo-1529912626516-e58b23f44f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGFlc3RoZXRpYyUyMHBhc3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Pride",
  },

  {
    img: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFlc3RoZXRpYyUyMHBhc3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Mountains",
  },

  {
    img: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fGFlc3RoZXRpYyUyMHBhc3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "GreatFuji",
  },

  {
    img: "https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxhZXN0aGV0aWMlMjBwYXN0ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "PastelBridge",
  },

  {
    img: "https://images.unsplash.com/photo-1495987976467-244d20b4b39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG5hdHVyZSUyMGFlc3RoZXRpYyUyMHBhc3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Sakura",
  },

  {
    img: "https://images.unsplash.com/photo-1528756514091-dee5ecaa3278?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fG5hdHVyZSUyMGFlc3RoZXRpYyUyMHBhc3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Lilac",
  },

  {
    img: "https://images.unsplash.com/photo-1628105541664-ae6ee8d249ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fG5hdHVyZSUyMGFlc3RoZXRpYyUyMHBhc3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "ManWol",
  },
];
