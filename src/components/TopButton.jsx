import React from "react";
import { motion } from "framer-motion";

const TopButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <motion.h2 animate={{ y: 10 }} initial={{ y: -250 }}>
        Welcome
      </motion.h2>
      <motion.div initial={{ x: "-100vw" }} animate={{ x: 10 }}>
        <button>Create</button>
      </motion.div>
    </motion.div>
  );
};

export default TopButton;
