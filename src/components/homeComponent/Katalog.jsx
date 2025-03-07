import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useKatalogStore from "../../store/useGetCategorie"; 

const Katalog = () => {
  const { katalog, fetchKatalog } = useKatalogStore();

  useEffect(() => {
    fetchKatalog(); 
  }, []);

  return (
    <div className="w-full bg-[#0f0f0f] text-white flex justify-center p-10">
      <div className="w-full max-w-[850px]">
        <div className="text-center mb-10">
          <h1 className="font-[600] text-[32px] sm:text-[40px]">
            КАТАЛОГ <span className="orbitron">INGAME.UZ</span>
          </h1>
          <p className="text-[18px] sm:text-[22px] font-[500]">
            Выберите себе в каталоге для максимально комфортной игры
          </p>
        </div>
        <div className="w-full mb-5 flex justify-center items-center">
          <div className="w-[134px] h-[2px] bg-[#D3176D]"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {katalog.map((item) => (
            <NavLink
              key={item.id}
              to={`/products/${item.slug}`} 
              className="block p-4 rounded-lg hover:shadow-md"
            >
              <img
                src={item.image || "/mono.png"} 
                alt={item.name}
                className="w-full object-cover rounded-md mb-2"
              />
              <h2 className="text-[16px] font-[600] text-center">{item.name}</h2>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Katalog;
