import Box from "@mui/material/Box";

function OverlapScreen() {
  return (
    <>
      <Box
        sx={{
          width: "90%",
          borderRadius: "1rem",
          backgroundColor: "#ffffff",
          bottom: "4rem",
          position: "relative",
          zIndex: "1",
          flex: 1,
          boxShadow:
            "0px 4px 22px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.08), 0px 12px 24px rgba(0, 0, 0, 0.06)",
        }}
      ></Box>
    </>
  );
}

export default OverlapScreen;
