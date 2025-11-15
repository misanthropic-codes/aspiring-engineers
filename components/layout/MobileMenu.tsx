interface Props {
  open: boolean;
  darkMode: boolean;
}

export default function MobileMenu({ open, darkMode }: Props) {
  if (!open) return null;

  return (
    <div
      className={`md:hidden px-4 py-4 space-y-3 ${
        darkMode
          ? "bg-[#102631] border-t border-[#2596be]/20"
          : "bg-white border-t"
      }`}
    >
      {["Features", "Exams", "Counselling"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className={`block ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } hover:text-[#2596be]`}
        >
          {item}
        </a>
      ))}

      <button className="w-full px-6 py-2 rounded-md bg-[#2596be] text-white font-medium shadow-lg">
        Get Started
      </button>
    </div>
  );
}
