const translate: any = {
    lt: {
        title: 'Kontaktai'
    },
    en: {
        title: 'Contacts'
    },
    ru: {
        title: 'Контакты'
    }
}

export default function Contacts({params: {lang}}: any) {
    
    const t = translate[lang];

    return (
        <div className="contacts">
            <h1>{t.title}</h1>
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