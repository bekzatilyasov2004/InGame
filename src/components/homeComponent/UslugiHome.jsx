import UslugiCard from "../../ui/UslugiCard";

const services = [
    { id: 1, name: 'Service 1', image: 'uslugi.png',info: 'Закастомизируем ваш ПК по вашему любимому дизайну',osebya: 'описание услуги описание услуги описание услуги описание услуги' },
    { id: 2, name: 'Service 2', image: 'uslugi.png',info: 'Закастомизируем ваш ПК по вашему любимому дизайну',osebya: 'описание услуги' },
    { id: 3, name: 'Service 3', image: 'uslugi.png',info: 'Закастомизируем ваш ПК по вашему любимому дизайну',osebya: 'описание услуги' },
    { id: 4, name: 'Service 4', image: 'uslugi.png',info: 'Закастомизируем ваш ПК по вашему любимому дизайну',osebya: 'описание услуги' },
    { id: 5, name: 'Service 5', image: 'uslugi.png',info: 'Закастомизируем ваш ПК по вашему любимому дизайну',osebya: 'описание услуги' },
    { id: 6, name: 'Service 6', image: 'uslugi.png',info: 'Закастомизируем ваш ПК по вашему любимому дизайну',osebya: 'описание услуги' },
    { id: 7, name: 'Service 7', image: 'uslugi.png',info: 'Закастомизируем ваш ПК по вашему любимому дизайну',osebya: 'описание услуги' },
    { id: 8, name: 'Service 8', image: 'uslugi.png',info: 'Закастомизируем ваш ПК по вашему любимому дизайну',osebya: 'описание услуги' },
  ];


const UslugiHome = () => {
    return (
        <div className="w-full bg-[#1A1A1A] p-5 flex justify-center items-center">
        <div className="w-full max-w-[1250px] mx-auto">
          <h1 className="mb-5 font-[600] text-[18px] md:text-[40px] text-white">Услуги</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
            {services.map((service) => (
              <UslugiCard key={service.id} info={service.info} osebya={service.osebya} name={service.name} image={service.image} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default UslugiHome
