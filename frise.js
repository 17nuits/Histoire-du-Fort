(function(){
  let isLeft = true
  const cardsData = JSON.parse(localStorage.getItem("cards")) || []
  const container = document.querySelector(".ligne")

  cardsData.forEach((card) => {
    const leftMarker = `<div class=\"triangle-gauche\"><img src=\"./images/triangle-gauche.svg\" alt=\"Triangle\"></div>`
    const rightMarker = `<div class=\"triangle-droite\"><img src=\"./images/triangle-droite.svg\" alt=\"Triangle\"></div>`

    const templateUnlocked = `
      <div class=\"cartes ${isLeft ? 'bloc-gauche' : 'bloc-droite'}\">
        <a href=\"${card.pageURL}\"><img src=\"${card.imageURL}\" alt=\"${card.title}\"></a>
        <h3>${card.title}</h3>
      </div>
      <div class=\"rond\"></div>`

    const templateLocked = `
      <div class=\"cartes ${isLeft ? 'bloc-gauche' : 'bloc-droite'}\">
        <img src=\"./images/cartemystere.png\" alt=\"???\">
        <h3>???</h3>
      </div>
      <div class=\"rond\"></div>`

    // On insère d'abord la carte (ouverte ou fermée)
    if (card.isLocked) {
      container.insertAdjacentHTML('beforeend', templateLocked)
    } else {
      container.insertAdjacentHTML('beforeend', templateUnlocked)
    }

    // Puis le triangle marqueur
    container.insertAdjacentHTML('beforeend', isLeft ? leftMarker : rightMarker)
    isLeft = !isLeft
  })
})()
