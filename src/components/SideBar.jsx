import { Box } from "@mui/material";

function SideBar() {
  return (
    <Box
      bgcolor={"blue"}
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Side Bar
    </Box>
  );
}

export default SideBar;
