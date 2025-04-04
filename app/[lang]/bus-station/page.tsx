const translate: any = {
    lt: {
        title: 'Stotis'
    },
    en: {
        title: 'Achievements'
    },
    ru: {
        title: 'Достижения'
    }
}

export default function BusStation({ params: { lang } }: any) {

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
        return { title: 'Achievements' }
    }
    if (params.lang === 'ru') {
        return { title: 'Достижения' }
    }
    return { title: 'Pasiekimai' }
}