import { useEffect, useState } from "react";

function ModalImage({ project }) {
  const [imgError, setImgError] = useState(false);

  if (project.sketchfab) {
    return (
      <div className="mb-6">
        <iframe
          title="CGT116 Final"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          width="100%"
          height="400"
          src={project.sketchfab}
          style={{ borderRadius: "12px" }}
        />
      </div>
    );
  }

  if (!project.image || imgError) return null;

  return (
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      onError={() => setImgError(true)}
      className="w-full rounded-[12px] mb-6 object-cover max-h-80"
    />
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="modal-content bg-white rounded-[16px] shadow-2xl w-full max-w-[720px] max-h-[90vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Project image or Sketchfab embed */}
        <ModalImage project={project} />

        {/* Header */}
        <h3 className="font-sora text-2xl font-bold text-gray-900 mb-2 pr-8">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm text-gray-500">{project.role}</span>
          <span className="text-sm text-gray-300">•</span>
          <span className="text-sm text-gray-500">{project.timeline}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Contributions */}
        {project.contributions.length > 0 && (
          <div className="mb-6">
            <h4 className="font-sora font-semibold text-gray-900 mb-3">
              Key Contributions
            </h4>
            <ul className="space-y-2">
              {project.contributions.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-accent mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div>
          <h4 className="font-sora font-semibold text-gray-900 mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-50 text-accent text-sm rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
