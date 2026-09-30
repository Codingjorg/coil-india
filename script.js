// Fill both side columns with alternating India / Norway flag images.
const FLAGS = ["flags/india.png", "flags/norway.png"];

function fillColumn(column) {
  column.replaceChildren();
  for (let i = 0; i < 500 && column.scrollHeight <= column.clientHeight; i++) {
    const img = document.createElement("img");
    img.src = FLAGS[i % FLAGS.length];
    img.alt = "";
    column.appendChild(img);
  }
}

function fillAll() {
  document.querySelectorAll(".flags").forEach(fillColumn);
}

window.addEventListener("load", fillAll);
window.addEventListener("resize", fillAll);
