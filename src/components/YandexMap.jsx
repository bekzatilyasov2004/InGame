import { useEffect } from "react";

const YandexMap = () => {
  useEffect(() => {
    if (window.ymaps) {
      window.ymaps.ready(() => {
        const mapElement = document.getElementById("map");
        if (!mapElement._ymaps) {
          const myMap = new window.ymaps.Map("map", {
            center: [41.301565410007015, 69.2759505134931], 
            zoom: 14,
          });

          const userPlacemark = new window.ymaps.Placemark([41.2995, 69.2401], {
            hintContent: "Sizning joylashuvingiz",
            balloonContent: "Bu yerda siz turgan joy belgilangan",
          });

          const ingamePlacemark = new window.ymaps.Placemark([41.301565410007015, 69.2759505134931], {
            hintContent: "ingame.uz do'koni",
            balloonContent: "Bu yerda ingame.uz savdo markazi joylashgan",
          });

          myMap.geoObjects.add(userPlacemark);
          myMap.geoObjects.add(ingamePlacemark);
        }
      });
    }
  }, []);

  return <div id="map" className="md:w-[507px] w-[312px] h-[190px] bg-gray-200"></div>;
};

export default YandexMap;
