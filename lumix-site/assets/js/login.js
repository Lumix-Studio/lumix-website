// login.js
document.getElementById("formLogin")?.addEventListener("submit", e=>{
  e.preventDefault();
  const email = document.getElementById("email").value;
  localStorage.setItem("usuarioLogado", email);
  alert("Login simulado! 👌");
  window.location.href="index.html";
});

document.getElementById("formCadastro")?.addEventListener("submit", e=>{
  e.preventDefault();
  const email = document.getElementById("email").value;
  const nome = document.getElementById("nome").value;
  localStorage.setItem("usuario_"+email, nome);
  alert("Cadastro simulado! 👌");
  window.location.href="login.html";
});