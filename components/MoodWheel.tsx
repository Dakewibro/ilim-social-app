'use client'

import { useState } from 'react'

interface Emotion {
  primary: string
  color: string
  secondary: {
    name: string
    tertiary: string[]
  }[]
}

const emotions: Emotion[] = [
  {
    primary: "Happy",
    color: "#E8A55C",
    secondary: [
      { name: "Playful", tertiary: ["Aroused", "Cheeky", "Free"] },
      { name: "Content", tertiary: ["Joyful", "Curious", "Successful"] },
      { name: "Interested", tertiary: ["Inquisitive", "Confident"] },
      { name: "Proud", tertiary: ["Respected", "Valued"] },
    ]
  },
  {
    primary: "Surprised",
    color: "#E8A55C",
    secondary: [
      { name: "Startled", tertiary: ["Shocked", "Dismayed"] },
      { name: "Confused", tertiary: ["Disillusioned", "Perplexed", "Overwhelmed"] },
      { name: "Amazed", tertiary: ["Astonished", "Awe"] },
      { name: "Excited", tertiary: ["Eager", "Energetic"] }
    ]
  },
  {
    primary: "Bad",
    color: "#9BA17F",
    secondary: [
      { name: "Tired", tertiary: ["Sleepy", "Unfocused"] },
      { name: "Stressed", tertiary: ["Overwhelmed", "Pressured", "Rushed"] },
      { name: "Busy", tertiary: ["Apathetic", "Indifferent"] },
      { name: "Bored", tertiary: ["Helpless"] }
    ]
  },
  {
    primary: "Fearful",
    color: "#B09A88",
    secondary: [
      { name: "Scared", tertiary: ["Helpless", "Frightened"] },
      { name: "Anxious", tertiary: ["Overwhelmed", "Worried"] },
      { name: "Insecure", tertiary: ["Inadequate", "Inferior"] },
      { name: "Weak", tertiary: ["Worthless", "Insignificant", "Excluded"] }
    ]
  },
  {
    primary: "Angry",
    color: "#B09A88",
    secondary: [
      { name: "Let down", tertiary: ["Betrayed", "Resentful"] },
      { name: "Humiliated", tertiary: ["Ridiculed", "Disrespected"] },
      { name: "Bitter", tertiary: ["Indignant", "Violated"] },
      { name: "Mad", tertiary: ["Furious", "Jealous", "Provoked"] }
    ]
  },
  {
    primary: "Disgusted",
    color: "#9BA17F",
    secondary: [
      { name: "Disapproving", tertiary: ["Judgmental", "Embarrassed"] },
      { name: "Disappointed", tertiary: ["Appalled", "Revolted"] },
      { name: "Awful", tertiary: ["Nauseated", "Detestable"] },
      { name: "Repelled", tertiary: ["Horrified", "Hesitant"] }
    ]
  },
  {
    primary: "Sad",
    color: "#D4A394",
    secondary: [
      { name: "Depressed", tertiary: ["Inferior", "Empty"] },
      { name: "Hurt", tertiary: ["Embarrassed", "Disappointed"] },
      { name: "Guilty", tertiary: ["Ashamed", "Remorseful"] },
      { name: "Despair", tertiary: ["Grief", "Powerless"] },
      { name: "Lonely", tertiary: ["Isolated", "Abandoned"] }
    ]
  }
]

