import React, { useRef, useState, useEffect } from "react";
import PoxojeCard from "../../ui/PoxojeCard";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const cards = [
  { id: 1, title: 4500000, image: "../mic.png", naz: "Название" },
  { id: 2, title: 4500000, image: "../mic.png", naz: "Название" },
  { id: 3, title: 4500000, image: "../mic.png", naz: "Название" },
  { id: 4, title: 4500000, image: "../mic.png", naz: "Название" },
  { id: 5, title: 4500000, image: "../mic.png", naz: "Название" },
];

const Poxoje = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setShowLeftArrow(scrollRef.current.scrollLeft > 0);
        setShowRightArrow(
          scrollRef.current.scrollLeft <
            scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        );
      }
    };

    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollEl) {
        scrollEl.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#1a1a1a] relative p-4 md:p-6">
      <div className="w-full max-w-[1250px] mx-auto relative">
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/40 p-1 sm:p-2 rounded-full text-black shadow-lg hover:bg-white transition z-10"
          >
            <IoIosArrowRoundBack size={30} />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex hide-scrollbar overflow-x-auto space-x-4 px-4 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {cards.map((card) => (
            <PoxojeCard key={card.id} naz={card.naz} title={card.title} image={card.image} />
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/40 p-1 sm:p-2 rounded-full text-black shadow-lg hover:bg-white transition z-10"
          >
            <IoIosArrowRoundForward size={30} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Poxoje;
