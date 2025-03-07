import NewsCard from '../../ui/NewsCard'

const praducts = [
  {
    name: 'Название кресла 1',
    price: 4852000,
    aksya: 4500000,
    info: 'Подробное инфо о кресле 1',
    img: '/chai.png',
  },
  {
    name: 'Название кресла 2',
    price: 5200000,
    aksya: 4800000,
    info: 'Подробное инфо о кресле 2',
    img: '/chai.png',
  },
  {
    name: 'Название кресла 3',
    price: 5500000,
    aksya: 5100000,
    info: 'Подробное инфо о кресле 3',
    img: '/chai.png',
  },
  {
    name: 'Название кресла 4',
    price: 6000000,
    aksya: 5700000,
    info: 'Подробное инфо о кресле 4',
    img: '/chai.png',
  }
]

const News = () => {
  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="w-full h-[600px] md:h-[620px]  max-w-[1250px] text-white mx-auto">
        <div className="w-full p-5">
          <h1 className="font-[600] mb-5 text-[18px] md:text-[40px] ">Новинки</h1>
          <div className="w-full flex gap-5  overflow-x-auto justify-start hide-scrollbar">
            {praducts.map((product, index) => (
              <NewsCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
