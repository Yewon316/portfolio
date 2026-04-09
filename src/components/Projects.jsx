import { useState } from "react";
import projects from "../data/projects";
import ProjectModal from "./ProjectModal";

function ProjectImage({ project }) {
  const [imgError, setImgError] = useState(false);

  // CGT116 uses a dark gradient placeholder
  if (!project.image) {
    return (
      <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        <span className="text-white/70 font-sora font-bold text-3xl">3D</span>
      </div>
    );
  }

  if (imgError) {
    // Gradient fallback with project name
    const gradients = {
      chatit: "from-blue-400 to-indigo-500",
      "community-platform": "from-emerald-400 to-teal-500",
      goldnpartner: "from-amber-400 to-orange-500",
      "pka-website": "from-rose-400 to-red-500",
    };
    const grad = gradients[project.id] || "from-gray-400 to-gray-500";
    return (
      <div className={`h-48 bg-gradient-to-br ${grad} flex items-center justify-center`}>
        <span className="text-white/80 font-sora font-semibold text-lg px-4 text-center">
          {project.title}
        </span>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      onError={() => setImgError(true)}
      className="h-48 w-full object-cover"
    />
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="text-left bg-white rounded-[16px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <ProjectImage project={project} />
              <div className="p-6">
                <h3 className="font-sora font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-blue-50 text-accent rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
