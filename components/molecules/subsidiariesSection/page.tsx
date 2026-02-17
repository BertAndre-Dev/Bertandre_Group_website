// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import Pill from "@/components/atom/pill/page";

// export interface SubsidiaryCardProps {
//   readonly imageSrc: string;
//   readonly imageAlt: string;
//   readonly title: string;
//   readonly description: string;
//   readonly linkHref: string;
// }

// function SubsidiaryCard({
//   imageSrc,
//   imageAlt,
//   title,
//   description,
//   linkHref,
// }: SubsidiaryCardProps) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <motion.article
//       className="bg-white rounded-[15px] md:rounded-[30px] shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow overflow-hidden relative flex flex-col"
//       onHoverStart={() => setIsExpanded(true)}
//       onHoverEnd={() => setIsExpanded(false)}
//       onClick={() => setIsExpanded(!isExpanded)}
//     >
//       {/* Image Section - expands to fill description space */}
//       <div className="relative flex-1 overflow-hidden">
//         {/* Normal state - boxed image */}
//         <motion.div
//           className="p-5 sm:p-6"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: isExpanded ? 0 : 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <div className="relative w-full aspect-16/10 overflow-hidden rounded-lg border-2">
//             <Image
//               src={imageSrc}
//               alt={imageAlt}
//               fill
//               className="object-cover"
//               loading="lazy"
//               sizes="(max-width: 768px) 100vw, 50vw"
//             />
//           </div>
//         </motion.div>

//         {/* Expanded state - full background image */}
//         <motion.div
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isExpanded ? 1 : 0 }}
//           transition={{ duration: 0.4, ease: "easeInOut" }}
//         >
//           <Image
//             src={imageSrc}
//             alt={imageAlt}
//             fill
//             className="object-cover"
//             loading="lazy"
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//           {/* Dark overlay for title readability */}
//           <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />
//         </motion.div>

//         {/* Title overlaid on image (only visible on hover) */}
//         <motion.div
//           className="absolute bottom-0 left-0 right-0 px-5 sm:px-6 pb-4 z-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isExpanded ? 1 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <h3 className="text-base md:text-xl font-semibold text-white">
//             {title}
//           </h3>
//         </motion.div>
//       </div>

//       {/* Text Content Section - separate from image */}
//       <div className="px-5 md:px-6 pb-5 md:pb-6 mt-2 md:mt-0 bg-white relative z-20">
//         {/* Title in normal state (hidden on hover) */}
//         <motion.h3
//           className="text-base md:text-xl font-semibold text-[#1560BD] mb-2"
//           initial={{ opacity: 1 }}
//           animate={{ 
//             opacity: isExpanded ? 0 : 1, 
//             height: isExpanded ? 0 : "auto", 
//             marginBottom: isExpanded ? 0 : "0.5rem" 
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           {title}
//         </motion.h3>

//         {/* Description (fades out and collapses) */}
//         <AnimatePresence initial={false}>
//           {!isExpanded && (
//             <motion.p
//               className="text-sm sm:text-base leading-relaxed text-[#4C4C4C] mb-4"
//               initial={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {description}
//             </motion.p>
//           )}
//         </AnimatePresence>

//         {/* Link (always visible, stays below image) */}
//         <Link
//           href={linkHref}
//           className="inline-flex items-center gap-1 cursor-pointer text-[#1560BD] font-medium text-[14px] md:text-[16px] hover:underline"
//         >
//           Learn more
//           <span aria-hidden="true"> →</span>
//         </Link>
//       </div>
//     </motion.article>
//   );
// }

