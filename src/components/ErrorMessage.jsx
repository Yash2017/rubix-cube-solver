import React from 'react';
import { AnimatePresence,motion } from "framer-motion";

const ErrorMessage = ({ isVisible,ErrorMessage,className }) => (
    <AnimatePresence>
      {isVisible && (
        <motion.div className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
         {ErrorMessage}   
        </motion.div>
      )}
    </AnimatePresence>
)

 export default ErrorMessage