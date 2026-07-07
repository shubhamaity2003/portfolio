function SkillCard({ title, level }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-slate-800">
        {title}
      </h3>

      <p className="text-blue-600 mt-3">
        {level}
      </p>
    </div>
  );
}

export default SkillCard;