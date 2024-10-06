import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Login() {
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
          justifyContent: "center",
          alignItems: "center",
          mt: "-1rem",
        }}
      >
        <Box
          sx={{
            height: { xs: "95%", sm: "95%", md: "24rem" },
            width: { xs: "90%", sm: "90%", md: "40%" },
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            borderRadius: "1rem",
            boxShadow:
              "0px 4px 22px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.08), 0px 12px 24px rgba(0, 0, 0, 0.06)",
          }}
        >
          <Grid
            container
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ width: "100%", p: "0.3rem", overflowY: "auto" }}
          >
            <Grid
              item
              sx={{
                width: "90%",
                display: "flex",
                justifyContent: "center",
                mt: "0.5rem",
              }}
            >
              <TextField
                fullWidth
                required
                id="email"
                type="email"
                label="Email Address"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid
              item
              sx={{
                width: "90%",
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "column",
              }}
            >
              <TextField
                fullWidth
                required
                id="password"
                type="password"
                label="Password"
                variant="outlined"
                size="small"
              />
              <Button
                variant="text"
                sx={{ textTransform: "none" }}
                size="small"
              >
                Forgot password?
              </Button>
            </Grid>

            <Grid
              item
              sx={{ width: "90%", display: "flex", justifyContent: "center" }}
            >
              <Button fullWidth variant="contained">
                Sign in
              </Button>
            </Grid>
            <Grid
              item
              sx={{ width: "90%", display: "flex", justifyContent: "center" }}
            >
              <Divider
                sx={{
                  borderStyle: "solid",
                  borderColor: "red",
                  width: "100%",
                }}
              >
                <Typography
                  variant="caption"
                  gutterBottom
                  sx={{ display: "block" }}
                >
                  Or continue with
                </Typography>
              </Divider>
            </Grid>
            <Grid
              item
              sx={{ width: "90%", display: "flex", justifyContent: "center" }}
            >
              <button
                type="button"
                className="login-with-google-btn"
                onClick={handleSignin}
              >
                Sign in with Google
              </button>
            </Grid>
            <Grid
              item
              sx={{
                width: "90%",
                display: "flex",
                justifyContent: "center",
                mt: "-0.5rem",
              }}
            >
              <Typography
                variant="caption"
                gutterBottom
                sx={{ display: "block" }}
              >
                Not a member?
                <Button
                  variant="text"
                  sx={{ textTransform: "none" }}
                  size="small"
                >
                  Sign up
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Login;
