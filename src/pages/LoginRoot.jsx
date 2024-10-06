import Box from "@mui/material/Box";
import Appbar from "../components/Appbar/Appbar";
import { Divider } from "@mui/material";
import { Outlet } from "react-router-dom";

function LoginRoot() {
  return (
    <>
      <Box sx={{ backgroundColor: "", height: "100vh" }}>
        <Appbar />
        <Divider variant="inset" />
        <Outlet />
      </Box>
    </>
  );
}

export default LoginRoot;
