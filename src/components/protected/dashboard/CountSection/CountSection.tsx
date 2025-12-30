import SectionContainer from "../SectionContainer";
import CountSectionCard from "./CountSectionCard";
import { colors } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";

/* @TODO add test after API implementation */
function CountSection() {
  return (
    <SectionContainer ariaLabel="count overview">
      <CountSectionCard
        icon={<InventoryIcon sx={{ fontSize: 30, color: "white" }} />}
        count="1,000"
        label="Products"
        color={colors.blueGrey[700]}
      />
      <CountSectionCard
        icon={<PersonIcon sx={{ fontSize: 30, color: "white" }} />}
        count="5,000"
        label="Customers"
        color={colors.orange[400]}
      />
      <CountSectionCard
        icon={<ContactEmergencyIcon sx={{ fontSize: 30, color: "white" }} />}
        count="20"
        label="Suppliers"
        color={colors.indigo[700]}
      />
      <CountSectionCard
        icon={<DescriptionIcon sx={{ fontSize: 30, color: "white" }} />}
        count="1,000"
        label="Sales invoices"
        color={colors.green[700]}
      />
    </SectionContainer>
  );
}

export default CountSection;
