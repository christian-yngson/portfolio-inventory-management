import { redirect } from "next/navigation";
import Routes from "@/lib/constants/routes";

export default function Home() {
  return redirect(Routes.protected.dashboard.root());
}
