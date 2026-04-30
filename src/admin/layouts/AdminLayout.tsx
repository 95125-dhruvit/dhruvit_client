import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black">

      <Sidebar />

      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6">
          <Outlet /> {/* IMPORTANT */}
        </main>

        <Footer />
      </div>

    </div>
  );
}















// import type { ReactNode } from "react";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";

// interface AdminLayoutProps {
//   children: ReactNode;
// }

// export default function AdminLayout({ children }: AdminLayoutProps) {
//   return (
//     <div className="flex min-h-screen bg-gray-50 dark:bg-black">

//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex flex-col flex-1">

//         <main className="flex-1 p-6">
//           {children}
//         </main>

//         <Footer />
//       </div>

//     </div>
//   );
// }