import React from 'react';
import { motion } from 'framer-motion';

const ApologyPage = () => {
  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header Section */}
        <div className="bg-slate-800 p-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-16 h-16 mx-auto bg-slate-700 rounded-full flex items-center justify-center mb-4"
          >
            <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold text-white tracking-wide"
          >
            A Sincere Apology
          </motion.h1>
        </div>
        
        {/* Message Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="p-8 sm:p-12 space-y-6 text-slate-700 leading-relaxed text-lg sm:text-xl"
        >
          <motion.p variants={itemVariants}>
            Good evening, <span className="font-semibold text-slate-900">@Dr C P Johnson Cdac Kharghar Sir</span>.
          </motion.p>
          
          <motion.p variants={itemVariants}>
            I am Tanashree Done from the BDA batch of August 2026. I sincerely apologize for our mistake. We understand the importance of being punctual and following instructions.
          </motion.p>
          
          <motion.p variants={itemVariants}>
            We truly appreciate your guidance, and we assure you that we will be more responsible and disciplined from now on. We will make sure this mistake is not repeated.
          </motion.p>
          
          {/* Sign-off Section */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 border-t border-slate-200 mt-10"
          >
            <p className="font-medium text-slate-900">Respectfully,</p>
            <p className="text-slate-800 font-semibold mt-1">Tanashree Done</p>
            <p className="text-sm text-slate-500">BDA Batch, August 2026</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ApologyPage;