// const SUBSIDIARIES: SubsidiaryCardProps[] = [
//   {
//     imageSrc: "/assets/consulting.svg",
//     imageAlt: "BertAndre Consulting – strategy and advisory",
//     title: "BertAndre Consulting",
//     description:
//       "Strategy-led advisory and technology solutions supporting business growth and transformation.",
//     linkHref: "/subsidiaries/bertandre-consulting",
//   },
//   {
//     imageSrc: "/assets/real-estate.svg",
//     imageAlt: "Primquisite Real Estate – property development",
//     title: "Primquisite Real Estate",
//     description:
//       "Property development and PropTech-driven estate solutions delivering long-term asset value.",
//     linkHref: "/subsidiaries/primquisite-real-estate",
//   },
//   {
//     imageSrc: "/assets/saair.svg",
//     imageAlt: "SAAIR Energy – energy solutions",
//     title: "SAAIR Energy",
//     description:
//       "Integrated energy solutions focused on metering, monitoring, and scalable energy infrastructure.",
//     linkHref: "/subsidiaries/saair-energy",
//   },
//   {
//     imageSrc: "/assets/autoDate.svg",
//     imageAlt: "Autodate Smart Fleet – fleet management",
//     title: "Autodate Smart Fleet",
//     description:
//       "Technology-enabled fleet administration and mobility management for enterprises.",
//     linkHref: "/subsidiaries/autodate-smart-fleet",
//   },
// ];

// export default function SubsidiariesSection() {
//   return (
//     <section className="bg-[#D0DFF2]">
//       <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-0">
//         <div className="flex justify-center mb-10 pt-6 lg:mb-12">
//           <Pill
//             className="bg-white border border-[#1560BD] text-[#1560BD]"
//             active
//           >
//             Subsidiaries
//           </Pill>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl pb-12 md:pb-20 mx-auto">
//           {SUBSIDIARIES.map((sub) => (
//             <SubsidiaryCard
//               key={sub.title}
//               imageSrc={sub.imageSrc}
//               imageAlt={sub.imageAlt}
//               title={sub.title}
//               description={sub.description}
//               linkHref={sub.linkHref}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import Pill from "@/components/atom/pill/page";

// export interface SubsidiaryCardProps {
//   readonly imageSrc: string;
//   readonly imageAlt: string;
//   readonly title: string;
//   readonly description: string;
//   readonly linkHref: string;
//   readonly isCompact?: boolean;
// }

// function SubsidiaryCard({
//   imageSrc,
//   imageAlt,
//   title,
//   description,
//   linkHref,
//   isCompact = false,
// }: SubsidiaryCardProps) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <motion.article
//       className={`bg-white rounded-[15px] md:rounded-[30px] shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow overflow-hidden relative flex flex-col ${
//         isCompact ? 'max-h-[350px] md:max-h-[400px]' : ''
//       }`}
//       onHoverStart={() => setIsExpanded(true)}
//       onHoverEnd={() => setIsExpanded(false)}
//       onClick={() => setIsExpanded(!isExpanded)}
//     >
//       {/* Image Section - expands to fill description space */}
//       <div className="relative flex-1 overflow-hidden">
//         {/* Normal state - boxed image */}
//         <motion.div
//           className={`${isCompact ? 'p-3 sm:p-4' : 'p-5 sm:p-6'}`}
//           initial={{ opacity: 1 }}
//           animate={{ opacity: isExpanded ? 0 : 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <div className={`relative w-full overflow-hidden rounded-lg border-2 ${
//             isCompact ? 'aspect-[16/8]' : 'aspect-[16/10]'
//           }`}>
//             <Image
//               src={imageSrc}
//               alt={imageAlt}
//               fill
//               className="object-cover"
//               loading="lazy"
//               sizes="(max-width: 768px) 100vw, 50vw"
//             />
//           </div>
//         </motion.div>

//         {/* Expanded state - full background image */}
//         <motion.div
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isExpanded ? 1 : 0 }}
//           transition={{ duration: 0.4, ease: "easeInOut" }}
//         >
//           <Image
//             src={imageSrc}
//             alt={imageAlt}
//             fill
//             className="object-cover"
//             loading="lazy"
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//           {/* Dark overlay for title readability */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
//         </motion.div>

//         {/* Title overlaid on image (only visible on hover) */}
//         <motion.div
//           className={`absolute bottom-0 left-0 right-0 z-10 ${
//             isCompact ? 'px-3 sm:px-4 pb-3' : 'px-5 sm:px-6 pb-4'
//           }`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isExpanded ? 1 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <h3 className={`font-semibold text-white ${
//             isCompact ? 'text-sm md:text-lg' : 'text-base md:text-xl'
//           }`}>
//             {title}
//           </h3>
//         </motion.div>
//       </div>

