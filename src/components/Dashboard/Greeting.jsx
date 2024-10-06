import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { colors } from "../../constants/colors";
import Typography from "@mui/material/Typography";

function Greeting() {
  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const details = JSON.parse(userDetails);
      setUserName(details.name);
    }
  }, []);
  return (
    <>
      <Box
        sx={{
          height: "10rem",
          backgroundColor: colors.primary,
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#ffffff",
            fontWeight: "bold",
            m: "1rem",
          }}
        >
          Welcome back! {userName}
        </Typography>
      </Box>
    </>
  );
}
export default Greeting;
