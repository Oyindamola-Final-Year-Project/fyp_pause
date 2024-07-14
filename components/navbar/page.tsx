import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import Sidenavbar from "../sidenavbar/page";
import PortalPopup from "../portal-popup/page";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar: NextPage = () => {
  const [isSidenavbarOpen, setSidenavbarOpen] = useState(false);

  const openSidenavbar = useCallback(() => {
    setSidenavbarOpen(true);
  }, []);

  const closeSidenavbar = useCallback(() => {
    setSidenavbarOpen(false);
  }, []);
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (isSidenavbarOpen && !event.target.closest(".sidenavbar")) {
        closeSidenavbar();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSidenavbarOpen, closeSidenavbar]);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarChild} />
        <Image
          className={styles.menuIcon}
          alt=""
          src="/images/menu.svg"
          onClick={openSidenavbar}
          width="10"
          height="10"
        />
        <Link href={"/"}>
		<b className={styles.pause}>PAUSE</b>
        </Link>
		<Image
            className={styles.pauLogo1Icon}
            alt=""
            src="/images/pau_logo.png"
            width="100"
            height="20"
          />
      </div>
      {isSidenavbarOpen && (
        <PortalPopup
          overlayColor="rgba(255, 255, 255, 1)"
          placement="Centered"
          onOutsideClick={closeSidenavbar}
        >
          <Sidenavbar onClose={closeSidenavbar} />
        </PortalPopup>
      )}
    </>
  );
};

export default Navbar;
