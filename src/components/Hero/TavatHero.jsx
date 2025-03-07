import {
    Badge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { BsBarChart } from "react-icons/bs";
import CustomRate from "../../ui/CustomRate";
import CompareModal from "../../pages/CompareModal";

const TavatHero = () => {
    const [like, setLike] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [rassrachku, setRassrachku] = useState(false)
    const [info, setInfo] = useState(false)
    const [gallarey, setGallarey] = useState(false)

    const characteristics = [
        { name: "Тип", value: "проводные наушники" },
        { name: "Конструкция", value: "полноразмерные" },
        { name: "Максимальная воспроизводимая частота", value: "27000 Гц" },
        { name: "Технология", value: "динамические" },
        { name: "Система активного шумоподавления (ANC)", value: "есть" },
        { name: "Минимальная воспроизводимая частота", value: "13 Гц" }
    ];

    return (
        <div className="w-full bg-[#1a1a1a] p-4">
            <div className="w-full max-w-[1250px] mx-auto text-white flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex flex-col-reverse md:flex-row gap-6 items-center md:items-start">
                    <div className="flex flex-row md:flex-col gap-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#404040] flex justify-center items-center">
                                <img src="../naushnik.png" alt="naushnik" className="w-[70%]" />
                            </div>
                        ))}
                    </div>
                    <div className="w-full max-w-[350px] flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4 items-end">
                                <Badge variant="outline" h='28px' p="5px">-50%</Badge>
                                <img src="../fire.png" alt="fire" className="w-[40px] h-[40px]" />
                            </div>
                            <div onClick={() => setLike(!like)}>
                                {like ? <FcLikePlaceholder size="40px" /> : <FcLike size="40px" />}
                            </div>
                        </div>
                        <img src="../naushnik.png" alt="naushnik" className="w-[80%] mx-auto drop-shadow-[0_0px_10px_rgba(255,255,255,0.5)]" />
                    </div>
                </div>
                <div className="w-full max-w-[400px] flex flex-col gap-0 md:gap-4">
                    <h1 className="text-[24px] md:text-[30px] font-[600]">Название продукции</h1>
                    <p className="text-[18px] md:text-[20px] font-[500]">Название модели</p>
                    <div className="flex gap-2 items-center cursor-pointer" onClick={onOpen}>
                        <BsBarChart className="w-[20px]" />
                        <p className="text-[16px] md:text-[18px]">Сравнить</p>
                        <CompareModal  />
                    </div>

                    <div className="flex gap-2 items-center">
                        <CustomRate defaultValue={2.5} />
                        <h1 className="text-[16px] md:text-[18px]">(1 323 отзывов)</h1>
                    </div>
                    <p className="text-[14px]">Ноутбук – мощный мобильный компьютер, который с лёгкостью справится не только с самыми свежими новинками из мира игр.</p>
                    <p className="text-[13px] text-[#D25C92] cursor-pointer" onClick={onOpen}>Читать далее...</p>
                    <h1 className="text-[24px] md:text-[30px] font-[600]">25 550 000 сум</h1>
                    <div className="flex gap-4">
                        <button className="text-[16px] md:text-[18px] font-[700] px-6 py-2 border border-[#D3176D] bg-[#D3176D]">Купить</button>
                        <button className="text-[16px] md:text-[18px] font-[700] px-6 py-2 border border-[#D3176D]">Корзинка</button>
                        <button className="text-[16px] md:text-[18px] font-[700] px-6 py-2 border border-[#D3176D]">Корзинка</button>
                    </div>
                </div>
            </div>
            <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="black" color="white">
                    <ModalHeader>О товаре</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <h1 className="text-[14px] md:text-[16px] font-[400]">
                            HyperX Cloud Alpha — это игровая гарнитура с двухкамерными динамиками...
                        </h1>
                        <h2 className="text-[16px] md:text-[18px] font-[600] mb-3">Общие характеристики</h2>
                        <div>
                            {characteristics.map((char, index) => (
                                <div key={index} className="flex justify-between text-[14px] md:text-[16px] font-[500]">
                                    <span>{char.name}</span>
                                    <span className="flex-1 border-dotted border-b-[1px] border-gray-500 mx-2"></span>
                                    <span>{char.value}</span>
                                </div>
                            ))}
                        </div>
                    </ModalBody>
                    <div className="flex flex-col md:flex-row justify-between items-center bg-[#1E1E1E] p-5">
                        <h1 className="text-[18px] md:text-[20px] font-[600]">25 550 000 сум</h1>
                        <button className="text-[16px] md:text-[18px] font-[700] px-4 md:px-6 py-2 border border-[#D3176D] bg-[#D3176D]">
                            Купить
                        </button>
                    </div>

                </ModalContent>
            </Modal>
        </div>
    );
};

export default TavatHero;
