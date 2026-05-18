'use client'

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
        </svg>
      ),
      title: "Voice-Powered Discovery",
      description: "Simply speak about what you love and what you feel. Our AI give meaning to your interests.",
      bgColor: "bg-solarTerracotta/50"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Mood-Based Matching",
      description: "Our designed mood wheel helps you express yourself. Books match your mental state, not just strings of text.",
      bgColor: "bg-pedreiraPink/50"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      title: "Transparency",
      description: "Every recommendation comes with a thoughtful explanation of why certain books suit you better.",
      bgColor: "bg-calcarioCream"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: "Safe Book Circles",
      description: "Join cozy communities with pressure-free moderation. No pursuit of likes or follows — just meaningful connections.",
      bgColor: "bg-azulejoTaupe/50"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      title: "Privacy First",
      description: "Your data, your choice. Everything is opt-in, encrypted, and you can delete anytime.",
      bgColor: "bg-olivalVerde/50"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      title: "Wellness Journeys",
      description: "Curated reading paths that support your growth and healing at your own pace.",
      bgColor: "bg-pedreiraPink/40"
    }
  ]

  return (
    <section id="features" className="py-12 md:py-16 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-darkText mb-4">
            Features designed for <span className="gradient-text font-semibold">your wellbeing</span>
          </h2>
          <p className="text-subtitle text-darkText/70 max-w-2xl mx-auto font-normal">
            Every detail crafted to support your emotional journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-card p-8 shadow-softer hover:shadow-soft calm-card border border-white/50 animate-slide-up-bounce group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateX(3deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg)'}
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-card flex items-center justify-center text-darkText mb-6 shadow-softer`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-darkText mb-3">
                {feature.title}
              </h3>
              <p className="text-body text-darkText/70 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
