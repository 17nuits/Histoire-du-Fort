const svgGlacis = document.getElementById("svg-glacis")
const svgChemins = document.getElementById("svg-chemins")
const btnGlacis = document.getElementById("btnGlacis")
const btnChemins = document.getElementById("btnChemins")

btnGlacis.addEventListener("click", () => {
  const visible = svgGlacis.style.display === "block"
  svgGlacis.style.display = visible ? "none" : "block"
})

btnChemins.addEventListener("click", () => {
  const visible = svgChemins.style.display === "block"
  svgChemins.style.display = visible ? "none" : "block"
})

document.querySelectorAll('.schemas-svg').forEach(svg => {
    svg.style.display = "none";
  })