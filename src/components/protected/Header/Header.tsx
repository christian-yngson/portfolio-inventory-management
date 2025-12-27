import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AvatarButton from "./AvatarButton";
import SidebarToggle from "./SidebarToggle";
import HeaderLabel from "./HeaderLabel";
import HeaderIconButtons from "./HeaderIconButtons";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <SidebarToggle />
        <HeaderLabel />
        <HeaderIconButtons />
        <AvatarButton />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
