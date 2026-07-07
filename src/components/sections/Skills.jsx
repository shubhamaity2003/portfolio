import SkillCard from "../ui/SkillCard";
import skills from "../../data/skills";

function Skills() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            My Skills
          </h2>

          <p className="text-gray-500 mt-3">
            Technologies I use to build modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">

          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              level={skill.level}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;