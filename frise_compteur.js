(function(){
  const cardsData = JSON.parse(localStorage.getItem("cards")) || []
  const unlocked = cardsData.filter(c => !c.isLocked).length
  const total = cardsData.length
  const el = document.querySelector("#nb_compteur p")
  if (el) el.textContent = `${unlocked}/${total}`
})()