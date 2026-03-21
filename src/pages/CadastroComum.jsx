import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function CadastroComum() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      nome,
      email,
      senha,
      confirmarSenha,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1e100f] text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1717] p-8 w-[450px] rounded-xl shadow-[10px_0_40px_#97171b21,-10px_0_40px_#97171b21]"
      >
        {/* Título */}
        <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent mb-2">
          CineTeatro
        </h1>

        <h2 className="text-center text-xl mb-2">Criar nova conta</h2>

        <p className="text-center text-sm mb-6">
          Junte-se à nossa comunidade
        </p>

        {/* Inputs reutilizáveis */}
        <Input
          id="username"
          name="username"
          label="Nome"
          placeholder="Seu nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

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

        <Input
          id="userSenhaConfirm"
          name="userSenhaConfirm"
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme a sua senha..."
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        {/* Botão */}
        <Button 
          valor="Cadastrar-se"
          className="w-[90%] p-2.5 mt-2 mb-6 rounded-lg bg-red-600 text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-400"
         />

        {/* Link */}
        <p className="text-center text-sm">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-red-600 hover:underline">
            Entrar
          </Link>
        </p>
      </form>
    </div>
  );
}

export default CadastroComum;