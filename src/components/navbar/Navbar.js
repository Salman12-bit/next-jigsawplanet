"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

 
  const logout = async () => {
    localStorage.removeItem("key"); 
    await signOut({
      callbackUrl: "https://puzzlesplan.com/login", 
    });
    window.location.href = "https://puzzlesplan.com/login"; 
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          PuzzlesPlan
        </Link>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <div className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          <Link href="/" className={styles.navItem}>
            Home
          </Link>
          <Link href="/blockspuzzle" className={styles.navItem}>
            Element Puzzle
          </Link>
          <Link href="/alphabetpuzzle" className={styles.navItem}>
            Alphabet Puzzle
          </Link>
          <Link href="/numberpuzzle" className={styles.navItem}>
            Number Puzzle
          </Link>
          <Link href="/themegallery" className={styles.navItem}>
            Theme Gallery
          </Link>
          {session?.user?.role === "admin" && (
            <>
              <Link href="/userrole" className={styles.navItem}>
                User Role
              </Link>
              <Link href="/dashboard" className={styles.navItem}>
                Dashboard
              </Link>
            </>
          )}

          {session?.user ? (
            <button className={styles.button} onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className={styles.navItem}>
                Login
              </Link>
              <Link href="/register" className={styles.navItem}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
