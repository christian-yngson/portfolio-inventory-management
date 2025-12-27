import HeaderSection from "./HeaderSection";
import Divider from "@mui/material/Divider";
import SidebarDrawer from "./SidebarDrawer";
import MainLinks from "./links/MainLinks";
import ProductsLinks from "./links/ProductsLinks";

/* @TODO add test later after all routes are done*/
function Sidebar() {
  return (
    <SidebarDrawer>
      <HeaderSection />
      <Divider />
      <MainLinks />
      <Divider />
      <ProductsLinks />
    </SidebarDrawer>
  );
}

export default Sidebar;
