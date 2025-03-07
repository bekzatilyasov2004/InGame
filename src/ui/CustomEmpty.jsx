import React from "react";
import { motion } from "framer-motion";
import { GiGamepad } from "react-icons/gi"; 

const CustomEmpty = ({ text }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center mt-8"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <GiGamepad className="w-14 h-14 text-white drop-shadow-lg" />
        </motion.div>
      </motion.div>

      <motion.p 
        className="mt-5 text-lg font-semibold text-white px-4 py-2 bg-gray-900 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default CustomEmpty;
