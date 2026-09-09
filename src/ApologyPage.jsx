// import React from "react";
// import { motion } from "framer-motion";

// const ApologyPage = () => {
//   // ================= ANIMATION VARIANTS =================

//   const containerVariants = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.35,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 35,
//       filter: "blur(8px)",
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Floating background particles
//   const floatingParticles = Array.from({ length: 25 });

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-[#080b12] flex items-center justify-center p-5 font-sans">

//       {/* =====================================================
//           ANIMATED BACKGROUND
//       ====================================================== */}

//       {/* Moving gradient background */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{
//           background: [
//             "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18), transparent 35%)",
//             "radial-gradient(circle at 80% 70%, rgba(168,85,247,0.18), transparent 35%)",
//             "radial-gradient(circle at 30% 80%, rgba(59,130,246,0.18), transparent 35%)",
//             "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18), transparent 35%)",
//           ],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* Large glowing orb 1 */}
//       <motion.div
//         className="absolute w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl"
//         animate={{
//           x: [-100, 150, -100],
//           y: [-50, 100, -50],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Large glowing orb 2 */}
//       <motion.div
//         className="absolute w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"
//         animate={{
//           x: [200, -100, 200],
//           y: [100, -100, 100],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* =====================================================
//           FLOATING PARTICLES
//       ====================================================== */}

//       {floatingParticles.map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-white/40 rounded-full"
//           initial={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             opacity: 0,
//           }}
//           animate={{
//             y: [0, -100],
//             opacity: [0, 1, 0],
//           }}
//           transition={{
//             duration: 4 + Math.random() * 5,
//             repeat: Infinity,
//             delay: Math.random() * 5,
//             ease: "linear",
//           }}
//         />
//       ))}

//       {/* =====================================================
//           MAIN CARD
//       ====================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           scale: 0.8,
//           y: 80,
//           rotateX: 15,
//         }}
//         animate={{
//           opacity: 1,
//           scale: 1,
//           y: 0,
//           rotateX: 0,
//         }}
//         transition={{
//           duration: 1.2,
//           ease: [0.16, 1, 0.3, 1],
//         }}
//         whileHover={{
//           scale: 1.015,
//           rotateX: 1,
//           rotateY: -1,
//         }}
//         style={{
//           transformStyle: "preserve-3d",
//           perspective: 1200,
//         }}
//         className="relative z-10 max-w-3xl w-full"
//       >

//         {/* =====================================================
//             CARD OUTER GLOW
//         ====================================================== */}

//         <motion.div
//           className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-xl"
//           animate={{
//             opacity: [0.15, 0.35, 0.15],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//           }}
//         />

//         {/* =====================================================
//             CARD
//         ====================================================== */}

//         <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">

//           {/* ===================================================
//               HEADER
//           ==================================================== */}

//           <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-10 sm:p-14 text-center overflow-hidden">

//             {/* Moving shine */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
//               initial={{ x: "-100%" }}
//               animate={{ x: "100%" }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 repeatDelay: 3,
//                 ease: "easeInOut",
//               }}
//             />

//             {/* Decorative circle 1 */}
//             <motion.div
//               className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-white/10"
//               animate={{
//                 rotate: 360,
//                 scale: [1, 1.1, 1],
//               }}
//               transition={{
//                 rotate: {
//                   duration: 20,
//                   repeat: Infinity,
//                   ease: "linear",
//                 },
//                 scale: {
//                   duration: 5,
//                   repeat: Infinity,
//                 },
//               }}
//             />

//             {/* Decorative circle 2 */}
//             <motion.div
//               className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-white/5"
//               animate={{
//                 rotate: -360,
//               }}
//               transition={{
//                 duration: 25,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />

//             {/* =================================================
//                 APOLOGY ICON
//             ================================================== */}

//             <motion.div
//               initial={{
//                 scale: 0,
//                 rotate: -180,
//               }}
//               animate={{
//                 scale: 1,
//                 rotate: 0,
//               }}
//               transition={{
//                 delay: 0.5,
//                 duration: 1,
//                 type: "spring",
//                 stiffness: 150,
//               }}
//               whileHover={{
//                 scale: 1.15,
//                 rotate: 5,
//               }}
//               className="relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg"
//             >

//               {/* Heartbeat */}
//               <motion.div
//                 animate={{
//                   scale: [1, 1.15, 1],
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <svg
//                   className="w-10 h-10 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </motion.div>

//             </motion.div>


//             {/* =================================================
//                 CINEMATIC APOLOGY IMAGE
//             ================================================== */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 30,
//                 scale: 0.9,
//                 filter: "blur(10px)",
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//                 filter: "blur(0px)",
//               }}
//               transition={{
//                 delay: 0.75,
//                 duration: 1,
//                 ease: "easeOut",
//               }}
//               className="relative w-40 h-24 sm:w-52 sm:h-28 mx-auto mb-7 overflow-hidden rounded-xl border border-white/20 shadow-2xl"
//             >

//               {/* Image */}
//               <motion.img
//                 src="/apology-letter.jpg"
//                 alt="A sincere handwritten letter"
//                 className="w-full h-full object-cover"
//                 animate={{
//                   scale: [1, 1.06, 1],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />

//               {/* Dark overlay */}
//               <div className="absolute inset-0 bg-slate-950/30" />

//               {/* Cinematic shine */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
//                 initial={{
//                   x: "-100%",
//                 }}
//                 animate={{
//                   x: "100%",
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   delay: 2,
//                   repeat: Infinity,
//                   repeatDelay: 4,
//                   ease: "easeInOut",
//                 }}
//               />

//             </motion.div>


//             {/* =================================================
//                 HEADER SUBTITLE
//             ================================================== */}

//             <motion.p
//               initial={{
//                 opacity: 0,
//                 y: -15,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 1.15,
//               }}
//               className="text-indigo-300 text-sm uppercase tracking-[0.35em] mb-3"
//             >
//               A Few Words of Sincerity
//             </motion.p>


//             {/* =================================================
//                 MAIN TITLE
//             ================================================== */}

//             <motion.h1
//               initial={{
//                 opacity: 0,
//                 y: 20,
//                 filter: "blur(6px)",
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 filter: "blur(0px)",
//               }}
//               transition={{
//                 delay: 1.35,
//                 duration: 0.9,
//               }}
//               className="relative text-3xl sm:text-5xl font-bold text-white tracking-tight"
//             >
//               A Sincere Apology
//             </motion.h1>


//             {/* Animated line */}
//             <motion.div
//               initial={{
//                 width: 0,
//               }}
//               animate={{
//                 width: 100,
//               }}
//               transition={{
//                 delay: 1.7,
//                 duration: 1,
//               }}
//               className="h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto mt-6"
//             />

//           </div>


//           {/* ===================================================
//               MESSAGE SECTION
//           ==================================================== */}

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="show"
//             className="p-8 sm:p-14 space-y-7 text-slate-700 leading-relaxed text-lg sm:text-xl"
//           >

//             {/* =================================================
//                 GREETING
//             ================================================== */}

//             <motion.div
//               variants={itemVariants}
//               className="flex items-start gap-4"
//             >

//               <motion.div
//                 animate={{
//                   y: [0, -4, 0],
//                   rotate: [0, 5, -5, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                 }}
//                 className="text-2xl"
//               >
//                 ✦
//               </motion.div>

//               <p>
//                 Good evening,{" "}
//                 <span className="font-bold text-slate-900">
//                   @Dr C P Johnson Cdac Kharghar Sir,
//                 </span>{" "}
//                 <span className="font-bold text-indigo-700">
//                   Sahil Sir,
//                 </span>{" "}
//                 and{" "}
//                 <span className="font-bold text-purple-700">
//                   Vineeta Ma’am
//                 </span>
//                 .
//               </p>

//             </motion.div>


//             {/* =================================================
//                 PARAGRAPH 1
//             ================================================== */}

//             <motion.p
//               variants={itemVariants}
//               whileHover={{
//                 x: 5,
//               }}
//               className="transition-all duration-300"
//             >
//               I am{" "}
//               <span className="font-semibold text-indigo-700">
//                 Durgesh Borole
//               </span>{" "}
//               from the BDA Batch of August 2026. I would like to
//               sincerely apologize for being late to yesterday’s event.
//               We realize that our delay was not just a matter of timing,
//               but also a reflection of the responsibility and discipline
//               we are expected to maintain.
//             </motion.p>


//             {/* =================================================
//                 PARAGRAPH 2
//             ================================================== */}

//             <motion.p
//               variants={itemVariants}
//               whileHover={{
//                 x: 5,
//               }}
//               className="transition-all duration-300"
//             >
//               We truly regret the inconvenience caused to all of you.
//               Your time, efforts, and guidance mean a lot to us, and we
//               understand that we should have shown greater respect for
//               them by being punctual.
//             </motion.p>


//             {/* =================================================
//                 HIGHLIGHTED LEARNING SECTION
//             ================================================== */}

//             <motion.div
//               variants={itemVariants}
//               whileHover={{
//                 scale: 1.02,
//                 y: -3,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//               className="relative my-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 via-white to-purple-50 border border-indigo-100 overflow-hidden shadow-sm"
//             >

//               {/* Animated vertical line */}
//               <motion.div
//                 className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"
//                 initial={{
//                   scaleY: 0,
//                 }}
//                 animate={{
//                   scaleY: 1,
//                 }}
//                 transition={{
//                   delay: 1.8,
//                   duration: 1,
//                   ease: "easeOut",
//                 }}
//               />

//               {/* Moving shine */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
//                 initial={{
//                   x: "-100%",
//                 }}
//                 animate={{
//                   x: "100%",
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   delay: 2,
//                   repeat: Infinity,
//                   repeatDelay: 4,
//                 }}
//               />

//               <p className="relative text-slate-600 italic pl-4">
//                 We have taken this as a learning experience, and we
//                 assure you that we will be more responsible, attentive,
//                 and punctual going forward.
//               </p>

//             </motion.div>


//             {/* =================================================
//                 PARAGRAPH 3
//             ================================================== */}

//             <motion.p
//               variants={itemVariants}
//               whileHover={{
//                 x: 5,
//               }}
//               className="transition-all duration-300"
//             >
//               We sincerely hope that{" "}
//               <span className="font-semibold text-slate-900">
//                 Dr. C. P. Johnson Sir, Sahil Sir, and Vineeta Ma’am
//               </span>{" "}
//               will forgive us for this mistake.
//             </motion.p>


//             {/* =================================================
//                 THANK YOU
//             ================================================== */}

//             <motion.p
//               variants={itemVariants}
//               whileHover={{
//                 x: 5,
//               }}
//               className="transition-all duration-300"
//             >
//               Thank you for your patience, understanding, and continued
//               guidance. We genuinely value everything we learn from you.
//             </motion.p>


//             {/* =================================================
//                 SIGNATURE
//             ================================================== */}

//             <motion.div
//               variants={itemVariants}
//               className="pt-8 border-t border-slate-200 mt-10"
//             >

//               {/* Heading */}
//               <motion.p
//                 initial={{
//                   opacity: 0,
//                   y: 10,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 3,
//                   duration: 0.6,
//                 }}
//                 className="text-slate-500 text-sm uppercase tracking-[0.25em]"
//               >
//                 With sincere respect
//               </motion.p>


//               {/* Animated name */}
//               <motion.p
//                 initial={{
//                   opacity: 0,
//                   x: -40,
//                   filter: "blur(8px)",
//                 }}
//                 animate={{
//                   opacity: 1,
//                   x: 0,
//                   filter: "blur(0px)",
//                 }}
//                 transition={{
//                   delay: 3.2,
//                   duration: 0.9,
//                   ease: "easeOut",
//                 }}
//                 className="font-semibold text-2xl sm:text-3xl text-slate-900 mt-3"
//               >
//                 Durgesh Borole
//               </motion.p>


//               {/* Batch */}
//               <motion.p
//                 initial={{
//                   opacity: 0,
//                 }}
//                 animate={{
//                   opacity: 1,
//                 }}
//                 transition={{
//                   delay: 3.6,
//                   duration: 0.7,
//                 }}
//                 className="text-sm text-slate-500 mt-1"
//               >
//                 BDA Batch — August 2026
//               </motion.p>


//               {/* Animated signature line */}
//               <motion.div
//                 initial={{
//                   width: 0,
//                   opacity: 0,
//                 }}
//                 animate={{
//                   width: 180,
//                   opacity: 1,
//                 }}
//                 transition={{
//                   delay: 3.8,
//                   duration: 1,
//                   ease: "easeOut",
//                 }}
//                 className="h-[1px] bg-gradient-to-r from-slate-400 to-transparent mt-4"
//               />

//             </motion.div>

//           </motion.div>


//           {/* ===================================================
//               FOOTER
//           ==================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             transition={{
//               delay: 4,
//             }}
//             className="px-8 py-5 bg-slate-50 border-t border-slate-100 text-center"
//           >

//             <motion.p
//               animate={{
//                 opacity: [0.5, 1, 0.5],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//               }}
//               className="text-xs text-slate-400 tracking-widest uppercase"
//             >
//               A Mistake • A Lesson • A Promise
//             </motion.p>

//           </motion.div>

//         </div>
//       </motion.div>

//     </div>
//   );
// };

// export default ApologyPage;


import React from "react";
import { motion } from "framer-motion";

const ApologyPage = () => {
  // ================= ANIMATION VARIANTS =================

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Floating background particles
  const floatingParticles = Array.from({ length: 25 });

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#080b12] flex items-center justify-center p-5 font-sans">

      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      {/* Moving gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18), transparent 35%)",
            "radial-gradient(circle at 80% 70%, rgba(168,85,247,0.18), transparent 35%)",
            "radial-gradient(circle at 30% 80%, rgba(59,130,246,0.18), transparent 35%)",
            "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18), transparent 35%)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Large glowing orb 1 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl"
        animate={{
          x: [-100, 150, -100],
          y: [-50, 100, -50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Large glowing orb 2 */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"
        animate={{
          x: [200, -100, 200],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      {floatingParticles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          initial={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      {/* =====================================================
          MAIN CARD
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 80,
          rotateX: 15,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          scale: 1.015,
          rotateX: 1,
          rotateY: -1,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1200,
        }}
        className="relative z-10 max-w-3xl w-full"
      >

        {/* =====================================================
            CARD OUTER GLOW
        ====================================================== */}

        <motion.div
          className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-xl"
          animate={{
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        {/* =====================================================
            CARD
        ====================================================== */}

        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">

          {/* ===================================================
              HEADER
          ==================================================== */}

          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-10 sm:p-14 text-center overflow-hidden">

            {/* Moving shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />

            {/* Decorative circle 1 */}
            <motion.div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-white/10"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 5,
                  repeat: Infinity,
                },
              }}
            />

            {/* Decorative circle 2 */}
            <motion.div
              className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-white/5"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* =================================================
                CINEMATIC APOLOGY IMAGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.4,
                duration: 1,
                ease: "easeOut",
              }}
              className="relative w-40 h-24 sm:w-52 sm:h-28 mx-auto mb-7 overflow-hidden rounded-xl border border-white/20 shadow-2xl"
            >

              {/* Apology image */}
              <motion.img
                src="/apology-letter.jpg"
                alt="A sincere handwritten letter"
                className="w-full h-full object-cover"
                animate={{
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-slate-950/30" />

              {/* Cinematic shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 2.5,
                  delay: 1.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
              />

            </motion.div>

            {/* =================================================
                HEADER SUBTITLE
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
              }}
              className="relative text-indigo-300 text-sm uppercase tracking-[0.35em] mb-3"
            >
              A Few Words of Sincerity
            </motion.p>

            {/* =================================================
                MAIN TITLE
            ================================================== */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 1.1,
                duration: 0.9,
              }}
              className="relative text-3xl sm:text-5xl font-bold text-white tracking-tight"
            >
              A Sincere Apology
            </motion.h1>

            {/* Animated line */}
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 100,
              }}
              transition={{
                delay: 1.5,
                duration: 1,
              }}
              className="h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto mt-6"
            />

          </div>

          {/* ===================================================
              MESSAGE SECTION
          ==================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="p-8 sm:p-14 space-y-7 text-slate-700 leading-relaxed text-lg sm:text-xl"
          >

            {/* =================================================
                GREETING
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4"
            >

              <motion.div
                animate={{
                  y: [0, -4, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-2xl text-indigo-500"
              >
                ✦
              </motion.div>

              <p>
                Good Morning,{" "}
                <span className="font-bold text-slate-900">
                  Dr C P Johnson Sir,
                </span>{" "}
                <span className="font-bold text-indigo-700">
                  Sahil Sir,
                </span>{" "}
                and{" "}
                <span className="font-bold text-purple-700">
                  Vineeta Ma’am
                </span>
                .
              </p>

            </motion.div>

            {/* =================================================
                PARAGRAPH 1
            ================================================== */}

            <motion.p
              variants={itemVariants}
              whileHover={{
                x: 5,
              }}
              className="transition-all duration-300"
            >
              I am{" "}
              <span className="font-semibold text-indigo-700">
                Durgesh Borole
              </span>{" "}
              from the BDA Batch of August 2026. I would like to
              sincerely apologize for being late to yesterday’s event.
              We realize that our delay was not just a matter of timing,
              but also a reflection of the responsibility and discipline
              we are expected to maintain.
            </motion.p>

            {/* =================================================
                PARAGRAPH 2
            ================================================== */}

            <motion.p
              variants={itemVariants}
              whileHover={{
                x: 5,
              }}
              className="transition-all duration-300"
            >
              We truly regret the inconvenience caused to all of you.
              Your time, efforts, and guidance mean a lot to us, and we
              understand that we should have shown greater respect for
              them by being punctual.
            </motion.p>

            {/* =================================================
                HIGHLIGHTED LEARNING SECTION
            ================================================== */}

            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -3,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative my-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 via-white to-purple-50 border border-indigo-100 overflow-hidden shadow-sm"
            >

              {/* Animated vertical line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"
                initial={{
                  scaleY: 0,
                }}
                animate={{
                  scaleY: 1,
                }}
                transition={{
                  delay: 1.8,
                  duration: 1,
                  ease: "easeOut",
                }}
              />

              {/* Moving shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 2.5,
                  delay: 2,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
              />

              <p className="relative text-slate-600 italic pl-4">
                We have taken this as a learning experience, and we
                assure you that we will be more responsible, attentive,
                and punctual going forward.
              </p>

            </motion.div>

            {/* =================================================
                PARAGRAPH 3
            ================================================== */}

            <motion.p
              variants={itemVariants}
              whileHover={{
                x: 5,
              }}
              className="transition-all duration-300"
            >
              We sincerely hope that{" "}
              <span className="font-semibold text-slate-900">
                Dr. C. P. Johnson Sir, Sahil Sir, and Vineeta Ma’am
              </span>{" "}
              will forgive us for this mistake.
            </motion.p>

            {/* =================================================
                THANK YOU
            ================================================== */}

            <motion.p
              variants={itemVariants}
              whileHover={{
                x: 5,
              }}
              className="transition-all duration-300"
            >
              Thank you for your patience, understanding, and continued
              guidance. We genuinely value everything we learn from you.
            </motion.p>

            {/* =================================================
                SIGNATURE
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-slate-200 mt-10"
            >

              {/* Heading */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 3,
                  duration: 0.6,
                }}
                className="text-slate-500 text-sm uppercase tracking-[0.25em]"
              >
                With sincere respect
              </motion.p>

              {/* Animated name */}
              <motion.p
                initial={{
                  opacity: 0,
                  x: -40,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 3.2,
                  duration: 0.9,
                  ease: "easeOut",
                }}
                className="font-semibold text-2xl sm:text-3xl text-slate-900 mt-3"
              >
                Durgesh Borole
              </motion.p>

              {/* Batch */}
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 3.6,
                  duration: 0.7,
                }}
                className="text-sm text-slate-500 mt-1"
              >
                BDA Batch — August 2026
              </motion.p>

              {/* Animated signature line */}
              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: 180,
                  opacity: 1,
                }}
                transition={{
                  delay: 3.8,
                  duration: 1,
                  ease: "easeOut",
                }}
                className="h-[1px] bg-gradient-to-r from-slate-400 to-transparent mt-4"
              />

            </motion.div>

          </motion.div>

          {/* ===================================================
              FOOTER
          ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 4,
            }}
            className="px-8 py-5 bg-slate-50 border-t border-slate-100 text-center"
          >

            <motion.p
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="text-xs text-slate-400 tracking-widest uppercase"
            >
              A Mistake • A Lesson • A Promise
            </motion.p>

          </motion.div>

        </div>
      </motion.div>

    </div>
  );
};

export default ApologyPage;