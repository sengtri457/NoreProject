import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by rendering only after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 flex items-center ${
        isDark ? "bg-slate-800 border border-slate-700" : "bg-slate-200 border border-slate-300"
      }`}
      role="button"
      tabIndex={0}
      aria-label="Toggle theme"
    >
      {/* Background Icons */}
      <div className="absolute inset-0 flex justify-between items-center px-2">
        <Sun className={`w-4 h-4 ${isDark ? "text-slate-500" : "text-amber-500 opacity-0"}`} />
        <Moon className={`w-4 h-4 ${isDark ? "text-slate-400 opacity-0" : "text-slate-400"}`} />
      </div>

      {/* Sliding Toggle */}
      <motion.div
        className="w-6 h-6 rounded-full shadow-md flex items-center justify-center relative z-10"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        animate={{
          x: isDark ? 32 : 0,
          backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
        }}
      >
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-3.5 h-3.5 text-white" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}
