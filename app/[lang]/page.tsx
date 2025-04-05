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

function getCookie(name: string) {
  if (typeof document === 'undefined') {
    // Если код выполняется на сервере, возвращаем null
    return null;
  }

  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      const value = decodeURIComponent(c.substring(nameEQ.length, c.length));

      try {
        // Пытаемся распарсить значение как JSON
        return JSON.parse(value);
      } catch (e) {
        // Если это не валидный JSON, возвращаем значение как строку
        return value;
      }
    }
  }
  return null; // Возвращаем null, если cookie не найдена
}

export default async function Home({ params }: any) {

  const title = dict[params.lang].title;
  const transportationRequest = dict[params.lang].transportationRequest;

  const cityName = getCookie('city');
  return <Registration />
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
