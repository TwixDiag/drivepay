import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Fragment } from 'react';


export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'lt' }, { lang: 'en' }, { lang: 'ru' }];
}