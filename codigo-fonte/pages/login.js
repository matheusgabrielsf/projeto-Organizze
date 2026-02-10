import { AuthActions } from "../js/store/actions/auth.actions.js";
import { appStore } from "../js/store/app-store.js";

const form = document.getElementById("formLogin");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".login-form").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".login-form").style.transition = "0.6s";
    document.querySelector(".login-form").style.opacity = "1";
  }, 100);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // capturar inputs
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  // validar se os campos foram preenchidos
  if (email.value.trim() === "" || senha.value.trim() === "") {
    alert("Preencha todos os campos!");
    return;
  }

  // validar tamanho da senha
  if (senha.value.length < 8) {
    alert("A senha deve ter no mínimo 8 caracteres.");
    return;
  }

  // usuarios salvos no store
  const usuarios = appStore.getState().usuarios;

  // verificar se o usuário existe
  const usuarioExiste = usuarios.find(
    (usuario) => usuario.email === email.value && usuario.senha === senha.value
  );

  // se não existir, exibir mensagem de erro
  if (!usuarioExiste) {
    alert("Usuário ou senha inválidos!");
    return;
  }

  // salva no store o usuário autenticado
  const action = AuthActions.login({
    idCadastro: usuarioExiste.id,
    nome: usuarioExiste.nome,
    email: usuarioExiste.email,
  });

  appStore.dispatch(action.type, action.payload);

  // redireciona para a página inicial
  window.location.href = "./index.html";
});

senha.addEventListener("dblclick", () => {
  senha.type = senha.type === "password" ? "text" : "password";
});
