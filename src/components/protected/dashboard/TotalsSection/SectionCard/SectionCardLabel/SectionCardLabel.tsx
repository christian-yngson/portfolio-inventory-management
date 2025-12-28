"use client";

import Typography from "@mui/material/Typography";

import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function SectionCardLabel({ children }: Props) {
  return (
    <Typography
      variant="body2"
      sx={{ color: (theme) => theme.palette.text.secondary }}
    >
      {children}
    </Typography>
  );
}

export default SectionCardLabel;
