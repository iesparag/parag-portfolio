import { motion, Variants } from 'framer-motion';
import React from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const menuVariants: Variants = {
  closed: {
    scale: 1
  },
  open: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Path = (props: React.SVGProps<motion.path>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

export default function HamburgerMenu({ isOpen, toggleMenu }: HamburgerMenuProps) {
  return (
    <motion.button
      className="fixed top-6 right-6 z-50 p-2 text-gray-800 dark:text-white bg-white dark:bg-gray-900 rounded-full shadow-lg"
      onClick={toggleMenu}
      variants={menuVariants}
      animate={isOpen ? "open" : "closed"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </motion.button>
  );
}
