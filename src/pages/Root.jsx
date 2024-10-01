import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Box sx={{ backgroundColor: "", height: "100vh" }}>
        <Outlet />
      </Box>
    </>
  );
}

export default Root;
