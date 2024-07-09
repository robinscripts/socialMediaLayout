import { Box } from "@mui/material";

function RightBar() {
  return (
    <Box
      bgcolor={"lightcoral"}
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Right Bar
    </Box>
  );
}

export default RightBar;
