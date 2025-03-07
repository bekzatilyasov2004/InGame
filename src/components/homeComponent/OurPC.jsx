import PCCard from "../../ui/PCCard";

const OurPC = () => {
  const pcData = [
    {
      image: "/block.png",
      title: "Gaming Beast",
      description: "High-performance gaming PC for enthusiasts.",
      specs: [
        "Processor: AMD Ryzen 9 5900X",
        "GPU: NVIDIA RTX 3080",
        "RAM: 32GB DDR4",
        "Storage: 1TB SSD",
      ],
      price: "$2,499",
      discountPrice: "$2,299",
      screenSize: 27,
      hertz: 144,
      fps: 200,
      gtaVPerformance: 120,
    },
    {
      image: "/block.png",
      title: "Workstation Pro",
      description: "Powerful workstation for professional workflows.",
      specs: [
        "Processor: Intel Core i9-12900K",
        "GPU: NVIDIA Quadro RTX 4000",
        "RAM: 64GB DDR4",
        "Storage: 2TB NVMe SSD",
      ],
      price: "$3,499",
      discountPrice: "$3,299",
      screenSize: 32,
      hertz: 60,
      fps: 100,
      gtaVPerformance: 90,
    },
    {
      image: "/block.png",
      title: "Budget Gamer",
      description: "Affordable gaming PC for casual players.",
      specs: [
        "Processor: AMD Ryzen 5 5600X",
        "GPU: NVIDIA GTX 1660",
        "RAM: 16GB DDR4",
        "Storage: 512GB SSD",
      ],
      price: "$999",
      discountPrice: "$899",
      screenSize: 24,
      hertz: 75,
      fps: 60,
      gtaVPerformance: 45,
    },
  ];

  return (
    <div className="w-full bg-[#1a1a1a] p-5  flex justify-center items-center">
      <div className="w-full max-w-[1250px] mx-auto">
      <h1 className=" mb-5 font-[600] text-[18px] md:text-[40px]  text-white">Наши ПК</h1>
      <div className="w-full max-w-[1250px] mx-auto  h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {pcData.map((pc, index) => (
          <PCCard
            key={index}
            image={pc.image}
            title={pc.title}
            description={pc.description}
            specs={pc.specs}
            price={pc.price}
            discountPrice={pc.discountPrice}
            screenSize={pc.screenSize}
            hertz={pc.hertz}
            fps={pc.fps}
            gtaVPerformance={pc.gtaVPerformance}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default OurPC;
