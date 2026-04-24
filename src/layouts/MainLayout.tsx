// import { Outlet } from "react-router-dom";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// export default function MainLayout() {
//   return (
//     <div className="min-h-screen flex flex-col overflow-x-hidden bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">

//       <Navbar />

//       <main className="flex-1 px-4 sm:px-6 md:px-12 lg:px-16 py-10">
//         <Outlet />
//       </main>

//       <Footer />

//     </div>
//   );
// }




import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingContact from "../components/ui/FloatingContact";

export default function MainLayout() {
  return (
    <div
      className="
        min-h-screen flex flex-col overflow-x-hidden
        bg-white dark:bg-black
        text-black dark:text-white
        transition-colors duration-300
      "
    >
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full px-4 sm:px-6 md:px-12 lg:px-16 py-10">
        <Outlet />
      </main>
      {/* FOOTER */}
      <Footer />
<FloatingContact />
    </div>
  );
}