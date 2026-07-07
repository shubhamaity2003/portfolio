function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <p className="text-blue-600 font-semibold text-lg">
            Hi, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 text-slate-900">
            Shubhankar Maity
          </h1>

          <h2 className="text-xl sm:text-2xl text-slate-600 mt-4">
            Aspiring Full-stack Developer
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-base sm:text-lg">
            I'm a 4th-year B.Tech Computer Science student passionate about
            building modern, responsive, and user-friendly web applications
            using React and the MERN Stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* View Projects Button */}
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 text-center"
            >
              View Projects
            </a>

            {/* Download CV Button */}
            <a
              href="/resume/Shubhankar_Maity_cv.pdf"
              download
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300 text-center"
            >
              Download CV
            </a>
          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center order-first md:order-last">

          <img
            src="/images/profile.jpeg"
            alt="Shubhankar Maity"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-blue-600"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;