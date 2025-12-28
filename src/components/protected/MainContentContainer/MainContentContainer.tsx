"use client";

import { type ReactNode } from "react";
import Stack from "@mui/material/Stack";
import { useSidebar } from "../SidebarProvider/hooks";
import Ui from "@/lib/constants/ui";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  children: ReactNode;
}

function MainContentContainer({ children }: Props) {
  const { expanded } = useSidebar();
  const isPhone = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const marginLeft = isPhone || expanded ? 0 : `-${Ui.sidebarWidth}px`;
  return (
    <Stack sx={{ flexGrow: 1, marginLeft, transition: "margin-left 0.3s" }}>
      {children}
    </Stack>
  );
}

export default MainContentContainer;
