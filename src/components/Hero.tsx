import {
  ArrowRight,
  Star,
  Users,
  Award,
  Heart,
  Calendar,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { FlipWords } from "./UI/FlipWords";
const stats = [
  {
    icon: Users,
    label: "Patients Healed",
    value: "10K+",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Star,
    label: "Success Rate",
    value: "95%",
    color: "from-emerald-400 to-teal-400",
  },
  {
    icon: Award,
    label: "Years Experience",
    value: "15+",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Heart,
    label: "Care Specialties",
    value: "8+",
    color: "from-rose-400 to-orange-400",
  },
];
const flipWords = [
  "Healing",
  "Freedom",
  "Wellness",
  "Strength",
  "Mobility",
  "Confidence",
  "Comfort",
  "Relief",
  "Balance",
  "Independence",
  "Peace",
  "Energy",
  "Vitality",
  "Hope",
];

const ModernHero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950 overflow-hidden flex items-center">
      {/* Background Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)]" /> */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {/* Radial gradient for the container to give a faded look */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 mt-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-slate-900 dark:text-white">
                  Transform{" "}
                </span>
                <span className="text-slate-900 dark:text-white  ">Your </span>
                <span className="text-slate-900 dark:text-white gradient-text">Journey </span>

                {/* <FlipWords words={["Recovery", "Healing", "Wellness"]} /> */}
                <span className="text-slate-900 dark:text-white ">Journey </span>
              </h1>
            </div>

            {/* Description */}

            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Experience world-class rehabilitation and pain management with our
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {" "}
                compassionate experts
              </span>{" "}
              and
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {" "}
                cutting-edge technology
              </span>
              .
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button className="group px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </button>

              <button className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200">
                View Services
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group/stat cursor-pointer p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all duration-200"
                >
                  <div className="flex justify-center mb-2">
                    <div
                      className={`p-2 bg-gradient-to-r ${stat.color} rounded-lg shadow-sm group-hover/stat:scale-105 transition-transform duration-200`}
                    >
                      <stat.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image + Stats Section */}

          <div className="relative">
            {/* Main Image Container */}

            <div className="relative group ">
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/80 dark:border-slate-700/50">
                {/* Hero Image */}
                <div className="relative overflow-hidden rounded-2xl mb-8 ">
                  <img
                    src="https://lh3.googleusercontent.com/p/AF1QipNLW6Fg5pO_EYi-8IoCUqAOZol16J7PDy9g1ag9=s1360-w1360-h1020-rw"
                    alt="Modern rehabilitation facility"
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className=" absolute bottom-3.5 right-8 inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-[0_6px_20px_rgba(147,51,234,0.35)] ring-1 ring-white/10 hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-inner">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white tracking-tight">
                    South India's Largest Rehabilitation Center
                  </span>
                </div>
              </div>

              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-1 -left-10 bg-glass-white dark:bg-glass-dark backdrop-blur-md p-3 rounded-2xl shadow-glass border border-white/20 dark:border-white/10 animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-md flex items-center justify-center shadow-lg">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      65K Sq.Ft
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      World-Class Facility
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -top-4 -right-6 bg-glass-white dark:bg-glass-dark backdrop-blur-md p-3 rounded-2xl shadow-glass border border-white/20 dark:border-white/10 animate-float animation-delay-2000"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      24/7 Care
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      Expert Support
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 dark:from-slate-900/80 to-transparent" />
    </div>
  );
};

export default ModernHero;
