import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GoShieldCheck } from "react-icons/go";
import { BsBarChartFill } from "react-icons/bs";
import { FaDollarSign, FaClock, FaCheck, FaSearch, FaTools, FaMicrochip, FaThermometerHalf, FaBolt, FaCogs } from "react-icons/fa";
import { LiaMagicSolid } from "react-icons/lia";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Divider, Checkbox } from "@chakra-ui/react";

const servicesData = {
  "Стандартное охлаждение": [
    {
      title: "HYPERPC SERVICE CUSTOM PLUS",
      dis: "Расширенный и наиболее оптимальный пакет обслуживания",
      services: [
        { icon: <FaSearch />, text: "Комплексная диагностика" },
        { icon: <FaTools />, text: "Очистка системы и диагностика" },
        { icon: <FaThermometerHalf />, text: "Проверка температурного режима" },
        { icon: <FaBolt />, text: "Тестирование энергопотребления" }
      ]
    },
    {
      title: "HYPERPC SERVICE CUSTOM PREMIUM",
      dis: "Максимальный пакет для полного технического обслуживания",
      services: [
        { icon: <FaSearch />, text: "Комплексная диагностика" },
        { icon: <FaTools />, text: "Удаление пыли и замена термопасты" },
        { icon: <FaMicrochip />, text: "Оптимизация работы процессора и памяти" },
        { icon: <FaCogs />, text: "Настройка BIOS и драйверов" }
      ]
    }
  ],
  "Кастомное охлаждение": [
    {
      title: "HYPERPC SERVICE CUSTOM PLUS",
      dis: "Услуги по улучшению охлаждающей системы и стабильности работы",
      services: [
        { icon: <FaMicrochip />, text: "Оптимизация процессора и памяти" },
        { icon: <FaTools />, text: "Очистка системы от пыли" },
        { icon: <FaClock />, text: "Мониторинг стабильности системы" }
      ]
    },
    {
      title: "HYPERPC SERVICE CUSTOM PREMIUM",
      dis: "Продвинутый пакет для полной настройки кастомного охлаждения",
      services: [
        { icon: <FaMicrochip />, text: "Оптимизация процессора и памяти" },
        { icon: <FaTools />, text: "Очистка системы от пыли" },
        { icon: <FaCheck />, text: "Установка и настройка кастомного охлаждения" },
        { icon: <FaCogs />, text: "Калибровка системы охлаждения" }
      ]
    }
  ],
  "Дополнительные услуги": [
    {
      title: "HYPERPC SERVICE CUSTOM PLUS",
      dis: "Дополнительные улучшения для повышения производительности системы",
      services: [
        { icon: <FaMicrochip />, text: "Обновление процессора и видеокарты" },
        { icon: <GoShieldCheck />, text: "Защита от вредоносных программ" }
      ]
    },
    {
      title: "HYPERPC SERVICE CUSTOM PREMIUM",
      dis: "Максимальная производительность и безопасность системы",
      services: [
        { icon: <FaMicrochip />, text: "Обновление процессора и видеокарты" },
        { icon: <GoShieldCheck />, text: "Очистка системы от вредоносных программ" },
        { icon: <BsBarChartFill />, text: "Повышение производительности ПК" }
      ]
    }
  ]
};


const UslugiPerexod = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabPosition, setTabPosition] = useState({ left: 0, width: 0 });
  const tabsRef = useRef([]);

  useEffect(() => {
    if (tabsRef.current[activeTab]) {
      const tab = tabsRef.current[activeTab];
      setTabPosition({ left: tab.offsetLeft, width: tab.offsetWidth });
    }
  }, [activeTab]);

  return (
    <div className="w-full bg-[#0F0F0F] pb-10 overflow-x-hidden">
      <div className="w-full max-w-[1250px] text-white flex-col mx-auto flex justify-center items-center">
        <h1 className="text-[40px] font-[600] mt-10">Пакеты обслуживания</h1>
        <Box mt={5} className="w-full max-w-[800px] mx-auto relative">
          <Tabs variant='unstyled' align="center" onChange={(index) => setActiveTab(index)}>
            <TabList className="flex justify-center gap-10 border-b border-gray-600 relative">
              {Object.keys(servicesData).map((tab, index) => (
                <Tab key={index} ref={(el) => (tabsRef.current[index] = el)} className="text-white text-[18px] font-[500] cursor-pointer relative">
                  {tab}
                </Tab>
              ))}
              <motion.div className="absolute bottom-0 h-[2px] bg-[#D3176D]" animate={{ left: tabPosition.left, width: tabPosition.width }} transition={{ type: "spring", stiffness: 120, damping: 12 }} />
            </TabList>
            <TabPanels>
              {Object.values(servicesData).map((serviceGroup, index) => (
                <TabPanel key={index} className="flex flex-row gap-10">
                  {serviceGroup.map((service, i) => (
                    <ServiceCard key={i} dis={service.dis} title={service.title} services={service.services} />
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, dis, services }) => (
  <div className="flex flex-col justify-between bg-[#1E1E1E] w-[375px] h-[600px] p-5 rounded-xl mt-5 text-left">
    <div >
      <div className="p-3">
        <h2 className="orbitron text-[16px] font-[600] text-center">{title}</h2>
        <p className="text-[13px] font-[500] text-center ">{dis}</p>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-3">
            {service.icon}
            <h1 className="text-[14px] font-[500]">{service.text}</h1>
          </div>
        ))}
      </div>
    </div>
    <div>
      <Divider />
      <div className="flex items-center gap-3 mt-2">
      <Checkbox />
        <p className="text-[13px] font-[500] ">Заказать забор и возврат ПК</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col mt-3">
          <h1 className="text-[13px] font-[500]">Стоимость:<span> от 3 000 000 сум</span></h1>
          <p className="text-[13px] font-[500] text-[#909090]">Срок работы: до 10 дней</p>
        </div>
        <button className="w-[110px] h-[36px] border-[2px] border-[#D3176D] text-[17px] font-[700] ">Заказать</button>
      </div>
    </div>
  </div>
);

export default UslugiPerexod;
