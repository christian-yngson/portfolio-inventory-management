import Stack from "@mui/material/Stack";
import { ReactNode } from "react";

interface Props {
  ariaLabel: string;
  children: ReactNode;
}

/* @TODO add test immediate */
function SectionContainer({ ariaLabel, children }: Props) {
  return (
    <Stack
      gap={2}
      direction="row"
      flexGrow={1}
      flexWrap="wrap"
      component="section"
      role="region"
      aria-label={ariaLabel}
    >
      {children}
    </Stack>
  );
}

export default SectionContainer;
