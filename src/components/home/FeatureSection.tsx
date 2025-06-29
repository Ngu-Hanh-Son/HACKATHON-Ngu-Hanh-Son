export default function FeatureSection() {
  const features = [
    {
      title: "AI-Driven Matching",
      description: "Advanced algorithms analyze multiple factors to create perfectly balanced teams",
      icon: "🎯"
    },
    {
      title: "Skill Assessment",
      description: "Comprehensive evaluation of technical and soft skills for optimal team composition",
      icon: "📊"
    },
    {
      title: "Schedule Compatibility",
      description: "Smart scheduling system ensures team members can collaborate effectively",
      icon: "🗓"
    },
    {
      title: "Real-time Analytics",
      description: "Monitor team formation progress and success metrics in real-time",
      icon: "📈"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose TeamFinder?
          </h2>
          <p className="mt-4 text-gray-500">
            Our platform combines cutting-edge AI with proven team formation principles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}