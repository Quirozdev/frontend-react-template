import { createRoot } from "react-dom/client";
import "@/index.css";
import "./features/translations/i18n";
import { RouterProvider } from "react-router";
import { router } from "@/app/router";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
