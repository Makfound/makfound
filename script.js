// Espera o DOM carregar antes de executar
document.addEventListener("DOMContentLoaded", () => {
  const botoesCategoria = document.querySelectorAll(".categoria");
  const produtos = document.querySelectorAll(".produto");

  botoesCategoria.forEach((botao) => {
    botao.addEventListener("click", () => {
      // Remove a classe 'ativa' de todos os botões
      botoesCategoria.forEach((b) => b.classList.remove("ativa"));

      // Adiciona a classe 'ativa' ao botão clicado
      botao.classList.add("ativa");

      const filtro = botao.getAttribute("data-filtro");

      // Exibe ou oculta os produtos com base no filtro
      produtos.forEach((produto) => {
        const categoria = produto.getAttribute("data-categoria");
        if (filtro === "todos" || filtro === categoria) {
          produto.style.display = "block";
        } else {
          produto.style.display = "none";
        }
      });
    });
  });
});
