import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import { Divider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import CustomEmpty from "../ui/CustomEmpty";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q") || "";
    setSearchQuery(query);
  }, [location.search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleFetchData = useCallback(async (query) => {
    if (!query) {
      setFilteredResults([]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults((prev) =>
        JSON.stringify(prev) === JSON.stringify(filtered) ? prev : filtered
      );
    } catch (err) {
      console.error("Xatolik:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetchData(debouncedQuery);
  }, [debouncedQuery, handleFetchData]);

  return (
    <div className="w-full bg-[#1a1a1a] min-h-screen">
      <Helmet>
        <title>
          {searchQuery ? `${searchQuery} - Qidiruv natijalari` : "Mahsulot Qidirish | InGame"}
        </title>
        <meta name="description" content={
          searchQuery
            ? `${searchQuery} bo‘yicha eng yaxshi mahsulotlarni qidiring va xarid qiling.`
            : "Turli mahsulotlarni qidiring va eng yaxshi takliflardan foydalaning."
        } />
        <meta name="keywords" content="qidiruv, mahsulot qidirish, online do'kon, shopping, e-commerce" />
        <meta property="og:title" content={searchQuery ? `${searchQuery} - Qidiruv natijalari` : "Mahsulot Qidirish | InGame"} />
        <meta property="og:description" content="InGame do‘konida eng yaxshi mahsulotlarni toping va xarid qiling!" />
        <meta property="og:image" content="https://i.pinimg.com/1200x/34/12/ef/3412efad6b9f8b8d1f62678fefcd7653.jpg" />
        <meta property="og:url" content={`https://ingame.uz/search?q=${searchQuery}`} />
      </Helmet>

      <div className="max-w-[1250px] min-h-[400px] mx-auto p-6 text-white">
        <div className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              navigate(`?q=${e.target.value}`);
            }}
            placeholder="Mahsulot qidirish..."
            className="w-[430px] h-[40px] p-3 text-white bg-[#383838] outline-none"
          />
          <button className="bg-[#D3176D] w-[100px] text-[14px] font-[600] h-[40px]">
            Пойск
          </button>
        </div>

        <div className="mt-6 ">
          {loading ? (
            <SkeletonLoader />
          ) : filteredResults.length > 0 ? (
            filteredResults.map((item, index) => (
              <div key={item.id} className="w-full max-w-[700px]">
                <div className="p-4 w-full max-w-[700px] rounded-md mt-2 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-400">{item.category}</p>
                  </div>
                </div>
                {index !== filteredResults.length - 1 && <Divider />}
              </div>
            ))
          ) : (
            <div className="flex justify-center h-[400px] mt-4">
              <CustomEmpty text="Hech narsa topilmadi" />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const SkeletonLoader = () => (
  <div className="space-y-4">
    {[...Array(5)].map((_, index) => (
      <div key={index} className="p-4 w-full max-w-[700px] rounded-md animate-pulse flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-600 rounded-md"></div>
        <div className="flex-1">
          <div className="w-2/3 h-4 bg-gray-600 rounded mb-2"></div>
          <div className="w-1/3 h-3 bg-gray-500 rounded"></div>
        </div>
      </div>
    ))}
  </div>
);

export default Search;
