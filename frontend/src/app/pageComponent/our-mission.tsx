"use client";

import React from "react";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <div className="min-h-screen bg-[#1F1F1F] py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#ffd53a]">Mission</span> & Vision
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driving the future of transparent trading through community and
            performance
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-[#ffd53a]/10 to-transparent border border-[#ffd53a]/20 rounded-2xl p-8 lg:p-12 h-full hover:border-[#ffd53a]/40 transition-all duration-300">
              {/* Icon */}
              <div className="w-16 h-16 bg-[#ffd53a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To provide traders with a platform where transparency,
                reputation, and performance lead to opportunity.
              </p>

              {/* Key Points */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#ffd53a] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Transparent trading practices</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#ffd53a] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Reputation-based community</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#ffd53a] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">
                    Performance-driven opportunities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-[#ffd53a]/10 to-transparent border border-[#ffd53a]/20 rounded-2xl p-8 lg:p-12 h-full hover:border-[#ffd53a]/40 transition-all duration-300">
              {/* Icon */}
              <div className="w-16 h-16 bg-[#ffd53a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the go-to marketplace where verified trading performance
                inspires trust and fuels community-driven growth.
              </p>

              {/* Key Points */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#ffd53a] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Verified trading performance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#ffd53a] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Trust-based marketplace</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#ffd53a] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">Community-driven growth</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

     
      </div>
    </div>
  );
};

export default OurMission;
