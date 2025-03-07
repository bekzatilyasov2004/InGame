const PCCard = ({ image, title, description, specs, price, discountPrice, screenSize, hertz, fps, gtaVPerformance }) => {
    return (
      <div className="w-[300px] md:w-[356px] h-[699px] bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg text-white flex flex-col">
        <div className="h-[40%] flex justify-center items-center">
          <img src={image} alt={title} style={{ filter: 'drop-shadow(0px 0px 30px rgba(225,225,225,0.3))' }} className="w-[250px] md:w-[300px] object-cover" />
        </div>
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-gray-400 mb-4">{description}</p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              {specs.map((spec, index) => (
                <li key={index}>- {spec}</li>
              ))}
              <li>- Screen Size: {screenSize}"</li>
              <li>- Refresh Rate: {hertz}Hz</li>
            </ul>
          </div>
          <div>
            <table className="w-full  border-2 border-white text-sm text-gray-400 mb-4">
              <thead>
                <tr className="text-center">
                  <th className="p-1 text-start border-b border-white">Game/FPS</th>
                  <th className="p-1 border-b border-white">1080p</th>
                  <th className="p-1 border-b border-white">1440p</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="p-1 text-start border-b border-white">GTA V</td>
                  <td className="p-1 border-b border-white">{gtaVPerformance} FPS</td>
                  <td className="p-1 border-b border-white">{gtaVPerformance} FPS</td>
                </tr>
              </tbody>
            </table>
            <div className="text-lg font-semibold text-[#D3176D] mb-2">
              {discountPrice ? `$${discountPrice}` : price}
            </div>
            {discountPrice && (
              <div className="text-sm line-through text-gray-500">{price}</div>
            )}
          </div>
          <div className="mt-4 flex justify-between">
            <button className="bg-[#D3176D] px-4 py-2 rounded-lg text-white hover:bg-[#b01559]">
              Купить
            </button>
            <button className="bg-[#2A2A2A] px-4 py-2 rounded-lg text-gray-300 hover:bg-[#3a3a3a]">
              Подборка
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PCCard;
  