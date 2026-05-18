export default function CTA() {
  return (
    <section className="py-12 md:py-16 px-4 bg-white/30">
      <div className="max-w-5xl mx-auto">
        <div className="bg-solarTerracotta rounded-card shadow-soft overflow-hidden border border-white/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-medium mb-4 leading-tight">
                Begin your reading journey today
              </h2>
              <p className="text-subtitle text-white/90 mb-8 leading-relaxed font-normal">
                Join a growing community discovering books that truly resonate with them. 
                Free to start, no pressure, no commitments.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 flex-shrink-0 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-body font-normal text-white">Personalized AI recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 flex-shrink-0 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-body font-normal text-white">Access to all local Book Circles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 flex-shrink-0 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-body font-normal text-white">Curated wellness reading journeys</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 flex-shrink-0 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-body font-normal text-white">Safe, privacy-first communities</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-cafeEscuro px-8 py-4 rounded-button font-medium hover:shadow-soft gentle-button flex items-center justify-center space-x-2 hover:bg-calcarioCream shadow-soft">
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                  </svg>
                  <span>Try it now</span>
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-button font-normal hover:bg-white/20 gentle-button backdrop-blur-sm">
                  Learn More
                </button>
              </div>

              <p className="text-caption text-white/80 mt-6 font-normal">
                Available on iOS, Android, and Web • No credit card needed
              </p>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:block relative h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center p-8">
                <div className="space-y-4 w-full">
                  {/* Mock peaceful UI cards */}
                  <div className="bg-white/40 backdrop-blur-md rounded-card p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-white/40 rounded-card"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-2.5 bg-white/40 rounded-full w-3/4"></div>
                        <div className="h-2 bg-white/30 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <div className="h-16 bg-white/30 rounded-input"></div>
                  </div>
                  <div className="bg-white/40 backdrop-blur-md rounded-card p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-white/40 rounded-card"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-2.5 bg-white/40 rounded-full w-3/4"></div>
                        <div className="h-2 bg-white/30 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <div className="h-16 bg-white/30 rounded-input"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
