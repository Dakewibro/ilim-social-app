export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Share Your Interests",
      description: "Simply speak or write about what you are into. No pressure, just express yourself.",
      icon: (
        <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      bgClass: "bg-calcarioCream"
    },
    {
      number: "2",
      title: "We Listen Carefully",
      description: "Our AI processes your mood and words, understanding the identity behind what you share.",
      icon: (
        <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      bgClass: "bg-pedreiraPink"
    },
    {
      number: "3",
      title: "Discover Perfect Matches",
      description: "Receive thoughtful book recommendations with intriguing explanations of why each one fits you.",
      icon: (
        <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      bgClass: "bg-solarTerracotta"
    },
    {
      number: "4",
      title: "Connect & Grow",
      description: "Join welcoming Book Circles and begin your reading journey in a comfortable environment.",
      icon: (
        <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      bgClass: "bg-pedreiraPink/50"
    }
  ]

  return (
    <section id="how-it-works" className="py-12 md:py-16 px-4 bg-calcarioCream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-darkText mb-4">
            How <span className="gradient-text font-semibold">Ilim works</span>
          </h2>
          <p className="text-subtitle text-darkText/70 max-w-2xl mx-auto font-normal">
            A special process designed to understand you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div 
                className="bg-white/70 backdrop-blur-sm rounded-card p-8 shadow-softer hover:shadow-soft calm-card border border-white/50 h-full animate-slide-up-bounce"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon and Number */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 ${step.bgClass} rounded-card shadow-softer flex items-center justify-center text-cafeEscuro flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div className="text-4xl font-medium text-darkText/20 leading-none pt-2">
                    {step.number}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-medium text-darkText mb-3">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-body text-darkText/70 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Gentle Connection Line (desktop only) */}
              {index < steps.length - 2 && index % 2 === 0 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-0.5 bg-gradient-to-r from-primary-200 to-transparent transform translate-x-full -translate-y-1/2 opacity-40"></div>
              )}
            </div>
          ))}
        </div>

        {/* Gentle CTA */}
        <div className="text-center mt-12">
          <p className="text-body text-darkText/60 mb-6 font-normal">Take your time. There's no rush.</p>
          <button className="bg-solarTerracotta text-white px-10 py-4 rounded-button font-medium hover:shadow-soft gentle-button hover:bg-primary-600 shadow-softer">
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}
