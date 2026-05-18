import MoodWheel from './MoodWheel'

export default function MoodWheelSection() {
  return (
    <section id="mood-wheel" className="py-12 md:py-16 px-4 bg-white/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-darkText mb-3">
            Express <span className="gradient-text font-semibold">how you feel</span>
          </h2>
          <p className="text-subtitle text-darkText/70 max-w-2xl mx-auto font-normal">
            Our interactive mood wheel helps you identify and express your emotions with precision
          </p>
        </div>

        <MoodWheel />
      </div>
    </section>
  )
}