//       {/* Text Content Section - separate from image */}
//       <div className={`bg-white relative z-20 ${
//         isCompact ? 'px-3 md:px-4 pb-3 md:pb-4 mt-1' : 'px-5 md:px-6 pb-5 md:pb-6 mt-2 md:mt-0'
//       }`}>
//         {/* Title in normal state (hidden on hover) */}
//         <motion.h3
//           className={`font-semibold text-[#1560BD] mb-2 ${
//             isCompact ? 'text-sm md:text-lg' : 'text-base md:text-xl'
//           }`}
//           initial={{ opacity: 1 }}
//           animate={{ 
//             opacity: isExpanded ? 0 : 1, 
//             height: isExpanded ? 0 : "auto", 
//             marginBottom: isExpanded ? 0 : "0.5rem" 
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           {title}
//         </motion.h3>

//         {/* Description (fades out and collapses) */}
//         <AnimatePresence initial={false}>
//           {!isExpanded && (
//             <motion.p
//               className={`leading-relaxed text-[#4C4C4C] mb-3 ${
//                 isCompact ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
//               }`}
//               initial={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {description}
//             </motion.p>
//           )}
//         </AnimatePresence>

//         {/* Link (always visible, stays below image) */}
//         <Link
//           href={linkHref}
//           className={`inline-flex items-center gap-1 cursor-pointer text-[#1560BD] font-medium hover:underline ${
//             isCompact ? 'text-xs md:text-sm' : 'text-[14px] md:text-[16px]'
//           }`}
//         >
//           Learn more
//           <span aria-hidden="true"> →</span>
//         </Link>
//       </div>
//     </motion.article>
//   );
// }

// const SUBSIDIARIES: SubsidiaryCardProps[] = [
//   {
//     imageSrc: "/assets/consulting.svg",
//     imageAlt: "BertAndre Consulting – strategy and advisory",
//     title: "BertAndre Consulting",
//     description:
//       "Strategy-led advisory and technology solutions supporting business growth and transformation.",
//     linkHref: "/subsidiaries/bertandre-consulting",
//     isCompact: false,
//   },
//   {
//     imageSrc: "/assets/real-estate.svg",
//     imageAlt: "Primquisite Real Estate – property development",
//     title: "Primquisite Real Estate",
//     description:
//       "Property development and PropTech-driven estate solutions delivering long-term asset value.",
//     linkHref: "/subsidiaries/primquisite-real-estate",
//     isCompact: true, // Second card in first row - reduced height
//   },
//   {
//     imageSrc: "/assets/saair.svg",
//     imageAlt: "SAAIR Energy – energy solutions",
//     title: "SAAIR Energy",
//     description:
//       "Integrated energy solutions focused on metering, monitoring, and scalable energy infrastructure.",
//     linkHref: "/subsidiaries/saair-energy",
//     isCompact: true, // First card in second row - reduced height
//   },
//   {
//     imageSrc: "/assets/autoDate.svg",
//     imageAlt: "Autodate Smart Fleet – fleet management",
//     title: "Autodate Smart Fleet",
//     description:
//       "Technology-enabled fleet administration and mobility management for enterprises.",
//     linkHref: "/subsidiaries/autodate-smart-fleet",
//     isCompact: false,
//   },
// ];

// export default function SubsidiariesSection() {
//   return (
//     <section className="bg-[#D0DFF2]">
//       <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-0">
//         <div className="flex justify-center mb-10 pt-6 lg:mb-12">
//           <Pill
//             className="bg-white border border-[#1560BD] text-[#1560BD]"
//             active
//           >
//             Subsidiaries
//           </Pill>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl pb-12 md:pb-20 mx-auto">
//           {SUBSIDIARIES.map((sub) => (
//             <SubsidiaryCard
//               key={sub.title}
//               imageSrc={sub.imageSrc}
//               imageAlt={sub.imageAlt}
//               title={sub.title}
//               description={sub.description}
//               linkHref={sub.linkHref}
//               isCompact={sub.isCompact}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import Pill from "@/components/atom/pill/page";

// export interface SubsidiaryCardProps {
//   readonly imageSrc: string;
//   readonly imageAlt: string;
//   readonly title: string;
//   readonly description: string;
//   readonly linkHref: string;
//   readonly isCompact?: boolean;
// }

