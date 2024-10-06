import Box from "@mui/material/Box";
import Greeting from "./Greeting";
import OverlapScreen from "./OverlapScreen";
import { colors } from "../../constants/colors";

function Dashboard() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.fadeBackground,
        }}
      >
        <Greeting />
        <OverlapScreen />
      </Box>
    </>
  );
}

export default Dashboard;
