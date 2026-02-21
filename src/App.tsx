import ThemeSwitcher from "@/features/theme/ui/ThemeSwitcher/ThemeSwitcher";
import { Suspense } from "react";
import { motion } from "motion/react";

function App() {
  return (
    <Suspense>
      <div className="bg-background min-h-screen">
        <ThemeSwitcher />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="border p-1 ml-2 bg-amber-50"
        >
          animated
        </motion.button>
      </div>
    </Suspense>
  );
}

export default App;
