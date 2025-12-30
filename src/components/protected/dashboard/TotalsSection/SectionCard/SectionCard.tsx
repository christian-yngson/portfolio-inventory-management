import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material";
import { ReactNode } from "react";
import SectionCardLabel from "./SectionCardLabel";

interface Props {
  icon: ReactNode;
  amount: string;
  label: string;
  color: string;
}

function SectionCard({ icon, amount, label, color }: Props) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        flexGrow: 1,
        backgroundColor: "white",
        flexBasis: "23%",
        minWidth: 250,
      }}
      variant="outlined"
    >
      <CardContent>
        <Stack direction="row" gap={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: alpha(color, 0.2),
            }}
          >
            {icon}
          </Box>
          <Stack justifyContent="center">
            <Typography variant="body1" fontWeight="bold">
              {amount}
            </Typography>
            <SectionCardLabel>{label}</SectionCardLabel>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default SectionCard;
