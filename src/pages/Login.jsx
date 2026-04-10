import React, { useState } from "react";
import Input from "../components/Input"; // Componente reutilizável de input
import { Link, useNavigate } from "react-router-dom"; // Link para navegação + useNavigate para redirecionar
import Button from "../components/Button";

function Login() {

  // 🔹 Estados para guardar os dados digitados pelo utilizador
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // 🔹 Estado para mostrar mensagem de erro
  const [erro, setErro] = useState("");

  // 🔹 Hook para redirecionar o utilizador após login
  const navigate = useNavigate();

  // 🔐 Função chamada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // impede o reload da página

    // 🔹 Verificação simples (login fixo para demonstração)
    if (email === "root" && senha === "root") {
      setErro(""); // limpa erro
      localStorage.setItem("user", "root");
      navigate("/home"); // redireciona para a página principal
    } else {
      setErro("Credenciais inválidas!"); // mostra erro se falhar
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1e100f] font-sans">
      
      {/* 🔹 Formulário de login */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1717] p-8 w-[450px] rounded-xl shadow-[10px_0_40px_#97171b21,-10px_0_40px_#97171b21]"
      >
        
        {/* 🔹 Título do sistema */}
        <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent mb-2">
          CineTeatro
        </h1>

        {/* 🔹 Subtítulo */}
        <h2 className="text-center text-xl text-white mb-2">
          Entrar na sua conta
        </h2>

        {/* 🔹 Descrição */}
        <p className="text-center text-sm text-white mb-6">
          Acesse sua conta para continuar
        </p>

        {/* 🔹 Input de usuário (email) */}
        <Input
          id="useremail"
          name="useremail"
          label="Usuário"
          type="text"
          placeholder="root"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* 🔹 Input de senha */}
        <Input
          id="usersenha"
          name="usersenha"
          label="Senha"
          type="password"
          placeholder="Digite a sua senha..."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {/* 🔹 Mensagem de erro (só aparece se existir erro) */}
        {erro && (
          <p className="text-red-500 text-center mb-3">{erro}</p>
        )}

        {/* 🔹 Botão de login */}
        <Button valor="Entrar" />

        {/* 🔹 Link para página de cadastro */}
        <p className="text-center text-sm text-white mt-4">
          Não tem uma conta?{" "}
          <Link to="/cadastro" className="text-red-600 hover:underline">
            Cadastra-se
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Login;