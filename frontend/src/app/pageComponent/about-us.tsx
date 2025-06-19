"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#1F1F1F]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-14">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-[#ffd53a]/20 to-transparent rounded-2xl border border-[#ffd53a]/30">
                <div className="absolute inset-0 bg-[#1F1F1F]/50 rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 mx-auto mb-4 border-2 border-[#ffd53a] rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-[#ffd53a]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold">
                      Traders Analyzing Data
                    </p>
                    <p className="text-sm mt-2">
                      Visual representation of trading strategies
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Headline */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Empowering Traders to{" "}
                <span className="text-[#ffd53a]">Share, Shine, and Earn</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                MeroTrade is a platform built for traders who want to showcase
                their strategies, build a following, and monetize their
                expertise — transparently.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-[#ffd53a] hover:bg-[#ffe56f] text-black font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                  Learn How It Works
                </button>
                <button className="border-2 border-[#ffd53a] text-[#ffd53a] hover:bg-[#ffd53a] hover:text-black font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                  View Top Traders
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ffd53a]">10K+</div>
                  <div className="text-gray-400 text-sm">Active Traders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ffd53a]">$50M+</div>
                  <div className="text-gray-400 text-sm">Total Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ffd53a]">95%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#ffd53a] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#ffd53a] opacity-10 rounded-full blur-3xl"></div>
          {/* Chart lines pattern */}
          <div className="absolute top-1/4 right-1/4 w-64 h-32 opacity-5">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <path
                d="M0,25 Q25,10 50,25 T100,25"
                stroke="#ffd53a"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M0,30 Q25,15 50,30 T100,30"
                stroke="#ffd53a"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
