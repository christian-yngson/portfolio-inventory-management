import { ReactNode } from "react";
import Header from "@/components/protected/Header";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Sidebar from "@/components/protected/Sidebar";
import SidebarProvider from "@/components/protected/SidebarProvider";
import MainContentContainer from "@/components/protected/MainContentContainer";

interface Props {
  children: ReactNode;
}

function ProtectedLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <Stack direction="row" sx={{ minHeight: "100vh", width: "100%" }}>
        <Sidebar />
        <MainContentContainer>
          <Header />
          <Box component="main">{children}</Box>
        </MainContentContainer>
      </Stack>
    </SidebarProvider>
  );
}

export default ProtectedLayout;
