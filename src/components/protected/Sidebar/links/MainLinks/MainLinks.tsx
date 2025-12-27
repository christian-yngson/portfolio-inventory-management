"use client";

import AnalyticsIcon from "@mui/icons-material/Analytics";

import NavGroup from "../NavGroup";
import Routes from "@/lib/constants/routes";

function MainLinks() {
  return (
    <NavGroup
      id="main-links"
      groupName="Main"
      items={[
        {
          label: "Dashboard",
          route: Routes.protected.dashboard.root(),
          icon: <AnalyticsIcon />,
        },
      ]}
    />
  );
}

export default MainLinks;
