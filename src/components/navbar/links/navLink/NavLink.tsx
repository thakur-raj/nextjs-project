"use client"
import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

type Props = {
  item: { title: string; path: string };
};

const NavLink = (props: Props) => {


    const pathName = usePathname()

  return (
    <Link key={props.item.title} href={props.item.path} className={`${styles.container} ${pathName === props.item.path && styles.active} text-center px-1.5 py-1`}>
      {props.item.title}
    </Link>
  );
};

export default NavLink;
