import React, { useState } from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Cadastro() {
  const [tipo, setTipo] = useState("comum"); // padrão: comum

  // estados comuns
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // estados extras para grupo
  const [descricao, setDescricao] = useState("");
  const [contacto, setContacto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dados =
      tipo === "comum"
        ? { nome, email, senha, confirmarSenha }
        : { nome, email, senha, confirmarSenha, contacto, descricao };

    console.log("Tipo de cadastro:", tipo);
    console.log(dados);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1e100f] text-white font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1717] p-8 w-[450px] rounded-xl shadow-[10px_0_40px_#97171b21,-10px_0_40px_#97171b21]"
      >
        {/* Título */}
        <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent mb-2">
          CineTeatro
        </h1>

        <h2 className="text-center text-xl mb-2">Criar nova conta</h2>
        <p className="text-center text-sm mb-6">Junte-se à nossa comunidade</p>

        {/* Selector de tipo */}
        <div className="flex justify-center mb-6 gap-2">
          <button
            type="button"
            onClick={() => setTipo("comum")}
            className={`px-4 py-2 rounded-lg ${
              tipo === "comum" ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Utilizador
          </button>

          <button
            type="button"
            onClick={() => setTipo("grupo")}
            className={`px-4 py-2 rounded-lg ${
              tipo === "grupo" ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Grupo/Estúdio
          </button>
        </div>

        {/* Inputs comuns */}
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

        {/* Campos extras apenas para grupo */}
        {tipo === "grupo" && (
          <>
            <Input
              id="userNumber"
              name="userNumber"
              label="Contacto"
              placeholder="(+244) XXX XXX XXX"
              value={contacto}
              onChange={(e) => setContacto(e.target.value)}
            />

            <TextArea
              id="descricao"
              name="descricao"
              label="Descrição"
              placeholder="Descreva seu grupo teatral ou estúdio"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </>
        )}

        {/* Botão reutilizável */}
        <Button valor="Criar conta" />

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

export default Cadastro;