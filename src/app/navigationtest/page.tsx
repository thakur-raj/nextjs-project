"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {

  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams()
  console.log("Pathname: ",pathName);
  console.log("Query: ",searchParams.get("name"));
  
  const handleClick = () => {
    console.log("Clicked");
    router.back();
  };

  return (
    <div>
      <Link href={"/"} prefetch={false}>
        Click Here
      </Link>
      <button onClick={handleClick}> Write and redirect</button>
    </div>
  );
};

export default NavigationTestPage;
