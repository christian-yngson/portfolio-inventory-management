import { usePathname } from "next/navigation";

const useIsActive = (route: string) => {
  const pathname = usePathname();

  return pathname === route;
};

export default useIsActive;
