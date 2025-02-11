import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from "./providers/ThemeProvider";



createRoot(document.getElementById("root")).render(
  <StrictMode>
   <div className="max-w-7xl mx-auto">
   <ThemeProvider>
   <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
      <ToastContainer />
    </AuthProvider>
   </ThemeProvider>
   </div>
  </StrictMode>
);
