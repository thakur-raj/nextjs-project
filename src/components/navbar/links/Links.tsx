"use client";
import Link from "next/link";
import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";
import { useState } from "react";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={`${styles.links} flex gap-6 items-center`}>
        {links.map((link, index) => (
          <NavLink item={link} key={index}/>
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={`${styles.logout} px-1.5 py-1`}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <div className={`${styles.mobileLinks}`}>
          {links.map((link, index) => (
            <NavLink item={link} key={index}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
