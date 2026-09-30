import {
  LuPalette,
  LuMonitor,
  LuBriefcase,
  LuTrendingUp,
  LuCamera,
} from "react-icons/lu";

export default function LearningPaths() {
  const paths = [
    { id: 1, title: "Design", icon: LuPalette },
    { id: 2, title: "Development", icon: LuPalette },
    { id: 3, title: "IT & Software", icon: LuMonitor },
    { id: 4, title: "Business", icon: LuBriefcase },
    { id: 5, title: "Marketing", icon: LuTrendingUp },
    { id: 6, title: "Photography", icon: LuCamera },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] pb-16 px-4 sm:px-6">
      <div className="container-app mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-[#171717] tracking-tight sm:text-4xl">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-3xl mx-auto">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 max-w-6xl mx-auto">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.id}
                className="bg-white border border-gray-300/70 rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group cursor-pointer aspect-square"
              >
                <div className="w-15 h-15 rounded-full bg-primary flex items-center justify-center text-black text-xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon />
                </div>

                <span className="text-sm font-bold text-[#171717]">
                  {path.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
