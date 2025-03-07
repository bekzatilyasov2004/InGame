import React, { useRef, useState, useEffect } from "react";
import Comment from "../../ui/Comment";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const comments = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    comment: "Mahsulot sifati juda zo‘r! Hamma narsadan mamnun qoldim.",
  },
  {
    id: 2,
    name: "Samantha Lee",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    comment: "Yaxshi mahsulot, lekin yetkazib berish biroz kechikdi.",
  },
  {
    id: 3,
    name: "Dmitry Ivanov",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 5,
    comment: "Juda yoqdi! Yana buyurtma beraman.",
  },
  {
    id: 4,
    name: "Michael Smith",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 5,
    comment: "Narxi va sifati juda mos. Tavsiya qilaman!",
  },
  {
    id: 5,
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    rating: 5,
    comment: "Ishonchli do‘kon, yetkazib berish ham tez bo‘ldi!",
  },
];

const TavarComment = () => {
  const scrollRef = useRef(null);
  const itemRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollLeft(scrollRef.current.scrollLeft);
      setScrollWidth(scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
    };

    scrollRef.current.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => scrollRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (itemRef.current) {
      setCardWidth(itemRef.current.offsetWidth + 16);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#0F0F0F] p-4 sm:p-6 relative">
      <div className="max-w-[1250px] mx-auto text-center text-white">
        <h1 className="text-2xl sm:text-3xl font-bold">Отзывы наших клиентов</h1>
        <p className="text-sm sm:text-lg mt-2">Об этом лучше всего расскажут сами наши клиенты!</p>
        <div className="w-[100px] sm:w-[134px] mt-3 sm:mt-4 h-[2px] bg-[#D3176D] mx-auto" />

        <div className="relative mt-6 sm:mt-8">
          {scrollLeft > 0 && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/40 p-1 sm:p-2 rounded-full text-black shadow-lg hover:bg-white transition z-10"
              onClick={() => scroll(-1)}
            >
              <IoIosArrowRoundBack className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex overflow-x-auto hide-scrollbar md:gap-[50px] gap-0 space-x-4 sm:space-x-6 px-4 sm:px-6"
            style={{ scrollBehavior: "smooth" }}
          >
            {comments.map((comment, index) => (
              <div key={comment.id} ref={index === 0 ? itemRef : null} className="min-w-[280px] sm:min-w-[350px]">
                <Comment {...comment} />
              </div>
            ))}
          </div>

          {scrollLeft < scrollWidth && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/40 p-1 sm:p-2 rounded-full text-black shadow-lg hover:bg-white transition z-10"
              onClick={() => scroll(1)}
            >
              <IoIosArrowRoundForward className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TavarComment;
