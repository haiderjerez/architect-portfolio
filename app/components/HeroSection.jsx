import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-4xl font-bold"
      >
        David Pimiento
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-lg text-gray-300"
      >
        Designer | Developer | Creative
      </motion.p>
    </div>
  );
};

export default HeroSection;
