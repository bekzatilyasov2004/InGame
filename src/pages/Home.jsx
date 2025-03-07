import { Helmet } from 'react-helmet';
import Aksya from '../components/homeComponent/Aksya';
import HomeHero from '../components/Hero/HomeHero';
import Katalog from '../components/homeComponent/Katalog';
import News from '../components/homeComponent/News';
import OurPC from '../components/homeComponent/OurPC';
import Podborem from '../components/homeComponent/Podborem';
import UslugiHome from '../components/homeComponent/UslugiHome';
import ONash from '../components/homeComponent/ONash';
import Blog from '../components/homeComponent/Blog';
import Vapros from '../components/homeComponent/Vapros';
import Zakaz from '../components/homeComponent/Zakaz';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>InGame | Oʻyin va Ish uchun Kuchli Kompyuterlar</title>
        <meta name="description" content="InGame - Oʻzbekistondagi eng yaxshi o'yin va ish uchun kompyuterlar. NVIDIA, ASUS ROG, Cougar, Huntkey rasmiy hamkori. Tez va sifatli yetkazib berish!" />
        <meta name="keywords" content="O'yin kompyuteri, kuchli kompyuter, gaming PC, geýmer kompyuter, Asus ROG, NVIDIA RTX, Toshkent kompyuter do'koni, Huntkey, premium PC" />
        <meta property="og:title" content="InGame | Oʻyin va Ish uchun Kuchli Kompyuterlar" />
        <meta property="og:description" content="Eng kuchli o'yin va ish kompyuterlari. NVIDIA, ASUS ROG va boshqa yetakchi brendlarning hamkori." />
        <meta property="og:image" content="https://i.pinimg.com/1200x/62/b0/a0/62b0a032b4d86127eaa200dc44dd59cb.jpg" />
        <meta property="og:url" content="https://ingame.uz/" />
        <meta name="twitter:title" content="InGame | Kuchli Oʻyin Kompyuterlari" />
        <meta name="twitter:description" content="Oʻyin va ish uchun eng kuchli kompyuterlar! Tezkor yetkazib berish va premium xizmat!" />
        <meta name="twitter:image" content="https://i.pinimg.com/1200x/62/b0/a0/62b0a032b4d86127eaa200dc44dd59cb.jpg" />
      </Helmet>

      <HomeHero />
      <Katalog />
      <OurPC />
      <News />
      <Aksya />
      <Podborem />
      <UslugiHome />
      <ONash />
      <Vapros />
      <Blog />
      <Zakaz />
      <Footer />
    </>
  );
};

export default Home;
