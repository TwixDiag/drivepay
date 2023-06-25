"use client"

import './Footer.scss';

import { useParams } from 'next/navigation';

const translate: any = {
    lt: {
        rights: 'Visos teisės saugomos'
    },
    en: {
        rights: 'All rights reserved'
    },
    ru: {
        rights: 'Все права защищены'
    }
}

export default function Footer() {

    const { lang } = useParams();

    const t = translate[lang];

    return (
        <footer className="footer">
            <span>{t.rights} &copy; {new Date().getFullYear()}</span>
        </footer>
    )
}