import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Appbar from "../components/Appbar/Appbar";
import { Divider } from "@mui/material";
import { getCookieByName } from "../utilities/getCookieByName";
import { Outlet } from "react-router-dom";

const setUserDetailsOnLogin = () => {
  const userDetailsCookie = getCookieByName("userDetails");
  if (userDetailsCookie) {
    const userDetails = JSON.parse(decodeURIComponent(userDetailsCookie));
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      const existingUserDetails = JSON.parse(existingUser);
      if (JSON.stringify(existingUserDetails) !== JSON.stringify(userDetails)) {
        //update it
        localStorage.setItem("user", JSON.stringify(userDetails));
      }
    } else {
      localStorage.setItem("user", JSON.stringify(userDetails));
    }
    return userDetails;
  } else {
    alert("Error in fetching details.Please clear cache and re login");
  }
};
function LoginRoot() {
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userDetails = setUserDetailsOnLogin();
    setUserAvatar(userDetails.avatar);
    setUserName(userDetails.name);
  }, []);
  return (
    <>
      <Box sx={{ backgroundColor: "", height: "100vh" }}>
        <Appbar userAvatar={userAvatar} userName={userName} />
        <Divider variant="inset" />
        <Outlet />
      </Box>
    </>
  );
}

export default LoginRoot;
