(function(){
  const urlParams = new URL(window.location.href).searchParams
  const id = urlParams.get("id")
  if (!id) {
    return
  }

  const cardsData = JSON.parse(localStorage.getItem("cards")) || []

  const index = cardsData.findIndex(card => card.id === id)
  if (index !== -1 && cardsData[index].isLocked) {
    cardsData[index].isLocked = false
    localStorage.setItem("cards", JSON.stringify(cardsData))
  }

  let compteur = 0
  const totalCards = cardsData.length
  cardsData.forEach(card => {
    if (!card.isLocked) compteur++
  })

  const compteurEl = document.querySelector("#nb_compteur p")
  if (compteurEl) {
    compteurEl.textContent = `${compteur}/${totalCards}`
  }
  
})()