"use client";

import { motion } from "framer-motion";
import React from "react";

const OurCoreValue = () => {
  return (
    <div className=" bg-[#1F1F1F] mb-30 ">
      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Our <span className="text-[#ffd53a]">Core Values</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#ffd53a] rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Transparency
            </h4>
            <p className="text-gray-400">Open and honest trading practices</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#ffd53a] rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Community</h4>
            <p className="text-gray-400">Building strong trading networks</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#ffd53a] rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Performance
            </h4>
            <p className="text-gray-400">Results-driven success metrics</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurCoreValue;
