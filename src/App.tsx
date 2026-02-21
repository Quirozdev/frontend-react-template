import ThemeSwitcher from "@/features/theme/ui/ThemeSwitcher/ThemeSwitcher";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation(["common"]);

  return (
    <Suspense>
      <div className="bg-background">
        <p>{t("hello")}</p>
        <ThemeSwitcher />
      </div>
    </Suspense>
  );
}

export default App;
