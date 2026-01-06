"use client";

import React, { useState, useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useUser } from "@auth0/nextjs-auth0/client";

import Icon from "@mdi/react";
import {
  mdiAccountPlus,
  mdiLogin,
  mdiMenu,
  mdiNewspaperVariantMultiple,
  mdiHistory,
  mdiForum,
  mdiHelpCircle,
  mdiTrophy,
  mdiLogout,
  mdiFaceManProfile,
} from "@mdi/js";

import styles from "@/styles/Menu.module.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();

  const { user } = useUser();

  const handleMenuToggle = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  // dropdown menu reference
  const dropdownRef1150 = useRef<HTMLDivElement>(null);
  const dropdownRef650 = useRef<HTMLDivElement>(null);

  // state to store Menu icon Top and Left coordinates
  const [menuTopLeft, setMenuTopLeft] = useState<{
    screenY: number;
    screenX: number;
  }>({ screenY: 0, screenX: 0 });

  // state to define `window` object
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // useeffect to auto-close dropdown menu at specific width
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    if (typeof window !== "undefined" && windowWidth > 1150) {
      setIsOpen(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  // useEffect to return Menu icon's coordinates for dropdown menu rendering
  useEffect(() => {
    // define menuIcon div element for 650 and 980 pixels
    const menuIcon1150 = document.getElementById("menuRoot1150");
    const menuIcon650 = document.getElementById("menuRoot650");

    // existence check
    if (!(menuIcon1150 || menuIcon650)) {
      return;
    }

    // put dropdown menu to calculated coordinates between 650 and 980 pixels
    if (menuIcon1150 instanceof HTMLDivElement) {
      const iconRect1150 = menuIcon1150.getBoundingClientRect();
      const iconLeft1150 = iconRect1150.left + window.scrollX + 215;
      const newTop1150 = iconRect1150.bottom + window.scrollY + 10;
      setMenuTopLeft({ screenY: newTop1150, screenX: iconLeft1150 });
    }

    // put dropdown menu to claculated coordinates for 650 and lower pixels
    if (menuIcon650 instanceof HTMLDivElement) {
      const iconRect650 = menuIcon650.getBoundingClientRect();
      const iconLeft650 = iconRect650.left + window.scrollX + 215;
      const newTop650 = iconRect650.bottom + window.scrollY + 10;
      setMenuTopLeft({ screenY: newTop650, screenX: iconLeft650 });
    }

    // move dropdown menu on resize between 650 and 980 pixels
    const handleResize1150 = () => {
      if (menuIcon1150 instanceof HTMLDivElement) {
        const iconRect = menuIcon1150.getBoundingClientRect();
        const iconleft = iconRect.right - window.scrollX - 215;
        const newTop = iconRect.bottom + window.scrollY + 10;
        setMenuTopLeft({ screenY: newTop, screenX: iconleft });
      }
    };

    // move dropdown menu on resize between for 650 and lower pixels
    const handleResize650 = () => {
      if (menuIcon650 instanceof HTMLDivElement) {
        const iconRect = menuIcon650.getBoundingClientRect();
        const iconleft = iconRect.right - window.scrollX - 215;
        const newTop = iconRect.bottom + window.scrollY + 10;
        setMenuTopLeft({ screenY: newTop, screenX: iconleft });
      }
    };

    if (windowWidth >= 650) {
      handleResize1150();
      window.addEventListener("resize", handleResize1150);
    }

    if (windowWidth < 650) {
      handleResize650();
      window.addEventListener("resize", handleResize650);
    }

    return () => {
      window.removeEventListener("resize", handleResize1150);
      window.removeEventListener("resize", handleResize650);
    };
  }, [windowWidth]);

  // auto-close dorpdown menu if clicks are outside of dropdown menu context
  const handleClickOutside = (event: Event) => {
    if (event instanceof MouseEvent && event.target instanceof HTMLDivElement) {
      if (
        (dropdownRef1150.current &&
          !dropdownRef1150.current.contains(event.target as Node)) ||
        (dropdownRef650 &&
          !dropdownRef650.current?.contains(event.target as Node))
      ) {
        setIsOpen(false);
      }
    }
  };

  // call auto-close function for dropdown menu with useEffect
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.nav}>
        {user ? (
          <>
            <div
              className={styles.navitem}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link href={`/profile/`} className={styles.link}>
                <Icon path={mdiFaceManProfile} size={0.8} /> Adatlap
              </Link>
            </div>
            <div
              className={styles.navitem}
              onClick={async () => {
                setIsOpen(false);
                router.push("/clear");
              }}
            >
              <Link href="/" className={styles.link}>
                <Icon path={mdiLogout} size={0.8} /> Kilépés
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={styles.navitem}>
              <Link
                href="/api/auth/login?returnTo=/verify"
                className={styles.link}
              >
                <Icon path={mdiLogin} size={0.8} /> Bejelentkezés/Regisztráció
              </Link>
            </div>
          </>
        )}

        <div className={styles.navitem}>
          <Link href="/" className={styles.link}>
            <Icon path={mdiNewspaperVariantMultiple} size={0.8} /> Hírek
          </Link>
        </div>
        <div className={styles.navitem}>
          <Link href="#" className={styles.link}>
            <Icon path={mdiHistory} size={0.8} /> Történelem
          </Link>
        </div>
        <div className={styles.navitem}>
          <Link href="#" className={styles.link}>
            <Icon path={mdiTrophy} size={0.8} /> Bajnokság
          </Link>
        </div>
        <div className={styles.navitem}>
          <Link href="#" className={styles.link}>
            <Icon path={mdiForum} size={0.8} /> Fórum
          </Link>
        </div>
        <div className={styles.navitem}>
          <Link href="#" className={styles.link}>
            <Icon path={mdiHelpCircle} size={0.8} /> Súgó
          </Link>
        </div>
      </div>

      <div className={styles.shrunk1150}>
        {user ? (
          <>
            <div
              className={styles.navitem}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link href={`/profile/`} className={styles.link}>
                <Icon path={mdiFaceManProfile} size={0.8} /> Adatlap
              </Link>
            </div>
            <div
              className={styles.navitem}
              onClick={async () => {
                setIsOpen(false);
                router.push("/clear");
              }}
            >
              <Link href="/" className={styles.link}>
                <Icon path={mdiLogout} size={0.8} /> Kilépés
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={styles.navitem}>
              <Link
                href="/api/auth/login?returnTo=/verify"
                className={styles.link}
              >
                <Icon path={mdiLogin} size={0.8} /> Bejelentkezés/{" "}
                <Icon path={mdiAccountPlus} size={0.8} /> Regisztráció
              </Link>
            </div>
          </>
        )}
        <div className={styles.navitem}>
          <Link
            href="/"
            className={styles.link}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Icon path={mdiNewspaperVariantMultiple} size={0.8} /> Hírek
          </Link>
        </div>
        <div
          id="menuRoot1150"
          className={styles.menu1150}
          onClick={handleMenuToggle}
        >
          <Icon path={mdiMenu} size={0.8} /> Menü
        </div>
      </div>

      {windowWidth > 650 && windowWidth < 1150 && isOpen && (
        <>
          <div
            style={{
              position: "absolute",
              top: `${menuTopLeft.screenY}px`,
              left: `${menuTopLeft.screenX}px`,
              zIndex: 1,
            }}
            ref={dropdownRef1150}
          >
            <div className={styles.hamburgerMenu}>
              <div className={styles.navitem}>
                <Link
                  href="#"
                  className={styles.link}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <Icon path={mdiHistory} size={0.8} /> Történelem
                </Link>
              </div>
              <div className={styles.navitem}>
                <Link
                  href="#"
                  className={styles.link}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <Icon path={mdiTrophy} size={0.8} /> Bajnokság
                </Link>
              </div>
              <div className={styles.navitem}>
                <Link
                  href="#"
                  className={styles.link}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <Icon path={mdiForum} size={0.8} /> Fórum
                </Link>
              </div>
              <div className={styles.navitem}>
                <Link
                  href="#"
                  className={styles.link}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <Icon path={mdiHelpCircle} size={0.8} /> Súgó
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      <div className={styles.shrunk650}>
        <div className={styles.navitem}>
          <Link
            href="/"
            className={styles.link}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Icon path={mdiNewspaperVariantMultiple} size={0.8} /> Hírek
          </Link>
        </div>
        <div
          id="menuRoot650"
          className={styles.menu650}
          onClick={handleMenuToggle}
        >
          <Icon path={mdiMenu} size={0.8} /> Menü
        </div>
      </div>

      {windowWidth < 650 && isOpen && (
        <div
          style={{
            position: "absolute",
            top: `${menuTopLeft.screenY}px`,
            left: `${menuTopLeft.screenX}px`,
            zIndex: 1,
          }}
          ref={dropdownRef650}
        >
          <div className={styles.hamburgerMenu}>
            {user ? (
              <>
                <div
                  className={styles.navitem}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  role="menuitem"
                  tabIndex={0}
                >
                  <Link href={`/profile/`} className={styles.link}>
                    <Icon path={mdiFaceManProfile} size={0.8} /> Adatlap
                  </Link>
                </div>
                <div
                  className={styles.navitem}
                  onClick={async () => {
                    setIsOpen(false);
                    router.push("/clear");
                  }}
                  role="menuitem"
                  tabIndex={0}
                >
                  <Link href="/" className={styles.link}>
                    <Icon path={mdiLogout} size={0.8} /> Kilépés
                  </Link>
                </div>
              </>
            ) : (
              <div className={styles.navitem}>
                <Link
                  href="/api/auth/login?returnTo=/verify"
                  className={styles.link}
                >
                  <Icon path={mdiLogin} size={0.8} /> Bejelentkezés/{" "}
                  <Icon path={mdiAccountPlus} size={0.8} /> Regisztráció
                </Link>
              </div>
            )}
            <div className={styles.navitem}>
              <Link
                href="#"
                className={styles.link}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Icon path={mdiHistory} size={0.8} /> Történelem
              </Link>
            </div>
            <div className={styles.navitem}>
              <Link
                href="#"
                className={styles.link}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Icon path={mdiTrophy} size={0.8} /> Bajnokság
              </Link>
            </div>
            <div className={styles.navitem}>
              <Link
                href="#"
                className={styles.link}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Icon path={mdiForum} size={0.8} /> Fórum
              </Link>
            </div>
            <div className={styles.navitem}>
              <Link
                href="#"
                className={styles.link}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Icon path={mdiHelpCircle} size={0.8} /> Súgó
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
