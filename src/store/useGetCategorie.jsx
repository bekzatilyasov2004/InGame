import { create } from "zustand";
import axios from "axios";

const API_URL = "https://hikigayadhachiman.pythonanywhere.com/api/categories/";

const useKatalogStore = create((set) => ({
  katalog: [], // Katalog ma'lumotlari

  // 📌 API dan katalogni olish
  fetchKatalog: async () => {
    try {
      const response = await axios.get(API_URL);
      set({ katalog: response.data }); // Ma'lumotlarni store'ga saqlash
    } catch (error) {
      console.error("GET xatolik:", error);
    }
  },
}));

export default useKatalogStore;
