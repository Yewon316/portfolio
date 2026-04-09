import experience from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8 relative">
          {/* Vertical accent line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block" />

          {experience.map((exp) => (
            <div
              key={exp.id}
              className="relative md:pl-12"
            >
              {/* Dot on the timeline */}
              <div className="absolute left-0 md:left-[11px] top-2 w-3 h-3 rounded-full bg-accent hidden md:block" />

              <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 p-6 md:p-8">
                <h3 className="font-sora text-lg font-semibold text-gray-900 mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-accent font-medium mb-1">
                  {exp.organization}
                </p>
                <p className="text-sm text-gray-400 mb-4">{exp.timeline}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
