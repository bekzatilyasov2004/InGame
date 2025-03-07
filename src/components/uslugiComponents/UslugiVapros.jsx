import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon } from '@chakra-ui/react';

const UslugiVapros = () => {
    return (
        <div className="w-full bg-[#1A1A1A] ">
            <div className="w-full max-w-[1250px] pb-10 text-white mx-auto">
                <div className="w-full p-5">
                    <h1 className="font-[600] text-center mb-5 text-[18px] md:text-[40px]">
                        Почему стоит прокачаться в Ingame?                    </h1>
                    <div className="w-[134px] h-[2px] mx-auto bg-[#D3176D]" />
                </div>
                <Accordion allowToggle>
                    <AccordionItem border={'none'}>
                        <h2>
                            <AccordionButton>
                                <Box as='h1' className='text-base md:text-lg font-[600]' flex='1' textAlign='left'>
                                    •Как зарегистрироваться?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel as={'h1'} pb={4} className='text-sm md:text-base'>
                            Для регистрации, нажмите кнопку "Зарегистрироваться" на главной странице и следуйте инструкциям.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='h1' className='text-base md:text-lg font-[600]' flex='1' textAlign='left'>
                                    •Как изменить пароль?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel as={'h1'} pb={4} className='text-sm md:text-base'>
                            Перейдите в раздел настроек, выберите "Изменить пароль" и следуйте шагам.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='h1' className='text-base md:text-lg font-[600]' flex='1' textAlign='left'>
                                    •Где найти мои заказы?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel as={'h1'} pb={4} className='text-sm md:text-base'>
                            Вы можете найти все свои заказы в разделе "Мои заказы" в личном кабинете.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='h1' className='text-base md:text-lg font-[600]' flex='1' textAlign='left'>
                                    •Как отменить заказ?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel as={'h1'} pb={4} className='text-sm md:text-base'>
                            Для отмены заказа, обратитесь в службу поддержки до того, как заказ был отправлен.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='h1' className='text-base md:text-lg font-[600]' flex='1' textAlign='left'>
                                    •Как отследить доставку?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel as={'h1'} pb={4} className='text-sm md:text-base'>
                            Отслеживание доставки доступно в разделе "Мои заказы" после отправки товара.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='h1' className='text-base md:text-lg font-[600]' flex='1' textAlign='left'>
                                    •Как связаться с поддержкой?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel as={'h1'} pb={4} className='text-sm md:text-base'>
                            Для связи с поддержкой, используйте чат на сайте или напишите на почту support@example.com.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default UslugiVapros;
