import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const pathNames = {
    about: "О бренде",
    uslugi: "Услуги",
    dashboard: "Boshqaruv paneli",
    profile: "Profil",
    nazvanie: 'Название услуги',
    cart: 'Корзина',
    checkout: 'Оформить заказ',
    search: 'Пойск'
};

const CustomBreadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter((path) => path);

    if (paths.length === 0) return null;

    return (
        <div className="w-full bg-[#1a1a1a]">
            <div className="w-full px-4 sm:px-6 md:px-8 py-3 flex flex-wrap items-center max-w-[1250px] text-white mx-auto">
                <Breadcrumb
                    separator={<span className="inline-block w-[7px] h-[7px] rounded-full bg-[#D3176D] mx-2"></span>}
                    className="text-sm sm:text-base"
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to="/" className="hover:text-[#D3176D] transition">
                            Главная
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {paths.map((path, index) => {
                        const to = `/${paths.slice(0, index + 1).join("/")}`;
                        const displayName = pathNames[path] || path.replace(/-/g, " ");

                        return (
                            <BreadcrumbItem key={to}>
                                <BreadcrumbLink 
                                    as={Link} 
                                    to={to} 
                                    className="hover:text-[#D3176D] transition max-w-[120px] truncate"
                                >
                                    {displayName}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        );
                    })}
                </Breadcrumb>
            </div>
        </div>
    );
};

export default CustomBreadcrumb;
