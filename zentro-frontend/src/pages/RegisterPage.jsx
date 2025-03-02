import { useState } from "react";
import { register } from "../services/authApi";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          setError("Hasła nie są takie same");
          return;
        }
        setLoading(true);
        try {
          await register({ email, password });
          navigate("/login"); 
        } catch (err) {
          setError(err.response?.data?.message || "Błąd rejestracji");
        } finally {
          setLoading(false);
        }
      };

      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Rejestracja</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <form onSubmit={handleRegister}>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Hasło"
                className="w-full p-2 border rounded mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Potwierdź hasło"
                className="w-full p-2 border rounded mb-3"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                disabled={loading}
              >
                {loading ? "Rejestrowanie..." : "Zarejestruj się"}
              </button>
            </form>
          </div>
        </div>
      );
};


export default RegisterPage;