// function SubsidiaryCard({
//   imageSrc,
//   imageAlt,
//   title,
//   description,
//   linkHref,
//   isCompact = false,
// }: SubsidiaryCardProps) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <motion.article
//       className={`bg-white rounded-[15px] md:rounded-[30px] shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow overflow-hidden relative flex flex-col ${
//         isCompact ? 'max-h-[350px] md:max-h-[400px]' : ''
//       }`}
//       onHoverStart={() => setIsExpanded(true)}
//       onHoverEnd={() => setIsExpanded(false)}
//       onClick={() => setIsExpanded(!isExpanded)}
//     >
//       {/* Image Section - expands to fill description space */}
//       <div className="relative flex-1 overflow-hidden">
//         {/* Normal state - boxed image */}
//         <motion.div
//           className={`${isCompact ? 'p-3 sm:p-4' : 'p-5 sm:p-6'}`}
//           initial={{ opacity: 1 }}
//           animate={{ opacity: isExpanded ? 0 : 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <div className={`relative w-full overflow-hidden rounded-lg border-2 ${
//             isCompact ? 'aspect-[16/8]' : 'aspect-[16/10]'
//           }`}>
//             <Image
//               src={imageSrc}
//               alt={imageAlt}
//               fill
//               className="object-cover"
//               loading="lazy"
//               sizes="(max-width: 768px) 100vw, 50vw"
//             />
//           </div>
//         </motion.div>

//         {/* Expanded state - full background image */}
//         <motion.div
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isExpanded ? 1 : 0 }}
//           transition={{ duration: 0.4, ease: "easeInOut" }}
//         >
//           <Image
//             src={imageSrc}
//             alt={imageAlt}
//             fill
//             className="object-cover"
//             loading="lazy"
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//           {/* Dark overlay for title readability */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
//         </motion.div>

//         {/* Title overlaid on image (only visible on hover) */}
//         <motion.div
//           className={`absolute bottom-0 left-0 right-0 z-10 ${
//             isCompact ? 'px-3 sm:px-4 pb-3' : 'px-5 sm:px-6 pb-4'
//           }`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isExpanded ? 1 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <h3 className={`font-semibold text-white ${
//             isCompact ? 'text-sm md:text-lg' : 'text-base md:text-xl'
//           }`}>
//             {title}
//           </h3>
//         </motion.div>
//       </div>

//       {/* Text Content Section - separate from image */}
//       <div className={`bg-white relative z-20 ${
//         isCompact ? 'px-3 md:px-4 pb-3 md:pb-4 mt-1' : 'px-5 md:px-6 pb-5 md:pb-6 mt-2 md:mt-0'
//       }`}>
//         {/* Title in normal state (hidden on hover) */}
//         <motion.h3
//           className={`font-semibold text-[#1560BD] mb-2 ${
//             isCompact ? 'text-sm md:text-lg' : 'text-base md:text-xl'
//           }`}
//           initial={{ opacity: 1 }}
//           animate={{ 
//             opacity: isExpanded ? 0 : 1, 
//             height: isExpanded ? 0 : "auto", 
//             marginBottom: isExpanded ? 0 : "0.5rem" 
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           {title}
//         </motion.h3>

//         {/* Description (fades out and collapses) */}
//         <AnimatePresence initial={false}>
//           {!isExpanded && (
//             <motion.p
//               className={`leading-relaxed text-[#4C4C4C] mb-3 ${
//                 isCompact ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
//               }`}
//               initial={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {description}
//             </motion.p>
//           )}
//         </AnimatePresence>

//         {/* Link (always visible, stays below image) */}
//         <Link
//           href={linkHref}
//           className={`inline-flex items-center gap-1 cursor-pointer text-[#1560BD] font-medium hover:underline ${
//             isCompact ? 'text-xs md:text-sm' : 'text-[14px] md:text-[16px]'
//           }`}
//         >
//           Learn more
//           <span aria-hidden="true"> →</span>
//         </Link>
//       </div>
//     </motion.article>
//   );
// }

