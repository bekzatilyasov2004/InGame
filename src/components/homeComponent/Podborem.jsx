import { useState } from "react";
import { Switch } from "antd";
import { useNavigate } from "react-router-dom";
import PodButton from "../../ui/PodButton";
import NewsCard from "../../ui/NewsCard";

const gameComputers = [
    { img: "game.png", name: "Minecraft", price: "$20" },
    { img: "game.png", name: "Fortnite", price: "$30" },
    { img: "game.png", name: "PUBG", price: "$25" },
    { img: "game.png", name: "Valorant", price: "$10" },
    { img: "game.png", name: "Apex Legends", price: "$15" },
    { img: "game.png", name: "CS:GO", price: "$15" },
    { img: "game.png", name: "Overwatch", price: "$40" },
    { img: "game.png", name: "Rocket League", price: "$20" },
    { img: "game.png", name: "League of Legends", price: "$0" },
    { img: "game.png", name: "Dota 2", price: "$0" },
    { img: "game.png", name: "Warzone", price: "$0" },
    { img: "game.png", name: "FIFA 21", price: "$50" },
];


const Podborem = () => {
    const [activeCategory, setActiveCategory] = useState("price");
    const [activeTag, setActiveTag] = useState("gaming");
    const [showCards, setShowCards] = useState(false);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const handleTagClick = (tag) => {
        setActiveTag(tag);
        setShowCards(false);
    };

    const handleTagNavigate = () => {
        setShowCards(true);
    };

    const renderCards = () => {
        if (!showCards) return null;

        switch (activeTag) {
            case "gaming":
                return (
                    <div className="flex flex-col sm:grid justify-center items-center sm:grid-cols-2 md:flex md:flex-col lg:grid lg:grid-cols-3 gap-6 mt-6">
                        {[...Array(3)].map((_, index) => (
                            <NewsCard
                                key={index}
                                product={{
                                    img: "chai.png",
                                    name: `Gaming Computer ${index + 1}`,
                                    price: "$1200",
                                    aksya: "$999",
                                    info: "High-end gaming computer setup with powerful graphics and processor.",
                                }}
                            />
                        ))}
                    </div>
                );

            case "compact":
                return (
                    <div className="flex flex-col sm:grid justify-center items-center sm:grid-cols-2 md:flex md:flex-col lg:grid lg:grid-cols-3 gap-6 mt-6">
                        {[...Array(3)].map((_, index) => (
                            <NewsCard
                                key={index}
                                product={{
                                    img: "chai.png",
                                    name: `Compact Computer ${index + 1}`,
                                    price: "$1000",
                                    aksya: "$850",
                                    info: "Portable and efficient computer for on-the-go use.",
                                }}
                            />
                        ))}
                    </div>
                );


            case "games":
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                        {gameComputers.map((game, index) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-gray-800 relative group">
                                <img src={game.img} alt={game.name} className="w-full h-[110px] object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h2 className="font-semibold">{game.name}</h2>
                                    <p className="text-sm">{game.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );


            default:
                return null;
        }
    };

    return (
        <div className="w-full bg-[#0F0F0F]">
            <div className="w-full max-w-[1250px] text-white mx-auto">
                <div className="w-full p-5">
                    <h1 className="font-[600] text-center mb-5 text-[18px] md:text-[40px]">
                        Подберем компьютер
                    </h1>

                    <div className="flex justify-center gap-10 mb-5">
                        <PodButton
                            title="По цене"
                            category="price"
                            isActive={activeCategory === "price"}
                            onClick={() => handleCategoryClick("price")}
                        />
                        <PodButton
                            title="По видеокарте"
                            category="gpu"
                            isActive={activeCategory === "gpu"}
                            onClick={() => handleCategoryClick("gpu")}
                        />
                        <PodButton
                            title="По процессору"
                            category="cpu"
                            isActive={activeCategory === "cpu"}
                            onClick={() => handleCategoryClick("cpu")}
                        />
                    </div>

                    <div className="flex gap-5 mb-5 justify-center">
                        <div className="flex flex-col items-center">
                            <span>Игровые</span>
                            <Switch
                                checked={activeTag === "gaming"}
                                onChange={() => handleTagClick("gaming")}
                                checkedChildren="Да"
                                unCheckedChildren="Нет"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <span>Компактные</span>
                            <Switch
                                checked={activeTag === "compact"}
                                onChange={() => handleTagClick("compact")}
                                checkedChildren="Да"
                                unCheckedChildren="Нет"
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <span>По играм</span>
                            <Switch
                                checked={activeTag === "games"}
                                onChange={() => handleTagClick("games")}
                                checkedChildren="Да"
                                unCheckedChildren="Нет"
                            />
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={handleTagNavigate}
                            className="bg-blue-500 text-white py-3 px-10 rounded-lg"
                        >
                            Готов
                        </button>
                    </div>

                    {renderCards()}
                </div>
            </div>
        </div>
    );
};

export default Podborem;
