"use client"

import { motion } from "framer-motion"
import { Calendar, MessageSquare, ThumbsUp } from "lucide-react"

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Mastering Dynamic Programming: A Comprehensive Guide",
      excerpt:
        "Dynamic programming is a powerful technique for solving complex problems by breaking them down into simpler subproblems...",
      author: "Alex Johnson",
      date: "May 15, 2023",
      comments: 24,
      likes: 156,
      tags: ["algorithms", "dynamic programming", "tutorial"],
    },
    {
      id: 2,
      title: "Preparing for Competitive Programming Contests: Tips and Strategies",
      excerpt:
        "Competitive programming contests can be intimidating, especially for beginners. In this article, we'll discuss effective strategies...",
      author: "Maria Garcia",
      date: "June 2, 2023",
      comments: 18,
      likes: 132,
      tags: ["competitive programming", "tips", "strategy"],
    },
    {
      id: 3,
      title: "Understanding Graph Algorithms: BFS, DFS, and Beyond",
      excerpt:
        "Graph algorithms are fundamental to computer science and have numerous applications. In this blog post, we'll explore...",
      author: "David Kim",
      date: "June 10, 2023",
      comments: 31,
      likes: 204,
      tags: ["graphs", "algorithms", "tutorial"],
    },
  ]

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

  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Latest Blog Posts</h2>
        <a href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
          View All
        </a>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            variants={item}
            className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
              <a href={`/blog/${blog.id}`}>{blog.title}</a>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{blog.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span className="mr-4">By {blog.author}</span>
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                {blog.date}
              </div>
              <div className="flex items-center mr-4">
                <MessageSquare className="h-4 w-4 mr-1" />
                {blog.comments}
              </div>
              <div className="flex items-center">
                <ThumbsUp className="h-4 w-4 mr-1" />
                {blog.likes}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

