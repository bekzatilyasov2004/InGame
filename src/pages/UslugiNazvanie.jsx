import { Helmet } from 'react-helmet';
import Zakaz from '../components/homeComponent/Zakaz';
import NazvanieUslugi from '../components/uslugiComponents/NazvanieUslugi';
import OService from '../components/uslugiComponents/OService';
import UslugiOff from '../components/uslugiComponents/UslugiOff';
import UslugiOur from '../components/uslugiComponents/UslugiOur';
import UslugiPerexod from '../components/uslugiComponents/UslugiPerexod';

const UslugiNazvanie = () => {
  return (
    <div>
      <Helmet>
        <title>IT Xizmatlari | Maxsus Kompyuter Yig‘ish va Texnik Yordam | InGame</title>
        <meta name="description" content="IT xizmatlari: maxsus kompyuter yig‘ish, texnik yordam, dasturiy ta’minot va biznes uchun IT yechimlar. InGame bilan yuqori sifatli xizmatlarga ega bo‘ling!" />
        <meta name="keywords" content="IT xizmatlari, kompyuter yig‘ish, texnik yordam, dasturiy ta’minot, biznes IT yechimlari, gaming PC, o'yin kompyuterlari" />
        <meta property="og:title" content="IT Xizmatlari | Maxsus Kompyuter Yig‘ish va Texnik Yordam | InGame" />
        <meta property="og:description" content="Maxsus kompyuter yig‘ish, texnik yordam va dasturiy ta’minot xizmatlari haqida batafsil ma’lumot." />
        <meta property="og:image" content="https://i.pinimg.com/1200x/34/12/ef/3412efad6b9f8b8d1f62678fefcd7653.jpg" />
        <meta property="og:url" content="https://ingame.uz/uslugi/nazvanie" />
        <meta name="twitter:title" content="IT Xizmatlari | Maxsus Kompyuter Yig‘ish va Texnik Yordam" />
        <meta name="twitter:description" content="Maxsus kompyuter yig‘ish va IT xizmatlari bo‘yicha eng yaxshi echimlar." />
        <meta name="twitter:image" content="https://i.pinimg.com/1200x/34/12/ef/3412efad6b9f8b8d1f62678fefcd7653.jpg" />
      </Helmet>

      <NazvanieUslugi />
      <UslugiOur />
      <UslugiPerexod />
      <OService />
      <UslugiOff />
      <Zakaz />
    </div>
  );
};

export default UslugiNazvanie;
