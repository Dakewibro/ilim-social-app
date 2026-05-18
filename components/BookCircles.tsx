export default function BookCircles() {
  const circles = [
    {
      name: "Cozy Fantasy Readers",
      members: "25",
      vibe: "Warm & Gentle",
      bgClass: "bg-calcarioCream",
      emoji: "🌙"
    },
    {
      name: "Anime & Manga Lovers",
      members: "51",
      vibe: "Creative & Soft",
      bgClass: "bg-pedreiraPink",
      emoji: "🎨"
    },
    {
      name: "Healing & Growth",
      members: "38",
      vibe: "Supportive & Safe",
      bgClass: "bg-olivalVerde",
      emoji: "🌱"
    },
    {
      name: "Calm Sci-Fi",
      members: "42",
      vibe: "Curious & Peaceful",
      bgClass: "bg-solarTerracotta",
      emoji: "✨"
    }
  ]

  return (
    <section id="circles" className="py-12 md:py-16 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-darkText mb-4">
            Join local <span className="gradient-text font-semibold">Book Circles</span>
          </h2>
          <p className="text-subtitle text-darkText/70 max-w-2xl mx-auto font-normal">
            We support safe, welcoming spaces with weekly prompts and discussion topics for meaningful connections to grow naturally
          </p>
        </div>

        {/* Feature Highlights - Animated entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/70 backdrop-blur-sm rounded-card p-6 border border-white/50 shadow-softer animate-slide-up-bounce" style={{ animationDelay: '300ms' }}>
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-lg font-medium text-darkText mb-2">Welcoming Community</h3>
            <p className="text-body text-darkText/70 font-normal">Weekly prompts and gentle discussions that inspire connection</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-card p-6 border border-white/50 shadow-softer animate-slide-up-bounce" style={{ animationDelay: '200ms' }}>
            <div className="text-4xl mb-3">💭</div>
            <h3 className="text-lg font-medium text-darkText mb-2">No Social Pressure</h3>
            <p className="text-body text-darkText/70 font-normal">No likes or counts—just thoughtful conversations at your own pace</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-card p-6 border border-white/50 shadow-softer animate-slide-up-bounce" style={{ animationDelay: '100ms' }}>
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-lg font-medium text-darkText mb-2">Safe by Design</h3>
            <p className="text-body text-darkText/70 font-normal">Gentle AI moderation creates a supportive environment for everyone</p>
          </div>
        </div>

        {/* Circle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {circles.map((circle, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-card overflow-hidden shadow-softer hover:shadow-soft calm-card border border-white/50 animate-slide-up-bounce"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              {/* Solid Color Header - No gradients */}
              <div className={`h-24 ${circle.bgClass} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-5xl opacity-90">{circle.emoji}</div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-darkText mb-3">
                  {circle.name}
                </h3>
                <div className="flex items-center space-x-2 text-caption text-darkText/60 mb-3 font-normal">
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span>{circle.members} members</span>
                </div>
                <div className="inline-block bg-darkText/5 px-3 py-1.5 rounded-button text-caption font-normal text-darkText/70 mb-4">
                  {circle.vibe}
                </div>
                <button className="w-full bg-solarTerracotta text-white py-3 rounded-button font-medium hover:shadow-soft gentle-button hover:bg-primary-600">
                  Join Circle
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-body text-darkText/60 mb-4 font-normal">Can't find your space? That's okay.</p>
          <button className="text-primary-700 font-medium hover:text-primary-800 transition-colors underline underline-offset-4">
            Start your own Circle →
          </button>
        </div>
      </div>
    </section>
  )
}
