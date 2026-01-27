"use client";

import React from "react";
import Link from "next/link";
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

export default function Main() {
  const [openDropdownId, setOpenDropdownId] = React.useState<'game' | 'media' | null>(null);

  const handleMouseEnter = (id: 'game' | 'media') => () => {
    setOpenDropdownId(id);
  };

  const handleMouseLeave = () => {
    setOpenDropdownId(null);
  };
  return <>
    <menu className="xsm:max-lg:hidden lg:max-2xl:flex lg:max-2xl:flex-row lg:max-2xl:items-start lg:max-2xl:justify-center lg:max-2xl:gap-4">
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
            <Link href="">Bajnokság</Link>
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
        data-part="Large Navigation Menu"
        className="my-2 flex flex-row items-center justify-start gap-2">
        <li
          data-part="Navigation Menu Item"
          className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]"
        >
          <span className="relative flex flex-row items-center justify-start gap-1">
            <Icon path={mdiPlusCircle} size={.8} />
            <Link href="">Kiegészítők</Link>
          </span>
        </li>
        <li
          data-part="Navigation Menu Item"
          className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]"
        >
          <span className="relative flex flex-row items-center justify-start gap-1">
            <Icon path={mdiLightbulbOn} size={.8} />
            <Link href="">Tudástár</Link>
          </span>
        </li>
      </ul>

      <ul
        data-part="Large Navigation Menu"
        className="my-2 flex flex-col items-center justify-start gap-2"
      >
        <li
          onMouseEnter={handleMouseEnter('media')}
          onMouseLeave={handleMouseLeave}
          data-part="Navigation Menu Item"
          className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]"
        >
          <span className="relative flex flex-row items-center justify-start gap-1">
            <Icon path={mdiMultimedia} size={.8} />
            <Link href="">Média</Link>
          </span>
          <div className={`${openDropdownId === 'media' ? "absolute flex flex-col content-center items-center justify-start text-[#d4af37] bg-[url('/tart-hatter.jpg')] bg-size-[100%_100%] border-image-slice-repeat" : "hidden"}`}>
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
        </li>
      </ul>

      <ul
        data-part="Large Navigation Menu"
        className="my-2 flex flex-row items-center justify-start gap-2"
      >
        <li
          data-part="Navigation Menu Item"
          className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]"
        >
          <span className="relative flex flex-row items-center justify-start gap-1">
            <Icon path={mdiForum} size={.8} />
            <Link href="">Fórum</Link>
          </span>
        </li>
        <li
          data-part="Navigation Menu Item"
          className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]"
        >
          <span className="relative flex flex-row items-center justify-start gap-1">
            <Icon path={mdiChat} size={.8} />
            <Link href="">Discord</Link>
          </span>
        </li>
      </ul>
    </menu>
  </>;
}