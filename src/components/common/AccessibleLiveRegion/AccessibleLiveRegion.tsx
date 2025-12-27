"use client";

import Box from "@mui/material/Box";

interface Props {
  message: string;
}

function AccessibleLiveRegion({ message }: Props) {
  return (
    <Box
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        margin: "-1px",
        border: 0,
        padding: 0,
        clip: "rect(0 0 0 0)",
        overflow: "hidden",
      }}
    >
      {message}
    </Box>
  );
}

export default AccessibleLiveRegion;
