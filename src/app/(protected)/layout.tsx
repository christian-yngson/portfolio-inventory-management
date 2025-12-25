import { ReactNode } from "react";
import Header from "@/components/protected/Header";

interface Props {
  children: ReactNode;
}

function ProtectedLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default ProtectedLayout;
