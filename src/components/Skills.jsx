const skillGroups = [
  {
    category: "Languages",
    color: "bg-blue-50 text-blue-700",
    items: ["Python", "JavaScript", "HTML/CSS", "PHP", "MATLAB"],
  },
  {
    category: "Frameworks",
    color: "bg-purple-50 text-purple-700",
    items: ["React", "Flutter", "WordPress", "Next.js"],
  },
  {
    category: "Tools",
    color: "bg-emerald-50 text-emerald-700",
    items: ["Figma", "Maya", "Firebase", "Git", "GitHub", "Notion", "Isaac Sim"],
  },
  {
    category: "Data & Analytics",
    color: "bg-amber-50 text-amber-700",
    items: ["Data Visualization", "MATLAB", "Claude AI"],
  },
  {
    category: "Languages (Spoken)",
    color: "bg-rose-50 text-rose-700",
    items: ["Korean (Native)", "English (Fluent)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-sora font-semibold text-gray-900 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${group.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
