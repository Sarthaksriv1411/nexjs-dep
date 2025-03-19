import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Welcome to My DevOps Journey
          </h1>
          
          <div className="bg-gray-800 rounded-lg p-8 shadow-xl mb-8">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-xl text-gray-300 mb-6">
              Hi, I'm <span className="text-blue-400 font-semibold">Sarthak</span>
            </p>
            <p className="text-lg text-gray-300">
              I'm passionate about learning DevOps and building efficient, scalable solutions.
              This is the beginning of my journey into the world of DevOps engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-3">Learning Path</h3>
              <p className="text-gray-300">Exploring DevOps tools and practices</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
              <p className="text-gray-300">Next.js and Modern Web Development</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-3">Future Goals</h3>
              <p className="text-gray-300">Mastering CI/CD and Cloud Platforms</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 