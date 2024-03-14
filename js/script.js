const rank = document.getElementById("rank");
const generate = document.getElementById("generate");
const field_box = document.getElementById("field_box");

createFieldBox(10);

generate.addEventListener("click", () => {
  // svuoto il box
  while (field_box.firstChild) {
    field_box.firstChild.remove();
  }

  // Creo e aggiungo il contenuto
  createFieldBox(9);
});

function createFieldBox(n = 10) {
  field_box.style.setProperty("--n_col", String(n));
  for (let index = 1; index <= n * n; index++) {
    const numCasella = String(index);
    const btnSquare = document.createElement("div");
    btnSquare.classList.add("btn-square");
    btnSquare.textContent = numCasella;
    field_box.appendChild(btnSquare);

    btnSquare.addEventListener("click", () => {
      console.log(numCasella);
      btnSquare.style.backgroundColor = "black";
    });
  }
}
