// listaDesejos.js
const lista = JSON.parse(localStorage.getItem("listaDesejos")||"[]");
const container = document.getElementById("lista-desejos");

lista.forEach(j=>{
  const div = document.createElement("div");
  div.innerHTML=`<h3>${j.nome}</h3> <a href="#" class="btn">Comprar</a>`;
  container.appendChild(div);
});

function comprarTodos(){
  alert("Compra de todos os itens simulada! 🎉");
}