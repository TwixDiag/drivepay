const translate: any = {
    lt: {
        title: 'Nustatymai'
    },
    en: {
        title: 'Contacts'
    },
    ru: {
        title: 'Контакты'
    }
}

export default function Settings({ params: { lang } }: any) {

    const t = translate[lang];

    return (
        <div className="content">
            <div className="title">
                <h1>{t.title}</h1>
            </div>
        </div>
    )
}

export async function generateMetadata({ params }: any) {
    if (params.lang === 'en') {
        return { title: 'Contacts' }
    }
    if (params.lang === 'ru') {
        return { title: 'Контакты' }
    }
    return { title: 'Kontaktai' }
}