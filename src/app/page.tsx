"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import Cookies from "js-cookie";

const ViewMyProjects = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      Cookies.set("token", token);
      const decodedVal: { userId: string; email: string } = jwtDecode(token);
      router.replace(`/project-list/${decodedVal.userId}`);
    }
  }, []);

  return <></>;
};

export default ViewMyProjects;
