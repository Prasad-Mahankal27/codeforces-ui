"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Filter } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Mock data for problems
const problems = [
  {
    id: "1A",
    title: "Theatre Square",
    difficulty: "Easy",
    acceptance: "72%",
    tags: ["math", "implementation"],
    solved: true,
  },
  {
    id: "4A",
    title: "Watermelon",
    difficulty: "Easy",
    acceptance: "85%",
    tags: ["brute force", "math"],
    solved: false,
  },
  {
    id: "71A",
    title: "Way Too Long Words",
    difficulty: "Easy",
    acceptance: "91%",
    tags: ["strings", "implementation"],
    solved: true,
  },
  {
    id: "158A",
    title: "Next Round",
    difficulty: "Easy",
    acceptance: "78%",
    tags: ["implementation"],
    solved: false,
  },
  {
    id: "231A",
    title: "Team",
    difficulty: "Easy",
    acceptance: "82%",
    tags: ["brute force", "greedy"],
    solved: false,
  },
  {
    id: "282A",
    title: "Bit++",
    difficulty: "Easy",
    acceptance: "87%",
    tags: ["implementation"],
    solved: true,
  },
  {
    id: "50A",
    title: "Domino piling",
    difficulty: "Easy",
    acceptance: "79%",
    tags: ["math", "greedy"],
    solved: false,
  },
  {
    id: "118A",
    title: "String Task",
    difficulty: "Medium",
    acceptance: "68%",
    tags: ["strings", "implementation"],
    solved: false,
  },
  {
    id: "339A",
    title: "Helpful Maths",
    difficulty: "Easy",
    acceptance: "81%",
    tags: ["greedy", "strings", "sortings"],
    solved: true,
  },
  {
    id: "112A",
    title: "Petya and Strings",
    difficulty: "Easy",
    acceptance: "76%",
    tags: ["strings", "implementation"],
    solved: false,
  },
]

export default function ProblemsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const filteredProblems =
    activeFilter === "all"
      ? problems
      : activeFilter === "solved"
        ? problems.filter((p) => p.solved)
        : problems.filter((p) => !p.solved)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  // Prevent hydration mismatch by only rendering after component mounts
  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Problems</h1>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeFilter === "all"
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  All Problems
                </button>
                <button
                  onClick={() => setActiveFilter("solved")}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeFilter === "solved"
                      ? "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  Solved
                </button>
                <button
                  onClick={() => setActiveFilter("unsolved")}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeFilter === "unsolved"
                      ? "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  Unsolved
                </button>
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  <Filter className="h-4 w-4" />
                  <span className="text-sm">Filters</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                </button>
                {showFilters && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-10 border border-gray-200 dark:border-gray-600">
                    <div className="p-3">
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Difficulty</div>
                      <div className="space-y-1">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-blue-500" />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Easy</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-blue-500" />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Medium</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-blue-500" />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Hard</span>
                        </label>
                      </div>
                      <div className="mt-3 mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Tags</div>
                      <div className="space-y-1">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-blue-500" />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Math</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-blue-500" />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Strings</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded text-blue-500" />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Implementation</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Difficulty
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Acceptance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Tags
                    </th>
                  </tr>
                </thead>
                <motion.tbody
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
                >
                  {filteredProblems.map((problem) => (
                    <motion.tr
                      key={problem.id}
                      variants={item}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div
                            className={`h-4 w-4 rounded-full ${
                              problem.solved ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
                            }`}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        {problem.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          href={`/problem/${problem.id}`}
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                        >
                          {problem.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            problem.difficulty === "Easy"
                              ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                              : problem.difficulty === "Medium"
                                ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                                : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                          }`}
                        >
                          {problem.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {problem.acceptance}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {problem.tags && (
                          <div className="flex flex-wrap gap-1">
                            {problem.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>
            <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Showing <span className="font-medium">{filteredProblems.length}</span> problems
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Previous
                </button>
                <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Next
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}