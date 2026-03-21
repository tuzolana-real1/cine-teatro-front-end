import React, { useState } from "react";
import Input from "../components/Input"; // importe o seu componente Input reutilizável
import { Link } from "react-router-dom";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Senha:", senha);
    // aqui você pode adicionar sua lógica de autenticação
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1e100f] font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1717] p-8 w-[450px] rounded-xl shadow-[10px_0_40px_#97171b21,-10px_0_40px_#97171b21]"
      >
        <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent mb-2">
          CineTeatro
        </h1>
        <h2 className="text-center text-xl text-white mb-2">Entrar na sua conta</h2>
        <p className="text-center text-sm text-white mb-6">
          Acesse sua conta para continuar
        </p>

        {/* Inputs usando o componente reutilizável */}
        <Input
          id="useremail"
          name="useremail"
          label="Email"
          type="email"
          placeholder="Seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          id="usersenha"
          name="usersenha"
          label="Senha"
          type="password"
          placeholder="Digite a sua senha..."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        
        <Button valor="Entrar" />

        {/* Link para cadastro */}
        <p className="text-center text-sm text-white">
          Não tem uma conta?{" "}
          <Link to="/cadastro" className="text-red-600 hover:underline">
            Cadastra-se
          </Link>
        </p>
        const [descricao, setDescricao] = useState("");
      </form>
      
    </div>
  );
}

export default Login;