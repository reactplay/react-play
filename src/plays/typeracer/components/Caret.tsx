import { motion } from 'framer-motion';
import React from 'react';

function Caret() {
  return (
    <React.Fragment>
      <motion.div
        aria-hidden
        animate={{ opacity: 0 }}
        className="inline-block bg-primary-500 w-0.5 h-7"
        exit={{ opacity: 1 }}
        initial={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
      />
    </React.Fragment>
  );
}

export default Caret;
