import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-900">
      <div className="relative w-full h-full">
        {/* Falling Rain */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary-500/40 dark:bg-primary-300/20 will-change-transform"
              style={{
                width: `${1 + Math.random()}px`,
                height: `${10 + Math.random() * 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 100],
                opacity: [0.5 + Math.random() * 0.5, 1, 0.5 + Math.random() * 0.5],
              }}
              transition={{
                duration: 0.5 + Math.random() * 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
