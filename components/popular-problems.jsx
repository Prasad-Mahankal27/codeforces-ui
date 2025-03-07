"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function PopularProblems() {
  const problems = [
    {
      id: "1A",
      title: "Theatre Square",
      difficulty: "Easy",
      solvedCount: 125842,
      tags: ["math", "implementation"],
    },
    {
      id: "4A",
      title: "Watermelon",
      difficulty: "Easy",
      solvedCount: 198753,
      tags: ["brute force", "math"],
    },
    {
      id: "71A",
      title: "Way Too Long Words",
      difficulty: "Easy",
      solvedCount: 187654,
      tags: ["strings", "implementation"],
    },
    {
      id: "158A",
      title: "Next Round",
      difficulty: "Easy",
      solvedCount: 156789,
      tags: ["implementation"],
    },
    {
      id: "231A",
      title: "Team",
      difficulty: "Easy",
      solvedCount: 145678,
      tags: ["brute force", "greedy"],
    },
  ]

  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Popular Problems</h2>
        <a
          href="/problems"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center"
        >
          View All <ArrowRight className="h-4 w-4 ml-1" />
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                #
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Title
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Difficulty
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Solved By
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Tags
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {problems.map((problem, index) => (
              <motion.tr
                key={problem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                  {problem.id}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <a
                    href={`/problem/${problem.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    {problem.title}
                  </a>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
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
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {problem.solvedCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1">
                    {problem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

