import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const HandleLogout = () => {
  const router = useRouter();
  useEffect(() => {
    Cookies.remove("token");
    router.replace(`${process.env.NEXT_PUBLIC_LEGACY_APP_URL}login.asp`);
  }, []);
  return <></>;
};

export default HandleLogout;
