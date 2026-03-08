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
          ? "bg-gray-900 border-t border-[var(--color-brand)]/20"
          : "bg-white border-t"
      }`}
    >
      {["Features", "Exams", "Counselling"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className={`block ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } hover:text-[var(--color-brand)]`}
        >
          {item}
        </a>
      ))}

      <button className="w-full px-6 py-2 rounded-md bg-[var(--color-brand)] text-white font-medium shadow-lg">
        Get Started
      </button>
    </div>
  );
}
