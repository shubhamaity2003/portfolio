function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold">
          Shubhankar Maity
        </h2>

        <p className="mt-2 text-gray-400">
          Aspiring Full-Stack Developer
        </p>

        <p className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Shubhankar Maity. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;