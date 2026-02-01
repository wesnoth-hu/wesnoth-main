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
} from "@mdi/js";
import Divider from "../Divider";
import styles from "@/styles/mainMenu.module.css";

export default function Main() {
  const [openDropdownId, setOpenDropdownId] = React.useState<'game' | 'media' | null>(null);

  const handleMouseEnter = (id: 'game' | 'media') => () => {
    setOpenDropdownId(id);
  };

  const handleMouseLeave = () => {
    setOpenDropdownId(null);
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
            <Icon path={mdiTrophy} size={.8} />
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
            <Icon path={mdiController} size={.8} />
            <Link href="">A játék</Link>
          </span>
          <div className={`${openDropdownId === 'game' ? clsx(styles.dropdown, styles.dropdownGame) : styles.dropdownHidden}`}>
            <span className={styles.dropdownItem}>
              <Icon path={mdiDownload} size={.8} />
              A játék letöltése
            </span>
            <Divider />
            <span className={styles.dropdownItem}>
              <Icon path={mdiReplay} size={.8} />
              Visszajátszások
            </span>
            <Divider />
            <span className={styles.dropdownItem}>
              <Icon path={mdiMap} size={.8} />
              Pályák</span>
            <Divider />
            <span className={styles.dropdownItem}>
              <Icon path={mdiBookOpenVariant} size={.8} />
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
            <Icon path={mdiPlusCircle} size={.8} />
            <Link href="">Kiegészítők</Link>
          </span>
        </li>
        <li
          data-part="Navigation Menu Item"
          className={styles.navitem}
        >
          <span className={styles.navitem_span}>
            <Icon path={mdiLightbulbOn} size={.8} />
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
            <Icon path={mdiMultimedia} size={.8} />
            <Link href="">Média</Link>
          </span>
          <div className={`${openDropdownId === 'media' ? clsx(styles.dropdown, styles.dropdownMedia) : styles.dropdownHidden}`}>
            <span className={styles.dropdownItem}>
              <Icon path={mdiMap} size={.8} />
              Hátterek
            </span>
            <Divider />
            <span className={styles.dropdownItem}>
              <Icon path={mdiBillboard} size={.8} />
              Plakát
            </span>
            <Divider />
            <span className={styles.dropdownItem}>
              <Icon path={mdiBellRing} size={.8} />
              Csengőhangok
            </span>
            <Divider />
            <span className={styles.dropdownItem}>
              <Icon path={mdiVideoHighDefinition} size={.8} />
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
            <Icon path={mdiForum} size={.8} />
            <Link href="">Fórum</Link>
          </span>
        </li>
        <li
          data-part="Navigation Menu Item"
          className={styles.navitem}
        >
          <span className={styles.navitem_span}>
            <Icon path={mdiChat} size={.8} />
            <Link href="">Discord</Link>
          </span>
        </li>
      </ul>
    </menu>
  </>;
}