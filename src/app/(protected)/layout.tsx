import { ReactNode } from "react";
import Header from "@/components/protected/Header";
import Stack from "@mui/material/Stack";
import Sidebar from "@/components/protected/Sidebar";
import SidebarProvider from "@/components/protected/SidebarProvider";
import MainContentContainer from "@/components/protected/MainContentContainer";
import Container from "@mui/material/Container";

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
          <Container component="main" sx={{ padding: 3 }} maxWidth={false}>
            {children}
          </Container>
        </MainContentContainer>
      </Stack>
    </SidebarProvider>
  );
}

export default ProtectedLayout;