// const SUBSIDIARIES: SubsidiaryCardProps[] = [
//   {
//     imageSrc: "/assets/consulting.svg",
//     imageAlt: "BertAndre Consulting – strategy and advisory",
//     title: "BertAndre Consulting",
//     description:
//       "Strategy-led advisory and technology solutions supporting business growth and transformation.",
//     linkHref: "/subsidiaries/bertandre-consulting",
//     isCompact: false,
//   },
//   {
//     imageSrc: "/assets/real-estate.svg",
//     imageAlt: "Primquisite Real Estate – property development",
//     title: "Primquisite Real Estate",
//     description:
//       "Property development and PropTech-driven estate solutions delivering long-term asset value.",
//     linkHref: "/subsidiaries/primquisite-real-estate",
//     isCompact: true,
//   },
//   {
//     imageSrc: "/assets/saair.svg",
//     imageAlt: "SAAIR Energy – energy solutions",
//     title: "SAAIR Energy",
//     description:
//       "Integrated energy solutions focused on metering, monitoring, and scalable energy infrastructure.",
//     linkHref: "/subsidiaries/saair-energy",
//     isCompact: true,
//   },
//   {
//     imageSrc: "/assets/autoDate.svg",
//     imageAlt: "Autodate Smart Fleet – fleet management",
//     title: "Autodate Smart Fleet",
//     description:
//       "Technology-enabled fleet administration and mobility management for enterprises.",
//     linkHref: "/subsidiaries/autodate-smart-fleet",
//     isCompact: false,
//   },
// ];

// export default function SubsidiariesSection() {
//   return (
//     <section className="bg-[#D0DFF2]">
//       <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-0">
//         <div className="flex justify-center mb-10 pt-6 lg:mb-12">
//           <Pill
//             className="bg-white border border-[#1560BD] text-[#1560BD]"
//             active
//           >
//             Subsidiaries
//           </Pill>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl pb-12 md:pb-20 mx-auto">
//           {/* First Column - First 2 cards */}
//           <div className="flex flex-col gap-6 lg:gap-8">
//             {SUBSIDIARIES.slice(0, 2).map((sub) => (
//               <SubsidiaryCard
//                 key={sub.title}
//                 imageSrc={sub.imageSrc}
//                 imageAlt={sub.imageAlt}
//                 title={sub.title}
//                 description={sub.description}
//                 linkHref={sub.linkHref}
//                 isCompact={sub.isCompact}
//               />
//             ))}
//           </div>

//           {/* Second Column - Last 2 cards */}
//           <div className="flex flex-col gap-6 lg:gap-8">
//             {SUBSIDIARIES.slice(2, 4).map((sub) => (
//               <SubsidiaryCard
//                 key={sub.title}
//                 imageSrc={sub.imageSrc}
//                 imageAlt={sub.imageAlt}
//                 title={sub.title}
//                 description={sub.description}
//                 linkHref={sub.linkHref}
//                 isCompact={sub.isCompact}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Pill from "@/components/atom/pill/page";

export interface SubsidiaryCardProps {
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly title: string;
  readonly description: string;
  readonly linkHref: string;
  readonly layout?: "normal" | "image-right";
}

