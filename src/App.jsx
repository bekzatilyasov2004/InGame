import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Configurator from "./pages/Configurator";
import About from "./pages/About";
import Uslugi from "./pages/Uslugi";
import CustomBreadcrumb from "./router/CustomBreadcrumb";
import Search from "./pages/Search";
import UslugiNazvanie from "./pages/UslugiNazvanie";
import ProductPage from "./pages/ProductPage";
import Tavar from "./pages/Tavar";
import Korzinka from "./pages/Korzinka";
import PageNotFound from "./pages/PageNotFound";
import CheckoutPage from "./pages/Checkout";

function App() {
  return (
    <>
      <Header />
      <CustomBreadcrumb />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="uslugi" element={<Uslugi />}/>
        <Route path="uslugi/nazvanie" element={<UslugiNazvanie />} />
        <Route path="configurator" element={<Configurator />} />
        <Route path="configurator/tavar" element={<Tavar />} />
        <Route path="about" element={<About />} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Korzinka />} />
        <Route path="cart/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
