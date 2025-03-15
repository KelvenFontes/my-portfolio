"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "../app/loading";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
}