function SubsidiaryCard({
  imageSrc,
  imageAlt,
  title,
  description,
  linkHref,
  layout = "normal",
}: SubsidiaryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isImageRight = layout === "image-right";

  if (isImageRight) {
    // Horizontal layout with image on right
    return (
      <motion.article
        className="bg-white rounded-[15px] md:rounded-[30px] shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow overflow-hidden relative"
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Text Content - Left Side */}
          <div className="px-5 md:px-6 py-5 md:py-6 md:w-1/2 order-2 md:order-1">
            <motion.h3
              className="text-base md:text-xl font-semibold text-[#1560BD] mb-2"
              animate={{ 
                opacity: isExpanded ? 0 : 1,
                height: isExpanded ? 0 : "auto",
                marginBottom: isExpanded ? 0 : "0.5rem"
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            <AnimatePresence initial={false}>
              {!isExpanded && (
                <motion.p
                  className="text-sm sm:text-base leading-relaxed text-[#4C4C4C] mb-4"
                  initial={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {description}
                </motion.p>
              )}
            </AnimatePresence>

            <Link
              href={linkHref}
              className="inline-flex items-center gap-1 cursor-pointer text-[#1560BD] font-medium text-[14px] md:text-[16px] hover:underline"
            >
              Learn more
              <span aria-hidden="true"> →</span>
            </Link>
          </div>

          {/* Image - Right Side */}
          <div className="relative md:w-1/2 overflow-hidden order-1 md:order-2">
            <motion.div
              className="p-5 sm:p-6"
              initial={{ opacity: 1 }}
              animate={{ opacity: isExpanded ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full aspect-16/10 md:aspect-4/3 overflow-hidden rounded-lg">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 px-5 sm:px-6 pb-4 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-base md:text-xl font-semibold text-white">
                {title}
              </h3>
            </motion.div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Normal vertical layout
  return (
    <motion.article
      className="bg-white rounded-[15px] md:rounded-[30px] shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow overflow-hidden relative flex flex-col"
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative flex-1 overflow-hidden">
        <motion.div
          className="p-5 sm:p-6"
          initial={{ opacity: 1 }}
          animate={{ opacity: isExpanded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-full aspect-16/10 overflow-hidden rounded-lg border-2">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 px-5 sm:px-6 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-base md:text-xl font-semibold text-white">
            {title}
          </h3>
        </motion.div>
      </div>

      <div className="px-5 md:px-6 pb-5 md:pb-6 mt-2 md:mt-0 bg-white relative z-20">
        <motion.h3
          className="text-base md:text-xl font-semibold text-[#1560BD] mb-2"
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: isExpanded ? 0 : 1, 
            height: isExpanded ? 0 : "auto", 
            marginBottom: isExpanded ? 0 : "0.5rem" 
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <AnimatePresence initial={false}>
          {!isExpanded && (
            <motion.p
              className="text-sm sm:text-base leading-relaxed text-[#4C4C4C] mb-4"
              initial={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>

        <Link
          href={linkHref}
          className="inline-flex items-center gap-1 cursor-pointer text-[#1560BD] font-medium text-[14px] md:text-[16px] hover:underline"
        >
          Learn more
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </motion.article>
  );
}

const SUBSIDIARIES: SubsidiaryCardProps[] = [
  {
    imageSrc: "/assets/consulting.svg",
    imageAlt: "BertAndre Consulting – strategy and advisory",
    title: "BertAndre Consulting",
    description:
      "Strategy-led advisory and technology solutions supporting business growth and transformation.",
    linkHref: "/subsidiaries/bertandre-consulting",
    layout: "normal",
  },
  {
    imageSrc: "/assets/saair.svg",
    imageAlt: "SAAIR Energy – energy solutions",
    title: "SAAIR Energy",
    description:
      "Integrated energy solutions focused on metering, monitoring, and scalable energy infrastructure.",
    linkHref: "/subsidiaries/saair-energy",
    layout: "image-right",
  },
  {
    imageSrc: "/assets/real-estate.svg",
    imageAlt: "Primquisite Real Estate – property development",
    title: "Primquisite Real Estate",
    description:
      "Property development and PropTech-driven estate solutions delivering long-term asset value.",
    linkHref: "/subsidiaries/primquisite-real-estate",
    layout: "image-right",
  },
  {
    imageSrc: "/assets/autoDate.svg",
    imageAlt: "Autodate Smart Fleet – fleet management",
    title: "Autodate Smart Fleet",
    description:
      "Technology-enabled fleet administration and mobility management for enterprises.",
    linkHref: "/subsidiaries/autodate-smart-fleet",
    layout: "normal",
  },
];

export default function SubsidiariesSection() {
  return (
    <section className="bg-[#D0DFF2]">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-0">
        <div className="flex justify-center mb-10 pt-6 lg:mb-12">
          <Pill
            className="bg-white border border-[#1560BD] text-[#1560BD]"
            active
          >
            Subsidiaries
          </Pill>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 pb-10">
          {/* First Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {SUBSIDIARIES.slice(0, 2).map((sub) => (
              <SubsidiaryCard
                key={sub.title}
                imageSrc={sub.imageSrc}
                imageAlt={sub.imageAlt}
                title={sub.title}
                description={sub.description}
                linkHref={sub.linkHref}
                layout={sub.layout}
              />
            ))}
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {SUBSIDIARIES.slice(2, 4).map((sub) => (
              <SubsidiaryCard
                key={sub.title}
                imageSrc={sub.imageSrc}
                imageAlt={sub.imageAlt}
                title={sub.title}
                description={sub.description}
                linkHref={sub.linkHref}
                layout={sub.layout}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}