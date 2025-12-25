import { Roboto } from "next/font/google";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

interface Props {
  children: ReactNode;
}

function ThemeProvider({ children }: Props) {
  return (
    <MaterialThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  );
}

export default ThemeProvider;
