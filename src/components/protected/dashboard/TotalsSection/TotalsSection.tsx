import Stack from "@mui/material/Stack";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { colors } from "@mui/material";
import SectionCard from "./SectionCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

/* @TODO add test after API implementation */
/* @TODO convert to suspense boundaries */
function TotalsSection() {
  return (
    <Stack
      gap={2}
      direction="row"
      flexGrow={1}
      flexWrap="wrap"
      component="section"
      role="region"
      aria-label="totals overview"
    >
      <SectionCard
        icon={
          <ShoppingBagIcon sx={{ fontSize: 26, color: colors.orange[500] }} />
        }
        amount="$25,024"
        label="Total purchase due"
        color={colors.orange[500]}
      />

      <SectionCard
        icon={<LocalAtmIcon sx={{ fontSize: 26, color: colors.green[500] }} />}
        amount="$5,025"
        label="Total sales due"
        color={colors.green[500]}
      />

      <SectionCard
        icon={<TrendingUpIcon sx={{ fontSize: 26, color: colors.cyan[500] }} />}
        amount="$12,021"
        label="Total profit"
        color={colors.cyan[500]}
      />

      <SectionCard
        icon={
          <TrendingDownIcon sx={{ fontSize: 26, color: colors.red[500] }} />
        }
        amount="$7,502"
        label="Total Expenses"
        color={colors.red[500]}
      />
    </Stack>
  );
}

export default TotalsSection;
