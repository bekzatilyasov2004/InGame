import { create } from "zustand";
import axios from "axios";

const useBrandStore = create((set) => ({
  brands: [],
  loading: false,
  error: null,

  fetchBrands: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("https://hikigayadhachiman.pythonanywhere.com/api/brands/");
      set({ brands: response.data, loading: false });
    } catch (error) {
      set({ error: "Brendlarni yuklashda xatolik", loading: false });
    }
  },
}));

export default useBrandStore;
