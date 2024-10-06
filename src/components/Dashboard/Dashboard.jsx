import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/auth/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status == 200) {
          navigate("/");
        } else {
          alert("Error in logging out please clear cookies and refresh");
        }
      })
      .catch((err) => {
        alert("Error in logging out please clear cookies and refresh");
      });
  };
  return (
    <>
      <h1>Welcome to Dashboard</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
}

export default Dashboard;
