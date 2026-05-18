export default function Awards() {
  return (
    <section className="py-10 px-4 bg-white/20">
      <div className="max-w-6xl mx-auto">
        {/* Awards Section with Actual Logos */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-xl md:text-2xl font-medium text-darkText mb-6">Recognition & Awards</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hack4SDG GenAI Hackathon Award */}
            <div className="bg-white/90 backdrop-blur-sm rounded-card p-6 md:p-8 border border-azulejoTaupe/20 shadow-soft hover:shadow-soft calm-card animate-slide-up">
              {/* Logo Recreation */}
              <div className="bg-[#0066CC] rounded-input p-6 mb-4 text-center">
                <div className="text-white font-bold tracking-wider mb-2" style={{ fontSize: '18px', letterSpacing: '0.15em' }}>
                  GENAI HACKATHON
                </div>
                <div className="flex items-center justify-center gap-2 text-white">
                  <span className="font-bold text-sm">FOR</span>
                  <div className="text-[10px] leading-tight">
                    <div>SUSTAINABLE</div>
                    <div>DEVELOPMENT</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm">G</span>
                    <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="#0066CC">
                        <circle cx="12" cy="12" r="10" fill="white"/>
                        <circle cx="12" cy="12" r="8" fill="#0066CC"/>
                        <circle cx="12" cy="12" r="4" fill="white"/>
                      </svg>
                    </div>
                    <span className="font-bold text-sm">ALS</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-medium text-darkText mb-2">Semi-Finalist</div>
                <div className="text-body text-darkText/70 font-normal">
                  Selected from hundreds of submissions for innovative AI solutions addressing SDG's
                </div>
              </div>
            </div>

            {/* Hong Kong Techathon+ Award */}
            <div className="bg-white/90 backdrop-blur-sm rounded-card p-6 md:p-8 border border-azulejoTaupe/20 shadow-soft hover:shadow-soft calm-card animate-slide-up" style={{ animationDelay: '100ms' }}>
              {/* Logo Recreation */}
              <div className="bg-white rounded-input p-6 mb-4 text-center border-2 border-[#1e3a5f]/10">
                <div className="text-[#1e3a5f] text-xs font-semibold mb-1 tracking-wide">HONG KONG</div>
                <div className="text-[#1e3a5f] font-bold mb-2 flex items-center justify-center gap-1" style={{ fontSize: '20px', letterSpacing: '0.05em' }}>
                  <span>TECHATHON</span>
                  <span className="text-2xl">+</span>
                  <span className="text-xs border-l-2 border-gray-300 pl-3 ml-2">
                    <span className="font-bold text-base">10<sup className="text-[8px]">th</sup></span>
                    <div className="text-[9px] font-semibold mt-0.5">ANNIVERSARY</div>
                  </span>
                </div>
                <div className="flex justify-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-medium text-darkText mb-2">Semi-Pitch Finalist</div>
                <div className="text-body text-darkText/70 font-normal">
                  Advanced to semi-pitch stage in Hong Kong's premier technology innovation competition
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
