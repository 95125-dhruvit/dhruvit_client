import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">

      <Navbar />

      <main className="flex-1 px-4 sm:px-6 md:px-12 lg:px-16 py-10">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}
















// import { Outlet } from "react-router-dom";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// export default function MainLayout() {
//   return (
//     <div className="bg-black text-white min-h-screen">
//       <Navbar />
//       <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black" />
//       <main className="px-6 md:px-16 py-10">
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// }