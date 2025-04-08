import AirportList from "@/components/AirportList/AirportList";

const translate: any = {
    lt: {
        title: 'Skrydziai'
    },
    en: {
        title: 'About'
    },
    ru: {
        title: 'Аэропорт'
    }
}

export default function Airport({ params: { lang } }: any) {
    const t = translate[lang];

    return (
        <div className="content">
            <div className="title">
                <h1>{t.title}</h1>
                <AirportList />
            </div>
        </div>
    )
}

export async function generateMetadata({ params }: any) {
    if (params.lang === 'en') {
        return { title: 'About' }
    }
    if (params.lang === 'ru') {
        return { title: 'О нас' }
    }
    return { title: 'Apie mus' }
}