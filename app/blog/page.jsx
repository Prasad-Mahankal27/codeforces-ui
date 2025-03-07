"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MessageSquare, ThumbsUp, Search, Filter, ChevronDown } from 'lucide-react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Mastering Dynamic Programming: A Comprehensive Guide",
    excerpt:
      "Dynamic programming is a powerful technique for solving complex problems by breaking them down into simpler subproblems. In this comprehensive guide, we'll explore the fundamentals of dynamic programming and how to apply it to solve algorithmic challenges effectively.",
    content: "Full content of the blog post...",
    author: "Alex Johnson",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "May 15, 2023",
    readTime: "12 min read",
    comments: 24,
    likes: 156,
    tags: ["algorithms", "dynamic programming", "tutorial"],
    featured: true,
  },
  {
    id: 2,
    title: "Preparing for Competitive Programming Contests: Tips and Strategies",
    excerpt:
      "Competitive programming contests can be intimidating, especially for beginners. In this article, we'll discuss effective strategies to prepare for contests, manage your time during competitions, and improve your problem-solving skills.",
    content: "Full content of the blog post...",
    author: "Maria Garcia",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "June 2, 2023",
    readTime: "8 min read",
    comments: 18,
    likes: 132,
    tags: ["competitive programming", "tips", "strategy"],
    featured: false,
  },
  {
    id: 3,
    title: "Understanding Graph Algorithms: BFS, DFS, and Beyond",
    excerpt:
      "Graph algorithms are fundamental to computer science and have numerous applications. In this blog post, we'll explore breadth-first search, depth-first search, and other important graph algorithms with practical examples and implementations.",
    content: "Full content of the blog post...",
    author: "David Kim",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "June 10, 2023",
    readTime: "15 min read",
    comments: 31,
    likes: 204,
    tags: ["graphs", "algorithms", "tutorial"],
    featured: true,
  },
  {
    id: 4,
    title: "The Art of Problem Decomposition in Competitive Programming",
    excerpt:
      "Breaking down complex problems into manageable parts is a crucial skill for any programmer. This article explores techniques for problem decomposition and how to approach difficult algorithmic challenges step by step.",
    content: "Full content of the blog post...",
    author: "Sarah Chen",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "July 5, 2023",
    readTime: "10 min read",
    comments: 15,
    likes: 98,
    tags: ["problem solving", "competitive programming", "techniques"],
    featured: false,
  },
  {
    id: 5,
    title: "Optimizing Your Code: Performance Tips for Competitive Programmers",
    excerpt:
      "In competitive programming, code efficiency can make the difference between success and failure. Learn practical optimization techniques to make your algorithms faster and more memory-efficient.",
    content: "Full content of the blog post...",
    author: "Michael Brown",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "July 22, 2023",
    readTime: "11 min read",
    comments: 27,
    likes: 176,
    tags: ["optimization", "performance", "competitive programming"],
    featured: false,
  },
  {
    id: 6,
    title: "Introduction to Number Theory for Competitive Programming",
    excerpt:
      "Number theory problems are common in programming contests. This guide introduces essential number theory concepts and algorithms that every competitive programmer should know.",
    content: "Full content of the blog post...",
    author: "Emily Wang",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "August 8, 2023",
    readTime: "14 min read",
    comments: 22,
    likes: 145,
    tags: ["number theory", "mathematics", "algorithms"],
    featured: true,
  },
]

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  // Add dark mode state
  const [darkMode, setDarkMode] = useState(false)
  
  // Add toggle function for dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  const featuredPosts = blogPosts.filter(post => post.featured)
  const filteredPosts = activeTag === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(activeTag))
  
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

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
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 md:mb-0">Blog</h1>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-grow sm:max-w-xs">
              </div>
              <div className="relative">
                {showFilters && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border border-gray-200 dark:border-gray-700">
                    <div className="p-3 max-h-60 overflow-y-auto">
                      <button
                        onClick={() => {
                          setActiveTag("all")
                          setShowFilters(false)
                        }}
                        className={`w-full text-left px-2 py-1 rounded text-sm mb-1 ${
                          activeTag === "all"
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        All Tags
                      </button>
                      {allTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            setActiveTag(tag)
                            setShowFilters(false)
                          }}
                          className={`w-full text-left px-2 py-1 rounded text-sm mb-1 ${
                            activeTag === tag
                              ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                              : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {activeTag === "all" && featuredPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-40 bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <span className="text-blue-500 dark:text-blue-300 font-medium">Featured Image</span>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 mr-2"></div>
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold mt-6 mb-6 text-gray-800 dark:text-gray-100">
              {activeTag === "all" ? "All Articles" : `Articles tagged with "${activeTag}"`}
            </h2>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={item}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 mr-2"></div>
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {post.comments}
                        </div>
                        <div className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {post.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                Previous
              </button>
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white">1</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                2
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                3
              </button>
              <span className="text-gray-500 dark:text-gray-400">...</span>
              <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                10
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                Next
              </button>
            </nav>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
