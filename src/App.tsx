import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>

        {/* TOAST */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#171717",
              color: "#ffffff",
              border: "1px solid #2a2a2a",
            },
          }}
        />

        {/* APP */}
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
          <AppRoutes />
        </div>

      </BrowserRouter>
    </HelmetProvider>
  );
}

// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
//         <AppRoutes />
//       </div>
//     </BrowserRouter>
//   );
// }