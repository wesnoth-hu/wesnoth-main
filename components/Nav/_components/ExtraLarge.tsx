"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Icon from "@mdi/react";
import {
  mdiTrophy,
  mdiController,
  mdiDownload,
  mdiReplay,
  mdiMap,
  mdiBookOpenVariant,
  mdiPlusCircle,
  mdiLightbulbOn,
  mdiMultimedia,
  mdiChat,
  mdiForum,
  mdiBillboard,
  mdiBellRing,
  mdiVideoHighDefinition,
  mdiMenuClose,
  mdiMenuOpen,
} from "@mdi/js";
import Divider from "../Divider";
import styles from "@/styles/extraLarge.module.css";

export default function ExtraLarge() {
  const [openDropdownId, setOpenDropdownId] = React.useState<'game' | 'media' | null>(null);
  const [openDropdown, setOpenDropdown] = React.useState<'dropdown' | null>(null);
  const handleMouseEnter = (id: 'game' | 'media') => () => {
    setOpenDropdownId(id);
  };

  const handleMouseLeave = () => {
    setOpenDropdownId(null);
  };

  const handleDropdownOpen = (id: 'dropdown') => () => {
    setOpenDropdown(id);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };
  return <>
        <menu className={styles.menu}>
      <ul
        data-part="Large Navigation Menu"
        className={styles.navmenu}
      >
        <li
          data-part="Navigation Menu Item"
          className={styles.navitem}
        >
          <span className={styles.navitem_span}>
            <Icon path={mdiTrophy} size={1.2} />
            <Link href="/">Bajnokság</Link>
          </span>
        </li>
      </ul>


      <ul
        data-part="Large Navigation Menu"
        className={styles.navmenu}
      >
        <li
          onMouseEnter={handleMouseEnter('game')}
          onMouseLeave={handleMouseLeave}
          data-part="Navigation Menu Item"
          className={styles.navitem}
        >
          <span className={styles.navitem_span}>
            <Icon path={mdiController} size={1.2} />
            <Link href="">A játék</Link>
          </span>
          <div className={`${openDropdownId === 'game' ? clsx(styles.dropdown, styles.dropdownGame) : styles.dropdownHidden}`}>
            <span className={styles.dropdownItem}>
              <Icon path={mdiDownload} size={1.2} />
              A játék letöltése
            </span>
            <Divider />
            <span className={styles.dropdownItem}>
              <Icon path={mdiReplay} size={1.2} />
              Visszajátszások
            </span>
            <Divider />
            <span className={styles.dropdownItem}>
              <Icon path={mdiMap} size={1.2} />
              Pályák</span>
            <Divider />
            <span className={styles.dropdownItem}>
              <Icon path={mdiBookOpenVariant} size={1.2} />
              Kézikönyv
            </span>
          </div>
        </li>
      </ul>

      <ul
        data-part="Large Navigation Menu"
        className={styles.navmenu}>
        <li
          data-part="Navigation Menu Item"
          className={styles.navitem}
        >
          <span className={styles.navitem_span}>
            <Icon path={mdiPlusCircle} size={1.2} />
            <Link href="">Kiegészítők</Link>
          </span>
        </li>
        <li
          data-part="Navigation Menu Item"
          className={styles.navitem}
        >
          <span className={styles.navitem_span}>
            <Icon path={mdiLightbulbOn} size={1.2} />
            <Link href="/tudastar">Tudástár</Link>
          </span>
        </li>
      </ul>

      <ul
        data-part="Large Navigation Menu"
        className={styles.navmenu}
      >
        <li
          onMouseEnter={handleMouseEnter('media')}
          onMouseLeave={handleMouseLeave}
          data-part="Navigation Menu Item"
          className={styles.navitem}
        >
          <span className={styles.navitem_span}>
            <Icon path={mdiMultimedia} size={1.2} />
            <Link href="">Média</Link>
          </span>
          <div className={`${openDropdownId === 'media' ? clsx(styles.dropdown, styles.dropdownMedia) : styles.dropdownHidden}`}>
            <span className={styles.dropdownItem}>
              <Icon path={mdiMap} size={1.2} />
              Hátterek
            </span>
            <Divider />
            <span className={styles.dropdownItem}>
              <Icon path={mdiBillboard} size={1.2} />
              Plakát
            </span>
            <Divider />
            <span className={styles.dropdownItem}>
              <Icon path={mdiBellRing} size={1.2} />
              Csengőhangok
            </span>
            <Divider />
            <span className={styles.dropdownItem}>
              <Icon path={mdiVideoHighDefinition} size={1.2} />
              Videók
            </span>
          </div>
        </li>
      </ul>

      <ul
        data-part="Large Navigation Menu"
        className={styles.navmenu}
      >
        <li
          data-part="Navigation Menu Item"
          className={styles.navitem}
        >
          <span className={styles.navitem_span}>
            <Icon path={mdiForum} size={1.2} />
            <Link href="">Fórum</Link>
          </span>
        </li>
        <li
          data-part="Navigation Menu Item"
          className={styles.navitem}
        >
          <span className={styles.navitem_span}>
            <Icon path={mdiChat} size={1.2} />
            <Link href="">Discord</Link>
          </span>
        </li>
      </ul>
    </menu>
  </>;
}