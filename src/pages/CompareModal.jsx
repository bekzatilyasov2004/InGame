import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from "@chakra-ui/react";
import React from "react";

const CompareModal = ({ isOpen, onClose, products }) => {
    return (
        <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg="black" color="white">
                <ModalHeader>Сравнение товаров</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="overflow-x-auto">
                        <Table variant="simple" colorScheme="gray">
                            <Thead>
                                <Tr>
                                    <Th>Изображение</Th>
                                    {products.map((product, index) => (
                                        <Th key={index}>
                                            <img src={product.image} alt={product.name} className="w-[100px] h-[100px]" />
                                        </Th>
                                    ))}
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Название</Td>
                                    {products.map((product, index) => (
                                        <Td key={index}>{product.name}</Td>
                                    ))}
                                </Tr>
                                <Tr>
                                    <Td>Цена</Td>
                                    {products.map((product, index) => (
                                        <Td key={index}>{product.price} сум</Td>
                                    ))}
                                </Tr>
                                <Tr>
                                    <Td>Основные характеристики</Td>
                                    {products.map((product, index) => (
                                        <Td key={index}>
                                            {product.characteristics.map((char, i) => (
                                                <div key={i} className="text-sm">
                                                    <strong>{char.name}:</strong> {char.value}
                                                </div>
                                            ))}
                                        </Td>
                                    ))}
                                </Tr>
                            </Tbody>
                        </Table>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CompareModal;
