import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
  const handleSignin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", pt: "1rem" }}
        >
          Queue Alert
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            className="login-with-google-btn"
            onClick={handleSignin}
          >
            Sign in with Google
          </button>
        </Box>
      </Box>
    </>
  );
}

export default Home;
