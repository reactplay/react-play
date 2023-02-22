import { motion } from 'framer-motion';
import React from 'react';
type PropType = {
  errors: number;
  accuracyPercentage: number;
  total: number;
  className?: string;
};

const Result = ({ errors, accuracyPercentage, total, className = '' }: PropType) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  return (
    <React.Fragment>
      <motion.ul className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}>
        <motion.li
          animate={animate}
          className="text-xl font-semibold"
          initial={initial}
          transition={{ ...duration, delay: 0 }}
        >
          Results
        </motion.li>
        <motion.li animate={animate} initial={initial} transition={{ ...duration, delay: 0.5 }}>
          Accuracy: {accuracyPercentage}%
        </motion.li>
        <motion.li
          animate={animate}
          className="text-red-500"
          initial={initial}
          transition={{ ...duration, delay: 1 }}
        >
          Errors : {errors}
        </motion.li>
        <motion.li animate={animate} initial={initial} transition={{ ...duration, delay: 1.4 }}>
          Typed: {total}
        </motion.li>
      </motion.ul>
    </React.Fragment>
  );
};

export default Result;
