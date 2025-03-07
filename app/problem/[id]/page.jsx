"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Copy, Check, ThumbsUp, ThumbsDown, Clock, Award, BookOpen } from "lucide-react"
import Link from "next/link"
import { use } from "react" // Import React.use

export default function ProblemPage({ params }) {
  // Unwrap the params object using React.use
  const unwrappedParams = use(params)
  const problemId = unwrappedParams.id
  
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("description")
  const [code, setCode] = useState("function solution(n, m) {\n  // Your code here\n  \n  return result;\n}")

  // Mock problem data
  const problem = {
    id: problemId,
    title: "Theatre Square",
    difficulty: "Easy",
    acceptance: "72%",
    tags: ["math", "implementation"],
    timeLimit: "1 second",
    memoryLimit: "256 megabytes",
    description: `Theatre Square in the capital city of Berland has a rectangular shape with the size n × m meters. On the occasion of the city's anniversary, a decision was taken to pave the Square with square granite flagstones. Each flagstone has the size a × a.

What is the least number of flagstones needed to pave the Square? It's allowed to cover the surface larger than the Theatre Square, but the Square has to be covered. The flagstones are not allowed to be broken. The sides of flagstones should be parallel to the sides of the Square.`,
    inputFormat: `The input contains three positive integer numbers in the first line: n, m and a (1 ≤ n, m, a ≤ 10^9).`,
    outputFormat: `Write the needed number of flagstones.`,
    examples: [
      {
        input: "6 6 4",
        output: "4",
      },
      {
        input: "1 1 1",
        output: "1",
      },
      {
        input: "1000000000 1000000000 1",
        output: "1000000000000000000",
      },
    ],
    note: "In the first example the Square can be paved with 4 flagstones, each having the side length of 4. Note that the flagstones can go beyond the Theatre Square boundaries.",
  }

  const copyExample = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Problems
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {problem.id}. {problem.title}
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        problem.difficulty === "Easy"
                          ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                          : problem.difficulty === "Medium"
                            ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                            : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                      }`}
                    >
                      {problem.difficulty}
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      Acceptance: {problem.acceptance}
                    </span>
                    {problem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {problem.timeLimit}
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      {problem.memoryLimit}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <BookOpen className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <ThumbsUp className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <ThumbsDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === "description"
                      ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("submissions")}
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === "submissions"
                      ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  }`}
                >
                  Submissions
                </button>
                <button
                  onClick={() => setActiveTab("solutions")}
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === "solutions"
                      ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  }`}
                >
                  Solutions
                </button>
              </div>
            </div>

            <div className="p-6">
              {activeTab === "description" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Problem Statement</h2>
                    <div className="text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none">
                      <p>{problem.description}</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Input</h2>
                    <div className="text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none">
                      <p>{problem.inputFormat}</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Output</h2>
                    <div className="text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none">
                      <p>{problem.outputFormat}</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Examples</h2>
                    <div className="space-y-4">
                      {problem.examples.map((example, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 relative">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Input</h3>
                              <button
                                onClick={() => copyExample(example.input)}
                                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                              >
                                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                              </button>
                            </div>
                            <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                              {example.input}
                            </pre>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 relative">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Output</h3>
                              <button
                                onClick={() => copyExample(example.output)}
                                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                              >
                                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                              </button>
                            </div>
                            <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                              {example.output}
                            </pre>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {problem.note && (
                    <div>
                      <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Note</h2>
                      <div className="text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none">
                        <p>{problem.note}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "submissions" && (
                <div className="text-center py-8">
                  <p className="text-gray-600 dark:text-gray-400">You haven't made any submissions yet.</p>
                </div>
              )}

              {activeTab === "solutions" && (
                <div className="text-center py-8">
                  <p className="text-gray-600 dark:text-gray-400">No solutions available for this problem yet.</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden h-full flex flex-col">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Code Editor</h2>
            </div>
            <div className="flex-grow">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full p-4 font-mono text-sm bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-none focus:ring-0 resize-none"
                rows={20}
              />
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
                Submit
              </button>
              <div className="mt-2 flex justify-between">
                <button className="py-2 px-4 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  Run Code
                </button>
                <button className="py-2 px-4 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}