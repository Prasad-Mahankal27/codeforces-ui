"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BlogSection from "@/components/blog-section"
import TrendingTopics from "@/components/trending-topics"
import PopularProblems from "@/components/popular-problems"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Welcome to CodeForces</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Codeforces is a platform for competitive programming contests, offering regular competitions where
                participants solve algorithmic problems within a time limit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Next Contest</h3>
                  <p className="text-gray-700 dark:text-gray-300">Codeforces Round #835 (Div. 2)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Starts in 2 days, 4 hours</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 dark:text-green-300 mb-2">Your Progress</h3>
                  <p className="text-gray-700 dark:text-gray-300">Solved: 42 problems</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Current Rating: 1542</p>
                </div>
              </div>
            </section>

            <BlogSection />

            <PopularProblems />
          </div>

          <div className="space-y-6">
            <TrendingTopics />

            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Leaderboard</h2>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full mr-3 text-gray-700 dark:text-gray-300 font-medium">
                      {index}
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium text-gray-800 dark:text-gray-200">User{index}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Rating: {2000 - index * 50}</div>
                    </div>
                  </div>
                ))}
                <a href="#" className="block text-center text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2">
                  View Full Leaderboard
                </a>
              </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Upcoming Contests</h2>
              <div className="space-y-3">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="border-l-4 border-blue-500 dark:border-blue-400 pl-3 py-2">
                    <div className="font-medium text-gray-800 dark:text-gray-200">Codeforces Round #{830 + index}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {index === 1 ? "Tomorrow" : `In ${index} days`}, 19:00 UTC
                    </div>
                  </div>
                ))}
                <a href="#" className="block text-center text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2">
                  View All Contests
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

