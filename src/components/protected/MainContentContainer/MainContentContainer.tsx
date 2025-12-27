"use client";

import { type ReactNode } from "react";
import Stack from "@mui/material/Stack";
import { useSidebar } from "../SidebarProvider/hooks";
import Ui from "@/lib/constants/ui";

interface Props {
  children: ReactNode;
}

/* @TODO add test immediate */
function MainContentContainer({ children }: Props) {
  const { expanded } = useSidebar();
  const marginLeft = expanded ? 0 : `-${Ui.sidebarWidth}px`;
  return (
    <Stack sx={{ flexGrow: 1, marginLeft, transition: "margin-left 0.3s" }}>
      {children}
    </Stack>
  );
}

export default MainContentContainer;
