export default function Safety() {
  const safetyFeatures = [
    {
      title: "Gentle Moderation",
      description: "AI and human care teams work together to maintain a supportive, safe environment for all.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      title: "Your Privacy Matters",
      description: "You decide what to share. Transcripts are opt-in only, and you can delete everything anytime.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      )
    },
    {
      title: "Emotional Support",
      description: "If you're feeling distressed, we will offer resources and support from trusted organizations.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      )
    },
    {
      title: "Anonymous Browsing",
      description: "Explore and discover books without creating an account. No need to share personal details.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      )
    },
    {
      title: "Content Awareness",
      description: "Sensitive topics are labeled with customizable filters so you can read comfortably.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      )
    },
    {
      title: "Global Standards",
      description: "Built with GDPR compliance. Your rights to data access, portability, and deletion are protected.",
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )
    }
  ]

  return (
    <section id="safety" className="py-12 md:py-16 px-4 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-darkText mb-4">
            Your safety is <span className="gradient-text font-semibold">our foundation</span>
          </h2>
          <p className="text-subtitle text-darkText/70 max-w-2xl mx-auto font-normal">
            Every feature designed with your wellbeing and privacy at heart
          </p>
        </div>

        {/* Main Safety Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-card shadow-soft p-8 md:p-12 mb-12 border border-white/50">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center space-x-2 bg-olivalVerde/40 px-4 py-2 rounded-button mb-6">
                <svg className="w-5 h-5 text-cafeEscuro" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <span className="text-caption font-medium text-cafeEscuro">Safe by Design</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-darkText mb-4">
                A space you can trust
              </h3>
              <p className="text-body text-darkText/70 leading-relaxed mb-6 font-normal">
                Ilim is going to be designed with mental health professionals, privacy advocates, 
                and community safety experts. Every interaction prioritizes your comfort and security.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-600 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-body text-darkText/70 font-normal">End-to-end encryption for your personal data</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-600 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-body text-darkText/70 font-normal">Thoughtful AI with caring human oversight</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-600 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-body text-darkText/70 font-normal">Checking discussion forums, book circles, and user interactions <u>before</u> they are posted on the app</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-600 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-body text-darkText/70 font-normal">Partnership with trusted mental health organizations</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 bg-olivalVerde/30 rounded-card p-8 flex items-center justify-center aspect-square">
              <svg className="w-32 h-32 md:w-40 md:h-40 text-cafeEscuro/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Safety Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-card p-6 shadow-softer hover:shadow-soft calm-card border border-white/50"
            >
              <div className="w-12 h-12 bg-azulejoTaupe/40 rounded-card flex items-center justify-center text-cafeEscuro mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-darkText mb-2">
                {feature.title}
              </h3>
              <p className="text-body text-darkText/70 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Gentle Crisis Resources Banner */}
        <div className="mt-12 bg-pedreiraPink/60 rounded-card p-6 md:p-8 shadow-softer border border-white/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-medium text-darkText mb-2">Need someone to talk to?</h3>
              <p className="text-body text-darkText/70 font-normal">If you're in crisis, compassionate help is available 24/7</p>
            </div>
            <button className="bg-cafeEscuro text-white px-6 py-3 rounded-button font-medium hover:shadow-soft gentle-button whitespace-nowrap hover:bg-cafeEscuro/90 shadow-softer">
              Access Support Resources
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
