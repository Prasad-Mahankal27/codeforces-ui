"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, MessageCircle } from "lucide-react"

export default function TrendingTopics() {
  const topics = [
    {
      id: 1,
      title: "How to approach the Knapsack problem?",
      category: "Algorithms",
      participants: 42,
      comments: 18,
      active: true,
    },
    {
      id: 2,
      title: "Tips for Codeforces Round #835",
      category: "Contests",
      participants: 76,
      comments: 34,
      active: true,
    },
    {
      id: 3,
      title: "Understanding segment trees",
      category: "Data Structures",
      participants: 29,
      comments: 15,
      active: false,
    },
    {
      id: 4,
      title: "Best resources for competitive programming",
      category: "General",
      participants: 53,
      comments: 27,
      active: true,
    },
    {
      id: 5,
      title: "How to debug efficiently during contests",
      category: "Tips & Tricks",
      participants: 38,
      comments: 21,
      active: false,
    },
  ]

  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <TrendingUp className="h-5 w-5 text-red-500 mr-2" />
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Trending Topics</h2>
      </div>

      <div className="space-y-4">
        {topics.map((topic) => (
          <motion.div
            key={topic.id}
            whileHover={{ x: 5 }}
            className="border-l-4 border-blue-500 dark:border-blue-400 pl-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-r-md"
          >
            <a href={`/discuss/${topic.id}`} className="block">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">{topic.title}</h3>
              <div className="flex items-center text-sm">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs mr-3">
                  {topic.category}
                </span>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mr-3">
                  <Users className="h-3 w-3 mr-1" />
                  {topic.participants}
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <MessageCircle className="h-3 w-3 mr-1" />
                  {topic.comments}
                </div>
                {topic.active && (
                  <span className="ml-auto flex items-center">
                    <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                    <span className="text-xs text-green-500">Active</span>
                  </span>
                )}
              </div>
            </a>
          </motion.div>
        ))}
        <a href="/discuss" className="block text-center text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2">
          View All Discussions
        </a>
      </div>
    </section>
  )
}

