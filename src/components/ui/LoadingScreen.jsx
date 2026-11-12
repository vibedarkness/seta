
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">

      {/* Bâtiment animé */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mb-8"
      >
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M25 135V55L80 20L135 55V135H25Z"
            stroke="#F59E0B"
            strokeWidth="5"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {[45, 75, 105].map((x) => (
            <motion.rect
              key={x}
              x={x}
              y="65"
              width="14"
              height="18"
              rx="2"
              fill="#F59E0B"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
          ))}

          <motion.rect
            x="67"
            y="100"
            width="26"
            height="35"
            rx="2"
            fill="#111827"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 1.5 }}
          />
        </svg>
      </motion.div>

      {/* Nom de l'entreprise */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-4xl md:text-6xl font-black tracking-widest text-gray-900 text-center"
      >
        SETA
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-3 text-xl md:text-3xl font-semibold tracking-[0.25em] text-amber-500 text-center"
      >
        INTERNATIONAL
      </motion.p>

      {/* Ligne de chargement */}
      <motion.div className="mt-12 w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-amber-500 rounded-full"
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: "50%" }}
        />
      </motion.div>

    </div>
  );
};

export default LoadingScreen;
