import '../../styles/Home.scss';
import BackgroundImage from '../../assets/frame1_bg.png';
import decorationLine1 from '../../assets/line1.svg';
import decorationLine2 from '../../assets/line2.svg';
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
    <div className="frame">
      <div className="background" style={{ backgroundImage: `url(${BackgroundImage.src})` }}></div>
      <div className="left-section">
        <div className="decoration-line1">
          <img src={decorationLine1.src} alt="" />
        </div>
        <h1>{title}</h1>
        <a href="/transportation-request">{transportationRequest}</a>
        <div className="decoration-line2">
          <img src={decorationLine2.src} alt="" />
        </div>
      </div>
      <Card />
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  if (params.lang === 'en') {
    return { title: 'Safe transportation of cargo and parcels throughout Lithuania' }
  }
  if (params.lang === 'ru') {
    return { title: 'Безопасная перевозка грузов и посылок по Литве' }
  }
  return { title: 'Saugus krovinių ir siuntinių pervežimas visoje Lietuvoje' }
}
