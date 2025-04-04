'use client'

import { useLayoutEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import './Navigation.scss';
import Logo from '../../assets/logo.svg';
import FlagLT from '../../assets/icons/LT.svg';
import FlagGB from '../../assets/icons/GB.svg';
import FlagRU from '../../assets/icons/RU.svg';
import Home from '../../assets/icons/home.svg';
import Airport from '../../assets/icons/airport.svg';
import Bus from '../../assets/icons/bus.svg';
import Vehicle from '../../assets/icons/vehicle.svg';
import Settings from '../../assets/icons/settings.svg';
import openMenuIcon from '../../assets/icons/openMenu.svg';
import closeMenuIcon from '../../assets/icons/closeMenu.svg';
import ArrowDown from '../../assets/icons/caret-down.svg';
import { useParams, usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from "clsx";

const flags: any = {
    lt: FlagLT,
    en: FlagGB,
    ru: FlagRU
}

const translate: any = {
    lt: {
        home: 'Pradzia',
        airport: 'Oro uostas',
        busstation: 'Autobusu stotis',
        vehicle: 'Automobilis',
        settings: 'Nustatymai',
        language: 'Lietuvių kalba',
    },
    en: {
        home: 'Home',
        airport: 'Airport',
        busstation: 'Bus station',
        vehicle: 'Vehicle',
        settings: 'settings',
        language: 'English',
    },
    ru: {
        home: 'Главная',
        airport: 'Аэропорт',
        busstation: 'Автовокзал',
        vehicle: 'Автомобиль',
        settings: 'Настройки',
        language: 'На русском',
    }
}

export default function Navigation() {

    const [languageList, setlanguageList] = useState(false);
    const [toggleMenu, setMenu] = useState(false);

    const { lang } = useParams();

    const home = translate[lang].home;
    const airport = translate[lang].airport;
    const busstation = translate[lang].busstation;
    const vehicle = translate[lang].vehicle;
    const settings = translate[lang].settings;
    const language = translate[lang].language;

    const pathName = usePathname();

    useLayoutEffect(() => {
        if (toggleMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto"
        }
    }, [toggleMenu]);

    return (
        <header className="navigation-wrapper">
            <div className={clsx("navigation", toggleMenu ? "nav-open" : '')}>
                <div className={clsx("link", pathName === `/${lang}/` && 'select')}>
                    <Link href={`/${lang}`}>
                        <img src={Home.src} alt="Home" />
                    </Link>
                </div>
                <div className={clsx("link", pathName === `/${lang}/airport/` && 'select')}>
                    <Link href={`/${lang}/airport`}>
                        <img src={Airport.src} alt="Airport" />
                    </Link>
                </div>
                <div className={clsx("link", pathName === `/${lang}/bus-station/` && 'select')}>
                    <Link href={`/${lang}/bus-station`}>
                        <img src={Bus.src} alt="Bus station" />
                    </Link>
                </div>
                <div className={clsx("link", pathName === `/${lang}/vehicle/` && 'select')}>
                    <Link href={`/${lang}/vehicle`}>
                        <img src={Vehicle.src} alt="Vehicle" />
                    </Link>
                </div>
                {/* <div className={clsx("link", pathName === `/${lang}/settings/` && 'select')}>
                    <Link href={`/${lang}/settings`}>
                        <img src={Settings.src} alt="Settings" />
                    </Link>
                </div> */}
                {/* <div className={clsx("link", "language")} onClick={() => languageList ? setlanguageList(false) : setlanguageList(true)}>
                    <img src={(flags[lang] ?? FlagLT).src} width={15} alt={`spalvotapasaka.lt ${language}`} />
                    <span>{lang ? lang.toUpperCase() : 'LT'}</span>
                    <img src={ArrowDown.src} width={15} alt="Daugiau kalbų" />
                    {
                        languageList == true ?
                            <div className="languageList">
                                <ul>
                                    <li>
                                        <Link href={`/lt/${pathName.slice(4)}`}>
                                            <img src={FlagLT.src} width={15} alt="spalvotapasaka.lt Lietuvių kalba" /><span>LT</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`/en/${pathName.slice(4)}`}>
                                            <img src={FlagGB.src} width={15} alt="spalvotapasaka.lt Anglų kalba" /><span>EN</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`/ru/${pathName.slice(4)}`}>
                                            <img src={FlagRU.src} width={15} alt="spalvotapasaka.lt Rusų kalba" /><span>RU</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            : ''
                    }
                </div> */}
            </div>
        </header>
    )
}