import ProjectCard from "../ui/ProjectCard";
import projects from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-slate-900">
            My Projects
          </h2>

          <p className="mt-4 text-gray-600">
            Here are some projects I've built using modern web technologies.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;