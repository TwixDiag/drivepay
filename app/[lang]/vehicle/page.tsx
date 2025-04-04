const translate: any = {
    lt: {
        title: 'Automobilis'
    },
    en: {
        title: 'Gallery'
    },
    ru: {
        title: 'Галерея'
    }
}

export default function Vehicle({ params: { lang } }: any) {

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
        return { title: 'Gallery' }
    }
    if (params.lang === 'ru') {
        return { title: 'Галерея' }
    }
    return { title: 'Galerija' }
}