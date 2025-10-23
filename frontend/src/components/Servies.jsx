import { FaCode, FaPalette, FaRobot, FaCubes } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode size={40} className="text-[#d08700]" />,
      title: "Web Development",
      desc: "I build fast, responsive websites that not only look good but actually behave. Clean code, smooth performance, and zero unnecessary reloads.",
    },
    {
      icon: <FaPalette size={40} className="text-[#d08700]" />,
      title: "UI / UX Design",
      desc: "Designs that make users feel at home. I focus on simplicity, clarity, and experiences that don’t make people rage-click.",
    },
    {
      icon: <FaCubes size={40} className="text-[#d08700]" />,
      title: "Component Development",
      desc: "Reusable, scalable, and maintainable components — because copy-pasting the same code 20 times is not my vibe.",
    },
    {
      icon: <FaRobot size={40} className="text-[#d08700]" />,
      title: "AI-Enhanced Experiences",
      desc: "Blending creativity with AI to make web experiences smarter, faster, and maybe even a little surprising.",
    },
  ];

  return (
    <section className=" text-gray-100">
      <h2 className="text-3xl font-semibold mb-6 border-b border-[#d08700] inline-block pb-2">
        Services
      </h2>
      <p className="mb-10 text-gray-300 max-w-2xl">
        Think of me as the person who turns your ideas into things you can click, scroll, and enjoy using.
        I care about the little details that make a big difference — and yes, I triple-check my semicolons.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#2b2b2b] p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#d08700]">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
