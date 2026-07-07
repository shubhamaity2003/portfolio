import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  technologies,
  image,
  github,
  demo,
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Project Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Project Title */}
        <div className="absolute bottom-5 left-5">
          <h3 className="text-white text-2xl font-bold">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Description */}
        <p className="text-gray-600 leading-7">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-5">
          {technologies.split("•").map((tech) => (
            <span
              key={tech.trim()}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-lg hover:bg-black transition duration-300"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>
    </div>
  );
}

export default ProjectCard;