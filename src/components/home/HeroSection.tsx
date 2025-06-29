export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
            <span className="block">Transform Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Team Formation Experience
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            AI-powered platform that creates optimally balanced student teams by analyzing competencies, preferences, and schedules.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:opacity-90 transition-opacity">
              Find Your Team
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}