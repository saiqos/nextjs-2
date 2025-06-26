import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  useEffect(() => {
    if (darkTheme) {
      document.body.className = "dark";
    } else {
      document.body.className = "";
    }
  });
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.nav__link}>
        Home Page
      </Link>
      <Link href="/random" className={styles.nav__link}>
        Random Country
      </Link>
      <Link href="/favorites" className={styles.nav__link}>
        Favorite Countries
      </Link>
      <button
        className={styles.nav__link}
        onClick={() => setDarkTheme(!darkTheme)}
      >
        Dark theme: {darkTheme ? "on" : "off"}
      </button>
    </nav>
  );
}
