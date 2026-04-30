export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 p-4 text-sm text-gray-500 text-center">
      © {new Date().getFullYear()} Admin Panel
    </footer>
  );
}