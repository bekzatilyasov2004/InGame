import { Helmet } from 'react-helmet';
import Blog from "../components/homeComponent/Blog";
import ONash from "../components/homeComponent/ONash";
import Vapros from "../components/homeComponent/Vapros";
import Zakaz from "../components/homeComponent/Zakaz";
import OstalCard from "../components/uslugiComponents/OstalCard";
import UslugiHero from "../components/uslugiComponents/UslugiHero";
import UslugiVapros from "../components/uslugiComponents/UslugiVapros";

const Uslugi = () => {
  return (
    <div>
      <Helmet>
        <title>Bizning Xizmatlar | IT Yechimlar va Konsalting | InGame</title>
        <meta name="description" content="InGame kompaniyasining xizmatlari: IT konsalting, maxsus kompyuter yig‘ish, texnik yordam va dasturiy ta’minot. Ish va o‘yin uchun eng yaxshi xizmatlar!" />
        <meta name="keywords" content="IT xizmatlari, maxsus kompyuter yig‘ish, dasturiy ta’minot, texnik yordam, gaming PC, biznes kompyuter, o'yin kompyuterlari, InGame xizmatlari" />
        <meta property="og:title" content="Bizning Xizmatlar | IT Yechimlar va Konsalting | InGame" />
        <meta property="og:description" content="IT yechimlar, maxsus kompyuter yig‘ish, texnik yordam va dasturiy ta’minot bo‘yicha xizmatlar." />
        <meta property="og:image" content="https://i.pinimg.com/1200x/34/12/ef/3412efad6b9f8b8d1f62678fefcd7653.jpg" />
        <meta property="og:url" content="https://ingame.uz/uslugi" />
        <meta name="twitter:title" content="Bizning Xizmatlar | IT Yechimlar va Konsalting" />
        <meta name="twitter:description" content="Maxsus kompyuter yig‘ish, IT konsalting va texnik yordam xizmatlari." />
        <meta name="twitter:image" content="https://i.pinimg.com/1200x/34/12/ef/3412efad6b9f8b8d1f62678fefcd7653.jpg" />
      </Helmet>

      <UslugiHero />
      <OstalCard />
      <UslugiVapros />
      <ONash />
      <Vapros />
      <Blog />
      <Zakaz />
    </div>
  );
};

export default Uslugi;
