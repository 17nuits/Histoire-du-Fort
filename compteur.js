const cards = [
  {
    id: "carte1",
    isLocked: true,
    imageURL: "./images/carte1.png",
    title: "Mise en contexte",
    pageURL: "poi1.html?id=carte1",
  },
  {
    id: "carte2",
    isLocked: true,
    imageURL: "./images/carte2.png",
    title: "Position stratégique",
    pageURL: "poi2.html?id=carte2",
  },
  {
    id: "carte3",
    isLocked: true,
    imageURL: "./images/carte3.png",
    title: "Contrôler sans être vu",
    pageURL: "poi3.html?id=carte3",
  },
  {
    id: "carte4",
    isLocked: true,
    imageURL: "./images/carte4.png",
    title: "L'ennemi piégé",
    pageURL: "poi4.html?id=carte4",
  },
  {
    id: "carte5",
    isLocked: true,
    imageURL: "./images/carte5.png",
    title: "Défense en réseau",
    pageURL: "poi5.html?id=carte5",
  },
  {
    id: "carte6",
    isLocked: true,
    imageURL: "./images/carte6.png",
    title: "Fort de mer",
    pageURL: "poi6.html?id=carte6",
  },
  {
    id: "carte7",
    isLocked: true,
    imageURL: "./images/carte7.png",
    title: "À travers le temps",
    pageURL: "poi7.html?id=carte7",
  },
]

if(!localStorage.getItem("cards")) {
  localStorage.setItem("cards", JSON.stringify(cards))
}

const cardsData = JSON.parse(localStorage.getItem("cards"))