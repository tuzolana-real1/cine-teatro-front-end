import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    const interval = setInterval(() => {
      setUser(localStorage.getItem("user"));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-[#171717] text-white px-6 py-4 flex justify-between items-center shadow-md">

      <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
        CineTeatro
      </h1>

      <div className="flex gap-6 text-sm items-center">

        <Link to="/" className="hover:text-red-500 transition">Início</Link>

        {!user && (
          <>
            <Link to="/login" className="hover:text-red-500 transition">Entrar</Link>
            <Link to="/cadastro" className="hover:text-red-500 transition">Cadastrar</Link>
          </>
        )}

        {user && (
          <>
            <p className="text-yellow-400 font-semibold">
              👤 {user}
            </p>

            <button
              onClick={() => {
                localStorage.removeItem("user");
                setUser(null);
              }}
              className="text-red-500 hover:underline"
            >
              Sair
            </button>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;