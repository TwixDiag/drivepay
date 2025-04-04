import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import { Fragment } from 'react';


export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Fragment>
            {children}
            <Navigation />
            {/* <Footer /> */}
        </Fragment>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'lt' }, { lang: 'en' }, { lang: 'ru' }];
}