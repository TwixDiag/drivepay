export default function About() {
    return (
        <div>About page</div>
    )
}

export async function generateMetadata({ params }: any) {
    if (params.lang === 'en') {
        return { title: 'SHIP24.LT - About us' }
    }
    if (params.lang === 'ru') {
        return { title: 'SHIP24.LT - О нас' }
    }
    return { title: 'SHIP24.LT - Apie mus' }
}