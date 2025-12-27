import Routes from "@/lib/constants/routes";
import NavGroup from "../NavGroup";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddBoxIcon from "@mui/icons-material/AddBox";

/* @TODO add test later after all routes are done */
function ProductsLinks() {
  const items = [
    {
      label: "All Products",
      route: Routes.protected.products.root(),
      icon: <InventoryIcon />,
    },
    {
      label: "Add Product",
      route: Routes.protected.products.add(),
      icon: <AddBoxIcon />,
    },
  ];

  return <NavGroup id="products-links" groupName="Products" items={items} />;
}

export default ProductsLinks;
