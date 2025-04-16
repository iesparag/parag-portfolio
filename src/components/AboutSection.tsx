'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { aboutData } from '@/data/about-data';
import { BsCodeSlash, BsLightbulb } from 'react-icons/bs';
import { FaUsers, FaRocket } from 'react-icons/fa';

export default function AboutSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section className="py-16 w-full relative overflow-hidden bg-gradient-to-b from-background to-background/50">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              delay: i * 20
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        ))}
      </div>

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold inline-block bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            About Me
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Profile & Stats */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Profile Image Container */}
              <div className="relative z-10 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-background/80 backdrop-blur-sm">
                  {/* Add your profile image here */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold bg-gradient-to-r from-primary/40 to-primary/20 bg-clip-text text-transparent">
                      {aboutData.initials}
                    </span>
                  </div>
                </div>
                {/* Animated border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-30 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Stats Cards */}
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="absolute bg-card/30 backdrop-blur-md px-4 py-2 rounded-xl border border-primary/10 shadow-xl"
                  style={{
                    left: `${Math.random() * 40 + 30}%`,
                    top: `${Math.random() * 40 + 30}%`,
                    transform: `rotate(${Math.random() * 20 - 10}deg)`,
                  }}
                >
                  <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BsCodeSlash, label: "Full Stack", value: "Developer" },
                { icon: FaUsers, label: "Team", value: "Player" },
                { icon: BsLightbulb, label: "Problem", value: "Solver" },
                { icon: FaRocket, label: "Fast", value: "Learner" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-card/30 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:border-primary/20 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative">
                    <stat.icon className="w-6 h-6 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-lg font-semibold">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - About Text */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50 rounded-2xl" />
              <div className="relative space-y-6">
                {aboutData.description.split('. ').map((sentence, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-lg text-muted-foreground leading-relaxed"
                  >
                    {sentence.trim()}.
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                {
                  title: "Frontend Expertise",
                  description: "Crafting beautiful, responsive UIs with React & Modern CSS",
                },
                {
                  title: "Backend Mastery",
                  description: "Building robust APIs and services with Node.js & MongoDB",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative">
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
