import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

interface Props {
  count: string;
  label: string;
  color: string;
  icon: ReactNode;
}

/* @TODO add test immediate */
function CountSectionCard({ color, count, label, icon }: Props) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        flexGrow: 1,
        backgroundColor: color,
        height: 120,
        flexBasis: "23%",
        minWidth: 250,
      }}
      variant="outlined"
    >
      <CardContent sx={{ height: "100%" }}>
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack sx={{ height: "100%" }} justifyContent="center" spacing={0.5}>
            <Typography variant="h5" fontWeight="bold" color="white">
              {count}
            </Typography>
            <Typography variant="body2" color="white">
              {label}
            </Typography>
          </Stack>
          {icon}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default CountSectionCard;
