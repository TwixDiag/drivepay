import { redirect } from 'next/navigation';

export default function Page() {
    const url = '/lt';
    redirect(url);
}