import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsBarChart } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { Badge, Drawer } from 'antd';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Button, Divider, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from '@chakra-ui/react';
import InputMask from "react-input-mask";
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import SearchHero from './search/SearchHero';







const Header = () => {
    const { t, i18n } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const modalRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("+998 ");
    const [hoveredLink, setHoveredLink] = useState(null);
    const [serch, setSerch] = useState(false)


    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false)

    const toggleContactModal = () => {
        setContactModalOpen(!contactModalOpen);
    };


    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const closeDrawer = () => {  
        setDrawerOpen(false);
    };

    const sections = [
        {
            title: 'production',
            navLinks: [
                {
                    name: 'Игровые ПК',
                    path: '/products',
                    to: [
                        { name: 'Оптимальные' },
                        { name: 'Мощные' },
                        { name: 'Кастомные' },
                        { name: 'Специальные' },
                    ]
                },
                {
                    name: 'Ноутбуки',
                    path: '/products',
                    to: [
                        { name: 'Бюджетные' },
                        { name: 'Геймерские' },
                        { name: 'Профессиональные' },
                    ]
                },
                {
                    name: 'Аксессуары',
                    path: '/products',
                    to: [
                        { name: 'Мыши' },
                        { name: 'Клавиатуры' },
                        { name: 'Коврики' },
                        { name: 'Подставки' },
                    ]
                },
                {
                    name: 'Гарнитуры',
                    path: '/products',
                    to: [
                        { name: 'Проводные' },
                        { name: 'Беспроводные' },
                        { name: 'Игровые' },
                    ]
                },
                {
                    name: 'Столы, кресла',
                    path: '/products',
                    to: [
                        { name: 'Игровые столы' },
                        { name: 'Эргономичные кресла' },
                        { name: 'Офисные кресла' },
                    ]
                },
                {
                    name: 'Комплектующие',
                    path: '/products',
                    to: [
                        { name: 'Процессоры' },
                        { name: 'Видеокарты' },
                        { name: 'Оперативная память' },
                        { name: 'Жесткие диски' },
                    ]
                },
            ],
        },
        {
            title: 'services',
            navLinks: [
                {
                    name: 'Услуги',
                    path: '/uslugi',
                    to: [
                        { name: 'Выбор ПК' },
                        { name: 'Оптимизация' },
                        { name: 'Советы по апгрейду' },
                    ]
                },
                {
                    name: 'Название услуги',
                    path: '/uslugi/nazvanie',
                    to: [
                        { name: 'ОС и программы' },
                        { name: 'Игры и драйверы' },
                    ]
                },
            ],
        },
        {
            title: 'configurator',
            navLinks: [
                {
                    name: 'Пойск',
                    path: 'search',
                },
                {
                    name: 'Оформление',
                    path: 'cart/checkout',
                    
                },
            ],
        },
    ];

    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [drawerOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);



    const toggleSectionModal = (section) => {
        if (currentSection === section) {
            setIsModalOpen(prev => !prev);
        } else {
            setCurrentSection(section);
            setIsModalOpen(true);
        }
    };

    const getCurrentSectionLinks = () => {
        const section = sections.find(sec => sec.title === currentSection);
        return section ? section.navLinks : [];
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
    };

    useEffect(() => {
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            i18n.changeLanguage(savedLang);
        }
    }, []);


    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsModalOpen(false);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isModalOpen]);



    return (
        <header className="w-full z-[9999] relative top-0 left-0 bg-[#1a1a1a] flex justify-center items-center">
            {serch ? <SearchHero serch={serch} setSerch={setSerch} /> : null}
            <div className="w-full h-[80px] max-w-[1250px] px-4 flex justify-between items-center">
                <NavLink to={'/'}>
                    <h1 className="font-[500] text-[#D3176D] text-[22.64px]">
                        {t('title')}<span className="text-white">.uz</span>
                    </h1>
                </NavLink>
                <div className="text-white hidden md:flex gap-10">
                    {sections.map((section, index) => (
                        <h1
                            key={index}
                            onClick={() => toggleSectionModal(section.title)}
                            className="hover:text-[#D3176D] flex items-center justify-center h-auto  cursor-pointer transition-all duration-500 ease-in-out"
                        >
                            {t(section.title)}
                            <IoMdArrowDropdown className='mt-2' size={'22px'} />
                        </h1>
                    ))}
                    <Link to={'/about'} >О Бренде</Link>
                </div>
                <div className="flex gap-5 items-center">
                    <button
                        onClick={openModal}
                        className="hidden lg:block w-[123px] h-[36px] border border-white text-white hover:border-[#D3176D] transition duration-300"
                    >
                        {t('contact')}
                    </button>
                    <select
                        className="hidden lg:block bg-[#1a1a1a] text-white p-2 rounded-md"
                        onChange={(e) => changeLanguage(e.target.value)}
                    >
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                    </select>
                    <select className="hidden lg:block bg-[#1a1a1a] text-white p-2 rounded-md">
                        <option value="uzs">{t('currency.uzs')}</option>
                        <option value="usd">{t('currency.usd')}</option>
                    </select>
                    <BsBarChart color="white" size="25px" />
                    <img src="/search.png" onClick={() => setSerch(!serch)} alt="search" width="20px" />
                    <NavLink className="hidden md:block" to={'cart'}>
                        <Badge size='small' count={1}>
                            <img src="/card.png" alt="card" className="hidden md:block" width="20px" />
                        </Badge>
                    </NavLink>
                    <div>{drawerOpen ? <IoMdClose size="25px" onClick={toggleDrawer} className="cursor-pointer text-white md:hidden" /> : <IoMdMenu size="25px" onClick={toggleDrawer} className="cursor-pointer text-white md:hidden" />}</div>

                </div>
            </div>


            {isModalOpen && (
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    ref={modalRef}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="absolute w-full flex justify-center items-start inset-0 top-[80px] z-50 bg-opacity-0"
                >
                    <div className="bg-[#0a0a0a] text-white p-5 rounded-b-md w-full h-[376px] max-w-[1250px] flex justify-start">
                        {/* Chap tomonda asosiy bo'limlar */}
                        <div className="w-full max-w-[350px] flex flex-col">
                            <ul className="space-y-2">
                                {getCurrentSectionLinks().map((link, index) => (
                                    <li
                                        key={index}
                                        className="group w-full max-w-[325px]"
                                        onMouseEnter={() => setHoveredLink(link)}
                                    >
                                        <NavLink to={link.path} className="transition-all duration-300 ease-in-out">
                                            <div className="flex w-full max-w-[325px] h-auto pl-3 p-1 rounded-md items-center justify-between transition-all duration-300 ease-in-out bg-transparent hover:bg-[#181818] group-hover:text-[#D3176D]">
                                                <div>
                                                    <h1 className="text-[16px] font-[600] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D3176D]">
                                                        {link.name}
                                                    </h1>
                                                    <p className="text-[12px] font-[400] transition-all group-hover:translate-x-1 duration-300 group-hover:text-[#D3176D]">
                                                        Лучшее времяпрепровождение
                                                    </p>
                                                </div>
                                                <IoIosArrowForward
                                                    size={'20px'}
                                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D3176D]"
                                                />
                                            </div>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Divider orientation="vertical" />

                        {hoveredLink && hoveredLink.to && (
                            <div
                                className="flex flex-col w-full max-w-[295px] justify-start items-start pl-5"
                                onMouseEnter={() => setHoveredLink(hoveredLink)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <h1 className="text-[16px] font-[600] text-[#D3176D]">
                                    {hoveredLink.name}
                                </h1>
                                <ul className="mt-2 space-y-1 w-full ">
                                    {hoveredLink.to.map((sub, idx) => (
                                        <div key={idx} className="flex w-full max-w-[295px] h-auto pl-3 p-1 rounded-md items-center justify-between transition-all duration-300 ease-in-out bg-transparent  hover:text-[#D3176D]" >
                                            <div className='w-full max-w-[295px]'>
                                                <li className="text-[14px] font-[500]  ">
                                                    {sub.name}
                                                </li>
                                                <p className="text-[12px] font-[400] ">    Лучшее времяпрепровождение</p>
                                            </div>
                                            <IoIosArrowForward
                                                size={'20px'}
                                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D3176D]"
                                            />
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}

            
            <Drawer
                onClose={closeDrawer}
                open={drawerOpen}
                style={{ background: '#0f0f0f' }}
                width={300}
            >
                <div className="p-4 text-white">
                    {sections.map((section, index) => (
                        <div key={index} className="mb-4">
                            <h2 className="text-lg font-bold mb-2">{t(section.title)}</h2>
                            <ul className="space-y-2">
                                {section.navLinks.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <NavLink
                                            to={link.path}
                                            className="block text-[#D3176D] hover:underline transition-all"
                                            onClick={closeDrawer}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="mt-4">
                        <button
                            onClick={toggleContactModal}
                            className="w-full py-2 border border-white text-white hover:border-[#D3176D] transition duration-300"
                        >
                            {t('contact')}
                        </button>
                    </div>
                </div>
            </Drawer>
            <Modal isOpen={isOpen} size={'xl'} onClose={closeModal} isCentered>
                <ModalOverlay />
                <ModalContent h={'463px'} bg="#0f0f0f" color="white" p={4}>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <h1 className='text-[30px] font-[600px] text-center'><span className='text-[#D3176D] text-[30px] font-[600]'>Оставьте заявку </span>и наш менеджер свяжется с Вами</h1>
                            <Input
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                bg="gray.700"
                                color="white"
                            />
                            <InputMask
                                mask="+998 99 999 99 99"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            >
                                {(inputProps) => (
                                    <Input
                                        {...inputProps}
                                        bg="gray.700"
                                        color="white"
                                        placeholder="+998 99 999 99 99"
                                    />
                                )}
                            </InputMask>
                            <Button colorScheme="blue" w="full">
                                Submit
                            </Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </header>
    );
};

export default Header;
