import '../../styles/Home.scss';
import BackgroundImage from '../../assets/frame1_bg.png';
import Card from '@/components/Card/Card';

const dict: any = {
  lt: {
    title: 'Saugus krovinių ir siuntinių pervežimas visoje Lietuvoje',
    transportationRequest: 'Pateikti pervežimo užklausą',
  },
  en: {
    title: 'Safe transportation of cargo and parcels throughout Lithuania',
    transportationRequest: 'Submit a transportation request'
  },
  ru: {
    title: 'Безопасная перевозка грузов и посылок по Литве',
    transportationRequest: 'Отправить запрос на перевозку'
  }
}

export default function Home({ params }: any) {

  const title = dict[params.lang].title;
  const transportationRequest = dict[params.lang].transportationRequest;

  return (
    <div className="frame" style={{ backgroundImage: `url(${BackgroundImage.src})` }}>
      <div className="left-section">
        <h1>{title}</h1>
        <a href="/transportation-request">{transportationRequest}</a>
      </div>
      <Card />
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  if (params.lang === 'en') {
    return { title: 'SHIP24.LT - Safe transportation of cargo and parcels throughout Lithuania' }
  }
  if (params.lang === 'ru') {
    return { title: 'SHIP24.LT - Безопасная перевозка грузов и посылок по Литве' }
  }
  return { title: 'SHIP24.LT - Saugus krovinių ir siuntinių pervežimas visoje Lietuvoje' }
}
