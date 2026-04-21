// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <AppRoutes />
//     </BrowserRouter>
//   );
// }


import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}