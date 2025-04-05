import Registration from '@/components/Registration/Registration';
import '../../styles/Home.scss';
import { getSettings } from '@/utils/getSettings';

const dict: any = {
  lt: {
    title: 'Stebekite savo darbo laika ir valdykite pajamas',
    transportationRequest: 'Pateikti pervežimo užklausą',
  },
  en: {
    title: 'Stebekite savo darbo laika ir valdykite pajamas',
    transportationRequest: 'Submit a transportation request'
  },
  ru: {
    title: 'Stebekite savo darbo laika ir valdykite pajamas',
    transportationRequest: 'Отправить запрос на перевозку'
  }
}

export default async function Home({ params }: any) {

  const title = dict[params.lang].title;
  const transportationRequest = dict[params.lang].transportationRequest;
  const settings = await getSettings();
  return (
    <div className="frame">
      <Registration />
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  if (params.lang === 'en') {
    return { title: 'drive smart, earn fast' }
  }
  if (params.lang === 'ru') {
    return { title: 'drive smart, earn fast' }
  }
  return { title: 'drive smart, earn fast' }
}