export default function MoodWheel() {
  const [selectedPrimary, setSelectedPrimary] = useState<number[]>([])
  const [selectedSecondary, setSelectedSecondary] = useState<{primary: number, secondary: number}[]>([])

  const handlePrimaryClick = (index: number) => {
    if (selectedPrimary.includes(index)) {
      // Remove this primary and all its children
      setSelectedPrimary(selectedPrimary.filter(i => i !== index))
      setSelectedSecondary(selectedSecondary.filter(s => s.primary !== index))
    } else {
      setSelectedPrimary([...selectedPrimary, index])
    }
  }

  const handleSecondaryClick = (primaryIdx: number, secondaryIdx: number) => {
    const existing = selectedSecondary.find(s => s.primary === primaryIdx && s.secondary === secondaryIdx)
    if (existing) {
      setSelectedSecondary(selectedSecondary.filter(s => !(s.primary === primaryIdx && s.secondary === secondaryIdx)))
    } else {
      setSelectedSecondary([...selectedSecondary, { primary: primaryIdx, secondary: secondaryIdx }])
    }
  }

  const totalEmotions = emotions.length
  const angleStep = 360 / totalEmotions

  const createArc = (innerRadius: number, outerRadius: number, startAngle: number, endAngle: number) => {
    const start = (startAngle - 90) * (Math.PI / 180)
    const end = (endAngle - 90) * (Math.PI / 180)
    
    const x1 = 200 + innerRadius * Math.cos(start)
    const y1 = 200 + innerRadius * Math.sin(start)
    const x2 = 200 + outerRadius * Math.cos(start)
    const y2 = 200 + outerRadius * Math.sin(start)
    const x3 = 200 + outerRadius * Math.cos(end)
    const y3 = 200 + outerRadius * Math.sin(end)
    const x4 = 200 + innerRadius * Math.cos(end)
    const y4 = 200 + innerRadius * Math.sin(end)
    
    const largeArc = endAngle - startAngle > 180 ? 1 : 0
    
    return `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1} Z`
  }

  const getLabelPosition = (radius: number, angle: number) => {
    const rad = (angle - 90) * (Math.PI / 180)
    return {
      x: 200 + radius * Math.cos(rad),
      y: 200 + radius * Math.sin(rad)
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-4">
      <div className="text-center mb-3">
        <h3 className="text-2xl md:text-3xl font-medium text-darkText mb-2">How are you feeling today?</h3>
        <p className="text-subtitle text-darkText/70">Select one or multiple emotions that resonate with you</p>
      </div>

      {/* Circular Mood Wheel - Large on mobile for text readability */}
      <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto aspect-square mb-4">
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-lg">
          {/* Primary emotions - Innermost ring */}
          {emotions.map((emotion, primaryIdx) => {
            const startAngle = primaryIdx * angleStep
            const endAngle = (primaryIdx + 1) * angleStep
            const midAngle = startAngle + angleStep / 2
            const isPrimarySelected = selectedPrimary.includes(primaryIdx)
            const labelPos = getLabelPosition(90, midAngle)

            return (
              <g key={primaryIdx}>
                {/* Primary segment */}
                <path
                  d={createArc(60, 120, startAngle, endAngle)}
                  fill={emotion.color}
                  opacity={isPrimarySelected ? "1" : "0.8"}
                  className="cursor-pointer hover:opacity-100 transition-all duration-300"
                  onClick={() => handlePrimaryClick(primaryIdx)}
                  style={{
                    filter: isPrimarySelected ? 'drop-shadow(0 0 8px rgba(0,0,0,0.3))' : 'none',
                  }}
                />
                
                {/* Primary label */}
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-semibold fill-white cursor-pointer select-none pointer-events-none"
                  style={{ fontSize: '13px' }}
                >
                  {emotion.primary}
                </text>

                {/* Secondary emotions - Outer ring (only if primary selected) */}
                {isPrimarySelected && emotion.secondary.map((sec, secIdx) => {
                  const secPerPrimary = emotion.secondary.length
                  const secAngleStep = angleStep / secPerPrimary
                  const secStartAngle = startAngle + secIdx * secAngleStep
                  const secEndAngle = secStartAngle + secAngleStep
                  const secMidAngle = secStartAngle + secAngleStep / 2
                  const isSecSelected = selectedSecondary.some(s => s.primary === primaryIdx && s.secondary === secIdx)
                  const secLabelPos = getLabelPosition(152, secMidAngle)

                  return (
                    <g key={`${primaryIdx}-${secIdx}`} className="animate-fade-in">
                      {/* Secondary segment */}
                      <path
                        d={createArc(120, 195, secStartAngle, secEndAngle)}
                        fill={emotion.color}
                        opacity={isSecSelected ? "0.95" : "0.65"}
                        className="cursor-pointer hover:opacity-90 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSecondaryClick(primaryIdx, secIdx)
                        }}
                        style={{
                          filter: isSecSelected ? 'drop-shadow(0 0 8px rgba(0,0,0,0.3))' : 'none',
                        }}
                      />
                      
                      {/* Secondary label */}
                      <text
                        x={secLabelPos.x}
                        y={secLabelPos.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="font-normal fill-white cursor-pointer select-none pointer-events-none"
                        style={{ fontSize: '6.5px', letterSpacing: '-0.3px' }}
                      >
                        {sec.name}
                      </text>
                    </g>
                  )
                })}
              </g>
            )
          })}

          {/* Center circle - Larger */}
          <circle
            cx="200"
            cy="200"
            r="55"
            fill="#F5F1E8"
            className="drop-shadow-lg"
          />
          <text
            x="200"
            y="195"
            textAnchor="middle"
            className="font-medium"
            style={{ fill: '#4A3F35', fontSize: '18px' }}
          >
            Select
          </text>
          <text
            x="200"
            y="213"
            textAnchor="middle"
            className="opacity-70"
            style={{ fill: '#4A3F35', fontSize: '14px' }}
          >
            Your Mood
          </text>
        </svg>

        {/* Legend - Selected emotions */}
        {selectedPrimary.length > 0 && (
          <div className="mt-4 text-center">
            <p className="text-body text-darkText/60 mb-2 font-medium">You selected:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {selectedPrimary.map(idx => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-button text-sm font-medium text-white shadow-softer"
                  style={{ backgroundColor: emotions[idx].color }}
                >
                  {emotions[idx].primary}
                </span>
              ))}
              {selectedSecondary.length > 0 && selectedSecondary.map((sel, idx) => (
                <span 
                  key={`sec-${idx}`}
                  className="px-3 py-1.5 rounded-button text-sm font-normal text-white shadow-softer"
                  style={{ backgroundColor: emotions[sel.primary].color, opacity: 0.85 }}
                >
                  {emotions[sel.primary].secondary[sel.secondary].name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Recommendation Widget - Shows after at least one core mood selected */}
      {selectedPrimary.length > 0 && (
        <div className="space-y-4 animate-slide-up-bounce">
          {/* Book Suggestions */}
          <div className="bg-white/80 backdrop-blur-sm rounded-card p-6 md:p-8 border border-azulejoTaupe/30 shadow-soft">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-solarTerracotta/20 rounded-card flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-solarTerracotta" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-darkText mb-2">These books might interest you</h4>
                <p className="text-body text-darkText/70 mb-4 font-normal">
                  Based on your feelings and inputted interests, we have curated recommendations that resonate with your current mood.
                </p>
                <button className="bg-solarTerracotta text-white px-6 py-2.5 rounded-button font-medium hover:shadow-soft gentle-button text-sm hover:bg-primary-600">
                  View Personalized Books
                </button>
              </div>
            </div>
          </div>

          {/* Circle Suggestions */}
          <div className="bg-white/80 backdrop-blur-sm rounded-card p-6 md:p-8 border border-azulejoTaupe/30 shadow-soft">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-pedreiraPink/20 rounded-card flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-pedreiraPink" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-darkText mb-2">These Book Circles might interest you</h4>
                <p className="text-body text-darkText/70 mb-4 font-normal">
                  Join communities with people experiencing similar emotions. Find support and connection.
                </p>
                <button className="bg-pedreiraPink text-white px-6 py-2.5 rounded-button font-medium hover:shadow-soft gentle-button text-sm hover:bg-accent-700">
                  Explore Matching Circles
                </button>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Helper text */}
      {selectedPrimary.length === 0 && (
        <div className="text-center">
          <p className="text-body text-darkText/50 italic">Click any emotion segment to begin • You can select multiple</p>
        </div>
      )}
    </div>
  )
}
