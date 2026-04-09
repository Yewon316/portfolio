import research from "../data/research";

export default function Research() {
  return (
    <section id="research" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Research
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {research.map((item) => (
            <div
              key={item.id}
              className="flex-1 bg-white rounded-[16px] shadow-sm border border-gray-100 p-8"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-blue-50 text-accent rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-sora text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-accent font-medium mb-1">
                {item.institution}
              </p>
              <p className="text-sm text-gray-400 mb-4">{item.timeline}</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
