const stats = [
  { label: "GPA", value: "3.91/4.0", icon: "🎓" },
  { label: "Dean's List", value: "3 Semesters", icon: "📋" },
  { label: "App Users", value: "300+", icon: "📱" },
  { label: "Community Members", value: "30+", icon: "👥" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-12">
          I'm a developer, researcher, and community builder based in West
          Lafayette, IN. I co-founded LikeLion at Purdue — a 30+ member tech
          entrepreneurship community — and have shipped products used by
          hundreds of real users. My experience spans frontend development
          (React, Flutter), data visualization, digital marketing analytics,
          and biomedical imaging research. I believe great products come from
          understanding both the technology and the people who use it.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-gray-100 rounded-[16px] p-6 text-center shadow-sm"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-sora text-2xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
