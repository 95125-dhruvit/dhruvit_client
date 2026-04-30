import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:2909/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      // ✅ Save token
      localStorage.setItem("authToken", data.token);

      // ✅ Redirect
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-6">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 rounded-2xl border border-gray-200 dark:border-gray-800 
                   bg-white/60 dark:bg-white/5 backdrop-blur-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 
                       bg-transparent outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 
                       bg-transparent outline-none"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gray-900 text-white 
                       dark:bg-white dark:text-black font-medium hover:opacity-90 transition"
          >
            Login
          </button>

        </div>

      </form>
    </div>
  );
}