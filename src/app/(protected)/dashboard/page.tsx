import { Metadata } from "next";
import TotalsSection from "@/components/protected/dashboard/TotalsSection";
import Stack from "@mui/material/Stack";
import CountSection from "@/components/protected/dashboard/CountSection";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard home page.",
};

function Dashboardpage() {
  return (
    <Stack gap={3}>
      <TotalsSection />
      <CountSection />
    </Stack>
  );
}

export default Dashboardpage;
