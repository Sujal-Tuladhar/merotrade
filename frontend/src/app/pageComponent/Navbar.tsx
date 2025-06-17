"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
// import CircularText from "@/components/TextAnimations/CircularText/CircularText";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full h-16 flex items-center justify-between px-4 md:px-8 lg:px-16 z-50 bg-[#252524] text-white"
    >
      {/* Left section - Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <div className="text-2xl font-bold text-[#ffd53a]"> merotrade </div>
      </motion.div>

      {/* Right section - Navigation and buttons */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4 md:space-x-6"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="hidden md:block cursor-pointer hover:text-gray-400 transition-colors"
        >
          About Us
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="hidden md:block cursor-pointer hover:text-gray-400 transition-colors"
        >
          Pricing
        </motion.div>

        <Button
          size="sm"
          className="flex items-center gap-2 transition-colors bg-transparent border border-white text-white hover:bg-white hover:text-[#252524]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>
          <span className="hidden md:inline">Login</span>
        </Button>

        <Button
          variant="default"
          className="transition-colors bg-white text-[#252524] hover:bg-gray-200"
        >
          <span className="hidden md:inline">Signup</span>
          <span className="md:hidden">Sign In</span>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
