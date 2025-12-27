"use client";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import NavLink from "./NavLink";

interface Props {
  id: string;
  groupName: string;
  items: Parameters<typeof NavLink>[0][];
}

function NavGroup({ groupName, id, items }: Props) {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby={id}
      subheader={
        <ListSubheader component="div" id={id}>
          {groupName}
        </ListSubheader>
      }
    >
      {items.map(({ label, route, icon }) => (
        <NavLink key={route} label={label} route={route} icon={icon} />
      ))}
    </List>
  );
}

export default NavGroup;
