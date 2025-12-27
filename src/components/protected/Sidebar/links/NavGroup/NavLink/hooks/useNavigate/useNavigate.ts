import { useRouter } from "next/navigation";

type UseNavigate = (route: string) => () => void;

const useNavigate: UseNavigate = (route) => {
  const router = useRouter();
  return () => router.push(route);
};

export default useNavigate;
