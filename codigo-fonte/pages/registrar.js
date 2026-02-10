import { appStore } from "../js/store/app-store.js";
import { USUARIO_TYPES } from "../js/store/types/usuario.types.js";
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sucesso();
});

function sucesso() {
  const usuario = document.getElementById("usuario").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "" || email === "" || senha === "") {
    alert("Preencha todos os campos!");
  } else if (
    validatorEmail(email) === true &&
    validatorPassword(senha) === true
  ) {
    appStore.dispatch(USUARIO_TYPES.ADD, {
      nome: usuario,
      email: email,
      senha: senha,
    });
    location.href = "./login.html";
  } else {
    alert("Dados inválidos. Por favor, verifique suas informações.");
  }
}

email.addEventListener("keyup", () => {
  if (validatorEmail(email.value)) {
    email.setCustomValidity("");
  } else {
    email.setCustomValidity("Email inválido");
  }
});

function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}

senha.addEventListener("keyup", () => {
  if (validatorPassword(senha.value)) {
    senha.setCustomValidity("");
  } else {
    senha.setCustomValidity("Senha inválida");
  }
});

function validatorPassword(senha) {
  let passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{6,16}$/;
  return passwordPattern.test(senha);
}
