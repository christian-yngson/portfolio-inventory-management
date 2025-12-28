import { Metadata } from "next";
import TotalsSection from "@/components/protected/dashboard/TotalsSection";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard home page.",
};

function Dashboardpage() {
  return <TotalsSection />;
}

export default Dashboardpage;
