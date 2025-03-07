import { Checkbox } from "antd";
import { useState } from "react";
import { FaTruckArrowRight } from "react-icons/fa6";
import Footer from '../components/Footer'

const CheckoutPage = () => {
  const [select, setSelect] = useState(null);
  const selectedProducts = [
    { id: 1, name: "Товар 1", price: "5 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 2, name: "Товар 2", price: "7 000 000 сум", img: '../nout.png', des: 'Кол-во: 1 ' },
    { id: 3, name: "Товар 3", price: "10 343 444 сум", img: '../nout.png', des: 'Кол-во: 1 ' }
  ];

  const handleSelect = (option) => {
    setSelect(option);
  };

  return (
    <div className="w-full bg-[#1A1A1A] pb-10 overflow-x-hidden">
      <div className="w-full h-screen min-h-[130vh] max-w-[1250px] text-white mx-auto">
        <div className="flex justify-between items-start">
          <div className="flex p-10 flex-col items-start justify-start gap-3">
            <h1 className="text-[16px] font-[600]">Оформить заказ</h1>
            <form className="flex flex-col gap-4">
              <div className="flex p-2 w-[360px] h-[40px] bg-[#2D2D2D] justify-start items-end gap-3">
                <p className="text-[14px] pl-[15px] font-[600]">Ф.И.О.</p>
                <input className="bg-transparent outline-none w-full border-b-[1px] border-[#f3f3f3]" />
              </div>
              <div className="flex p-2 w-[360px] h-[40px] bg-[#2D2D2D] justify-start items-end gap-3">
                <p className="text-[14px]  font-[600]">Номер телефона</p>
                <input className="bg-transparent outline-none w-full max-w-[220px] border-b-[1px] border-[#f3f3f3]" />
              </div>
            </form>
            <div>
              <h1 className="text-[16px] font-[600]">Способы получения заказа</h1>
              <div className="flex justify-start items-center gap-10">
                <div className="flex items-center justify-center gap-3">
                  <Checkbox onChange={() => handleSelect('delivery')} checked={select === 'delivery'} />
                  <h1 className="text-[16px] font-[500]">Доставка</h1>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Checkbox onChange={() => handleSelect('pickup')} checked={select === 'pickup'} />
                  <h1 className="text-[16px] font-[500]">Самовывоз</h1>
                </div>
              </div>
            </div>
            {[ 
              { key: "delivery", label: "Стандартная доставка", duration: "1 день", width: "w-[420px]" },
              { key: "mesta", label: "Бесплатная доставка по Ташкенту", duration: "4 часа", width: "w-[540px]" },
              { key: "sam", label: "Доставка в регионы", duration: "По тарифу экспресс-почты BTS или Fargo", width: "w-[540px]" }
            ].map(({ key, label, duration, width }) => (
              <div
                key={key}
                onClick={() => handleSelect(key)}
                className={`${width} h-[50px] gap-2 p-5 border-[1px] flex justify-start items-center cursor-pointer transition-all duration-300 ${select === key ? 'border-[#D3176D] bg-[#D3176D] text-white' : 'border-[#f3f3f3] text-[#f3f3f3]'}`}
              >
                <FaTruckArrowRight
                  className={`transition-all duration-300 ${select === key ? 'text-white' : 'text-[#f3f3f3]'}`}
                  size={'30px'}
                />
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-[16px] font-[600]">{label}</h1>
                  <p className="text-[14px] font-[500]">{duration}</p>
                </div>
              </div>
            ))}
            <div className="flex p-2 w-[550px] h-[40px] bg-[#2D2D2D] justify-start items-end gap-3">
              <p className="text-[14px]  font-[600]">Адрес доставки  *</p>
              <input className="bg-transparent outline-none w-full max-w-[400px] border-b-[1px] border-[#f3f3f3]" />
            </div>
          <div className="text-[14px] font-[600] ">
            <h1>СТОИМОСТЬ И УСЛОВИЯ ДОСТАВКИ:</h1>
          </div>
          <ul className="list-disc pl-5">
            <li>Доставка в течении 1 дня бесплатная.</li>
            <li>Доставка осуществляется по городу Ташкент до локации.            </li>
            <li>Доставка мебели по городу Ташкент 100.000 сум (внутри ТКАД)            </li>
            <li>Доставка в регионы по тарифу экспресс-почты BTS или Fargo.            </li>
            <li>Время доставки по Ташкенту осуществляется в течении 1 дня .            </li>
            <li>Срочные доставки по тарифу  «Яндекс доставка» (100% предоплата)            </li>
          </ul>
          <div>
            <h1 className="text-[16px] font-[700]">Комментарий к заказу</h1>
            <textarea className="bg-transparent w-[540px] h-[105px] border-[1px] border-white p-2 mt-3" />
          </div>
          <button className="text-[18px] font-[700] w-[365px] h-[50px] bg-[#D3176D] animate-pulse">Оформить заказ</button>
          </div>
          <div className="w-[244px] min-w-[244px] mr-5 h-[144px] bg-[#1A1A1A] border-[3px] flex justify-between p-4 items-center flex-col border-[#D3176D]">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[14px] font-[700]">Товаров:</h1>
              <p className="text-[14px] font-[700]">{selectedProducts.length}</p>
            </div>
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[14px] font-[700]">Итого:</h1>
              <p className="text-[14px] font-[700]">22 343 444 сум</p>
            </div>
          </div>
          <div className="w-[500px] hide-scrollbar   h-[450px] p-5 overflow-auto  bg-[#131212]">
            {selectedProducts.map((product) => (
              <div key={product.id} className="hide-scrollbar  flex gap-5 justify-start items-center p-2 border-b border-[#f3f3f3]">
                <div className="w-[100px] h-[100px] bg-[#404040] flex justify-center items-center">
               <img src={product.img} alt="tavar" className="w-[70px] h-[65px]"  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-[16px] font-[600]">{product.name}</h1>
                  <p className="text-[14px] font-[400]">{product.des}</p>
                  <p className="text-[14px] font-[600]">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
