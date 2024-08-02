import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const Section = ({ section }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] mb-6"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        overflow: "hidden",
      }}
    >
      <motion.div
        className="p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <h2 className="text-xl font-bold text-white flex justify-between items-center">
          {section.title}
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </h2>
      </motion.div>
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="p-4 space-y-3">
          {section.links.map((link: any) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="flex items-center space-x-3 p-2 rounded-lg text-white"
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {React.createElement(link.icon, { size: 20 })}
              <span>{link.text}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Section;