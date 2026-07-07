import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            About Me
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get to know more about my education, interests, and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-6">
              Hello, I'm Shubhankar Maity 👋
            </h3>

            <p className="text-gray-600 leading-8 mb-5">
  I am currently pursuing a <strong>B.Tech in Computer Science and Engineering </strong>
  at <strong>Brainware University</strong>. I am passionate about designing and
  developing complete web applications, from responsive user interfaces to
  secure backend systems.
</p>

<p className="text-gray-600 leading-8 mb-5">
  I primarily work with the <strong>MERN Stack (MongoDB, Express.js, React.js,
  and Node.js)</strong>. I enjoy building scalable applications, integrating REST APIs,
  managing databases, and creating seamless user experiences.
</p>

<p className="text-gray-600 leading-8">
  My goal is to become a skilled Full Stack Developer, contribute to innovative
  software solutions, and continuously expand my knowledge in modern web
  technologies.
</p>
          </div>

          {/* Right Side */}
          <div className="grid gap-6">

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl shadow-md border">
              <FaGraduationCap className="text-4xl text-blue-600 shrink-0" />
              <div>
                <h4 className="font-semibold text-xl">Education</h4>
                <p className="text-gray-600">
                  B.Tech in Computer Science & Engineering
                </p>
                <p className="text-gray-500 text-sm">
                  Brainware University (2023 – 2027)
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl shadow-md border">
              <FaLaptopCode className="text-4xl text-blue-600 shrink-0" />
              <div>
                <h4 className="font-semibold text-xl">Specialization</h4>
                <p className="text-gray-600">
                  Full Stack Web Development
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl shadow-md border">
              <FaCode className="text-4xl text-blue-600 shrink-0" />
              <div>
                <h4 className="font-semibold text-xl">Tech Stack</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  React • JavaScript • Tailwind CSS • Node.js • Express.js • MongoDB
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl shadow-md border">
              <FaMapMarkerAlt className="text-4xl text-blue-600 shrink-0" />
              <div>
                <h4 className="font-semibold text-xl">Location</h4>
                <p className="text-gray-600">
                  West Bengal, India
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;