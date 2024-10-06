import Login from "../Login/Login";
import Box from "@mui/material/Box";
import logo from "../../assets/logo.png";
import { colors } from "../../constants/colors";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: colors.fadeBackground,
        }}
      >
        <Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: "1.5rem",
            }}
          >
            <img src={logo} style={{ height: "3rem", width: "7rem" }}></img>
          </Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: "center", mt: "1rem", fontWeight: "bold" }}
          >
            Sign in to your account
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Login />
        </Box>
      </Box>
    </>
  );
}

export default Home;
