import { Divider, Button } from 'antd';
import { useDisclosure } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Image
} from "@chakra-ui/react";

const UslugiCard = ({ name, image, info, osebya }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const truncateText = (text, limit) => {
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    return (
        <div className="bg-[#1E1E1E] shadow-lg overflow-hidden w-full max-w-[300px]">
            <img src={image} alt={name} className="w-full h-[177px] object-cover" />
            <div className="p-4">
                <h2 className="text-[16px] md:text-[20px] font-[600] text-[#D3176D]">{name}</h2>
                <h3 className="text-[14px] font-[500] text-white">{info}</h3>
                <Divider style={{ borderColor: '#D9D9D933' }} />
                <ul className="text-white list-disc pl-4">
                    <li>{truncateText(osebya, 30)}</li>
                    <li>{truncateText(osebya, 30)}</li>
                    <li>{truncateText(osebya, 30)}</li>
                </ul>
                <div className='flex md:justify-end justify-center items-center mt-3'>
                    <button
                        onClick={onOpen}
                        className="w-[120px] h-[28px] md:h-[30px] rounded-[2px] md:border-[3px] border-[2px] border-white text-white hover:bg-white hover:text-[#1E1E1E] transition-all duration-300"
                    >
                        Подробнее
                    </button>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={onClose} size="md">
                <ModalOverlay />
                <ModalContent bg="#1E1E1E" color="white">
                    <ModalCloseButton />
                    <ModalBody padding={'0px'}>
                        <Image src={image} alt={name} className="w-full h-[250px] object-cover rounded-lg" />
                        <div className='p-5'>
                            <h2 className='text-[16px] md:text-[20px] font-[600] text-[#D3176D]'>{name}</h2>
                            <h3 className="text-lg font-semibold mt-3">{info}</h3>
                            <Divider style={{ borderColor: '#D9D9D933', margin: '10px 0' }} />
                            <ul className="text-white list-disc pl-4">
                                <li>{osebya}</li>
                                <li>{osebya}</li>
                                <li>{osebya}</li>
                            </ul>
                        </div>
                        <div className='flex justify-center p-3'>
                            <button
                                onClick={onClose}
                                className="w-[120px] h-[30px] rounded-[2px] border-[2px] border-white text-white hover:bg-white hover:text-[#1E1E1E] transition-all duration-300"
                            >
                                Закрыть
                            </button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default UslugiCard;
