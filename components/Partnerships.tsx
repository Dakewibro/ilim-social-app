export default function Partnerships() {
  return (
    <section id="partnerships" className="py-12 md:py-16 px-4 bg-azulejoTaupe/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-darkText mb-4">
            Partner with <span className="gradient-text font-semibold">Ilim in Hong Kong</span>
          </h2>
          <p className="text-subtitle text-darkText/70 max-w-2xl mx-auto font-normal">
            Help your community discover books that support mental wellness and emotional growth
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-card p-8 md:p-12 shadow-soft border border-white/50 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-medium text-darkText mb-4">
                Trusted by institutions across Hong Kong
              </h3>
              <p className="text-body text-darkText/70 mb-6 font-normal leading-relaxed">
                We are eager to partner with libraries, universities, mental health organizations, NGOs, and bookstores 
                to bring emotionally-intelligent book recommendations to communities that need them most. We offer:
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-solarTerracotta flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-body text-darkText/70 font-normal">White-label solutions for your institution</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-solarTerracotta flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-body text-darkText/70 font-normal">Support for mental health initiatives</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-solarTerracotta flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-body text-darkText/70 font-normal">Custom integration for libraries and bookstores</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-solarTerracotta flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-body text-darkText/70 font-normal">Data insights for community wellbeing</span>
                </div>
              </div>

              <button className="bg-solarTerracotta text-white px-8 py-3 rounded-button font-medium hover:shadow-soft gentle-button hover:bg-primary-600 shadow-softer">
                Get in Touch
              </button>
            </div>

            <div>
              <div className="bg-calcarioCream/60 rounded-card p-8 border border-azulejoTaupe/20">
                <h4 className="text-lg font-medium text-darkText mb-6 text-center">
                  Organizations we serve
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/60 rounded-button">
                    <div className="text-3xl mb-2">📚</div>
                    <div className="text-sm font-medium text-darkText">Libraries</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-button">
                    <div className="text-3xl mb-2">🎓</div>
                    <div className="text-sm font-medium text-darkText">Universities</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-button">
                    <div className="text-3xl mb-2">💚</div>
                    <div className="text-sm font-medium text-darkText">Mental Health NGOs</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-button">
                    <div className="text-3xl mb-2">🏪</div>
                    <div className="text-sm font-medium text-darkText">Bookstores</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-body text-darkText/70 font-normal leading-relaxed">
            Are you an institution in Hong Kong looking to support your community's reading and mental wellness? 
            We'd love to collaborate with you.
          </p>
        </div>
      </div>
    </section>
  )
}

