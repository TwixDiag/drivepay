import { redirect } from 'next/navigation';

export default function Page() {
    const url = '/drivepay/ru';
    // const url = '/ru';
    redirect(url);
}