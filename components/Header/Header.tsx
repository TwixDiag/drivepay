'use client'

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import './Header.scss';
import Logo from '../../assets/logo.svg';
import FlagLT from '../../assets/icons/LT.svg';
import FlagGB from '../../assets/icons/GB.svg';
import FlagRU from '../../assets/icons/RU.svg';
import ArrowDown from '../../assets/icons/caret-down.svg';
import { useParams, usePathname } from 'next/navigation';
import clsx from "clsx";

const flags: any = {
    lt: FlagLT,
    en: FlagGB,
    ru: FlagRU
}

const translate: any = {
    lt: {
        home: 'Pradinis',
        transportation: 'Pervežimas',
        about: 'Apie mus',
        info: 'Informacija',
        contacts: 'Kontaktai',
        language: 'Lietuvių kalba',
    },
    en: {
        home: 'Home',
        transportation: 'Transportation',
        about: 'About us',
        info: 'Information',
        contacts: 'Contacts',
        language: 'English',
    },
    ru: {
        home: 'Главная',
        transportation: 'Перевозки',
        about: 'О нас',
        info: 'Информация',
        contacts: 'Контакты',
        language: 'На русском',
    }
}

export default function Header() {

    const [languageList, setlanguageList] = useState(false);

    const { lang } = useParams();

    const home = translate[lang].home;
    const transportation = translate[lang].transportation;
    const about = translate[lang].about;
    const info = translate[lang].info;
    const contacts = translate[lang].contacts;
    const language = translate[lang].language;

    const pathName = usePathname();

    return (
        <header className="header">
            <div className="logo">
                <Link href={`/${lang}/`}>
                    <Image src={Logo} alt="Ship24.lt" width={173} height={44} />
                </Link>
            </div>
            <div className="navigation">
                <div className={clsx("link", pathName === `/${lang}/` && 'select')}>
                    <Link href={`/${lang}`}>{home}</Link>
                </div>
                <div className={clsx("link", pathName === `/${lang}/transportation/` && 'select')}>
                    <Link href={`/${lang}/transportation`}>{transportation}</Link>
                </div>
                <div className={clsx("link", pathName === `/${lang}/about/` && 'select')}>
                    <Link href={`/${lang}/about`}>{about}</Link>
                </div>
                <div className={clsx("link", pathName === `/${lang}/info/` && 'select')}>
                    <Link href={`/${lang}/info`}>{info}</Link>
                </div>
                <div className={clsx("link", pathName === `/${lang}/contacts/` && 'select')}>
                    <Link href={`/${lang}/contacts`}>{contacts}</Link>
                </div>
                <div className="link language" onClick={() => languageList ? setlanguageList(false) : setlanguageList(true)}>
                    <img src={(flags[lang] ?? FlagLT).src} width={15} alt={`Ship24.lt ${language}`} />
                    <span>{lang ? lang.toUpperCase() : 'LT'}</span>
                    <img src={ArrowDown.src} width={15} alt="Daugiau kalbų" />
                    {
                        languageList == true ?
                            <div className="languageList">
                                <ul>
                                    <li>
                                        <Link href={`/lt/${pathName.slice(4)}`}>
                                            <img src={FlagLT.src} width={15} alt="Ship24.lt Lietuvių kalba" /><span>LT</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`/en/${pathName.slice(4)}`}>
                                            <img src={FlagGB.src} width={15} alt="Ship24.lt Anglų kalba" /><span>EN</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`/ru/${pathName.slice(4)}`}>
                                            <img src={FlagRU.src} width={15} alt="Ship24.lt Rusų kalba" /><span>RU</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            : ''
                    }
                </div>
            </div>
        </header>
    )
}