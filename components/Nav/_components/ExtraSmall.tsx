"use client";

import React from "react";
import Link from "next/link";
import Icon from "@mdi/react";
import {
  mdiForum,
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
  mdiBillboard,
  mdiBellRing,
  mdiVideoHighDefinition,
  mdiMenuOpen,
  mdiMenuClose,
} from "@mdi/js";
import Divider from "../Divider";

export default function ExtraSmall() {
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
    <menu className="xsm:max-sm:flex xsm:max-sm:flex-row xsm:max-sm:items-start xsm:max-sm:justify-center xsm:max-sm:gap-4 sm:max-md:hidden md:max-2xl:hidden">
      <ul
        data-part="Large Navigation Menu"
        className="my-2 flex flex-col items-center justify-start gap-2"
      >
        <li
          data-part="Navigation Menu Item"
          className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]"
        >
          <span className="relative flex flex-row items-center justify-start gap-1">
            <Icon path={mdiTrophy} size={.8} />
            <Link href="/">Bajnokság</Link>
          </span>
        </li>
      </ul>

      <ul
        data-part="Large Navigation Menu"
        className="my-2 flex flex-col items-center justify-start gap-2"
      >
        <li
          onMouseEnter={handleMouseEnter('game')}
          onMouseLeave={handleMouseLeave}
          data-part="Navigation Menu Item"
          className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]"
        >
          <span className="relative flex flex-row items-center justify-start gap-1">
            <Icon path={mdiController} size={.8} />
            <Link href="">A játék</Link>
          </span>
          <div className={`${openDropdownId === 'game' ? "absolute flex flex-col content-center items-center justify-start text-[#d4af37] bg-[url('/tart-hatter.jpg')] bg-size-[100%_100%] border-image-slice-repeat" : "hidden"}`}>
            <span className="flex flex-row items-center gap-2 hover:text-[#efbf04] cursor-pointer">
              <Icon path={mdiDownload} size={.8} />
              A játék letöltése
            </span>
            <Divider />
            <span className="flex flex-row items-center gap-2 hover:text-[#efbf04] cursor-pointer">
              <Icon path={mdiReplay} size={.8} />
              Visszajátszások
            </span>
            <Divider />
            <span className="flex flex-row items-center gap-2 hover:text-[#efbf04] cursor-pointer">
              <Icon path={mdiMap} size={.8} />
              Pályák</span>
            <Divider />
            <span className="flex flex-row items-center gap-2 hover:text-[#efbf04] cursor-pointer">
              <Icon path={mdiBookOpenVariant} size={.8} />
              Kézikönyv
            </span>
          </div>
        </li>
      </ul>

      <ul
        data-part="Small-Mid Navigation Menu"
        className="my-2 flex flex-col items-center justify-start gap-2"
      >
        
      </ul>

      <ul
        data-part="Large Navigation Menu"
        className="my-2 flex flex-col items-center justify-start gap-2"
      >
        <li
          onMouseEnter={handleDropdownOpen('dropdown')}
          onMouseLeave={handleDropdownClose}
          data-part="Navigation Menu Item"
          className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]"
        >
          <span className="relative flex flex-row items-center justify-center gap-1">
            {openDropdown === 'dropdown' ? <Icon path={mdiMenuClose} size={1.3} /> : <Icon path={mdiMenuOpen} size={1.3} />}
          </span>
          <div className={`${openDropdown === 'dropdown' ? "absolute right-0 flex flex-col content-center items-center justify-start text-[#d4af37] bg-[url('/tart-hatter.jpg')] bg-size-[100%_100%] border-image-slice-repeat" : "hidden"}`}>
            <span
              data-part="Navigation Menu Item"
              className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]"
            >
              <span className="relative flex flex-row items-center justify-start gap-1">
                <Icon path={mdiPlusCircle} size={.8} />
                <Link href="">Kiegészítők</Link>
              </span>
            </span>
            <Divider />
            <span
              data-part="Navigation Menu Item"
              className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]"
            >
              <span className="relative flex flex-row items-center justify-start gap-1">
                <Icon path={mdiLightbulbOn} size={.8} />
                <Link href="/tudastar">Tudástár</Link>
              </span>
            </span>
            <Divider />
            <span
              onMouseEnter={handleMouseEnter('media')}
              onMouseLeave={handleMouseLeave}
              aria-label="Navigation Menu Item"
              className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]"
            >
              <span
                className="relative flex flex-row items-center justify-start gap-1">
                <Icon path={mdiMultimedia} size={.8} />
                <Link href="">Média</Link>
              </span>
              <div className={`${openDropdownId === 'media' ? "absolute top-25 -left-25 flex flex-col content-center items-center justify-start text-[#d4af37] bg-[url('/tart-hatter.jpg')] bg-size-[100%_100%] border-image-slice-repeat" : "hidden"}`}>
                <span className="flex flex-row items-center gap-2 hover:text-[#efbf04] cursor-pointer">
                  <Icon path={mdiMap} size={.8} />
                  Hátterek
                </span>
                <Divider />
                <span className="flex flex-row items-center gap-2 hover:text-[#efbf04] cursor-pointer">
                  <Icon path={mdiBillboard} size={.8} />
                  Plakát
                </span>
                <Divider />
                <span className="flex flex-row items-center gap-2 hover:text-[#efbf04] cursor-pointer">
                  <Icon path={mdiBellRing} size={.8} />
                  Csengőhangok
                </span>
                <Divider />
                <span className="flex flex-row items-center gap-2 hover:text-[#efbf04] cursor-pointer">
                  <Icon path={mdiVideoHighDefinition} size={.8} />
                  Videók
                </span>
              </div>
            </span>
            <Divider />
            <span className="flex flex-row items-center gap-2 hover:text-[#efbf04] cursor-pointer">
              <Icon path={mdiForum} size={.8} />
              Fórum
            </span>
            <Divider />
            <span className="flex flex-row items-center gap-2 hover:text-[#efbf04] cursor-pointer">
              <Icon path={mdiChat} size={.8} />
              Discord
            </span>
          </div>
        </li>
      </ul>
    </menu>
  </>;
}