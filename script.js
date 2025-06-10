const map = L.map('map', {
  zoomControl: false
}).setView([43.09426508666567, 5.893304735524395], 18)

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
}).addTo(map)

// Icône personnalisée
const customIcon = L.icon({
  iconUrl: './images/marqueur_before.png',
  iconSize: [32, 41],
  iconAnchor: [16, 45],
})

const userIcon = L.icon({
  iconUrl: './images/user_marker.png',
  iconSize: [32, 32],
  iconAnchor: [16, 45],
})

const notifSound = new Audio('./videos/notification.mp3');
notifSound.volume = 0.5;

const contentRade = `<div class="fermer">
                        <a class="close_link" href="index.html">
                          <img src="./images/fleche_retour.png" alt="Flèche retour">
                          <p>retour</p>
                        </a>
                      </div>
                      <div class="cartes-container">
                        <div class="stroke">
                            <a href="poi2.html?id=carte2"><img src="./images/carte_stroke.png" alt=""></a>
                        </div>
                        <div class="img_carte">
                            <img src="./images/img_carte2.png" alt="">
                        </div>
                      </div>`

const contentGlacis_chemins = `<div class="fermer">
                                <a class="close_link" href="index.html">
                                  <img src="./images/fleche_retour.png" alt="Flèche retour">
                                  <p>retour</p>
                                </a>
                              </div>
                              <div class="cartes-container">
                                <div class="stroke">
                                    <a href="poi3.html?id=carte3"><img src="./images/carte_stroke.png" alt=""></a>
                                </div>
                                <div class="img_carte">
                                    <img src="./images/img_carte3.png" alt="">
                                </div>
                              </div>`

const contentDouves = `<div class="fermer">
                        <a class="close_link" href="index.html">
                          <img src="./images/fleche_retour.png" alt="Flèche retour">
                          <p>retour</p>
                        </a>
                      </div>
                      <div class="cartes-container">
                        <div class="stroke">
                            <a href="poi4.html?id=carte4"><img src="./images/carte_stroke.png" alt=""></a>
                        </div>
                        <div class="img_carte">
                            <img src="./images/img_carte4.png" alt="">
                        </div>
                      </div>`

const contentSixFours = `<div class="fermer">
                        <a class="close_link" href="index.html">
                          <img src="./images/fleche_retour.png" alt="Flèche retour">
                          <p>retour</p>
                        </a>
                      </div>
                      <div class="cartes-container">
                        <div class="stroke">
                            <a href="poi5.html?id=carte5"><img src="./images/carte_stroke.png" alt=""></a>
                        </div>
                        <div class="img_carte">
                            <img src="./images/img_carte5.png" alt="">
                        </div>
                      </div>`

const contentSablettes = `<div class="fermer">
                        <a class="close_link" href="index.html">
                          <img src="./images/fleche_retour.png" alt="Flèche retour">
                          <p>retour</p>
                        </a>
                      </div>
                      <div class="cartes-container">
                        <div class="stroke">
                            <a href="poi6.html?id=carte6"><img src="./images/carte_stroke.png" alt=""></a>
                        </div>
                        <div class="img_carte">
                            <img src="./images/img_carte6.png" alt="">
                        </div>
                      </div>`
                        
const contentFin = `<div class="fermer">
                        <a class="close_link" href="index.html">
                          <img src="./images/fleche_retour.png" alt="Flèche retour">
                          <p>retour</p>
                        </a>
                      </div>
                      <div class="cartes-container">
                        <div class="stroke">
                            <a href="poi7.html?id=carte7"><img src="./images/carte_stroke.png" alt=""></a>
                        </div>
                        <div class="img_carte">
                            <img src="./images/img_carte7.png" alt="">
                        </div>
                      </div>`  

const contentDebut = `<div class="fermer">
                        <a class="close_link" href="index.html">
                          <img src="./images/fleche_retour.png" alt="Flèche retour">
                          <p>retour</p>
                        </a>
                      </div>
                      <div class="cartes-container">
                        <div class="stroke">
                            <a href="poi1.html?id=carte1"><img src="./images/carte_stroke.png" alt=""></a>
                        </div>
                        <div class="img_carte">
                            <img src="./images/img_carte1.png" alt="">
                        </div>
                      </div>` 

const poisData = [
  {
    id: "carte2",
    coords: [43.094541, 5.894143],
    content: contentRade,
  },
  {
    id: "carte3",
    coords: [43.094706, 5.893048],
    content: contentGlacis_chemins,
  },
  {
    id: "carte4",
    coords: [43.09428786752031, 5.892970139717544],
    content: contentDouves,
  },
  {
    id: "carte5",
    coords: [43.09439533756529, 5.892834939964796],
    content: contentSixFours,
  },
  {
    id: "carte6",
    coords: [43.09354748975822, 5.8930319617373605],
    content: contentSablettes,
  },
  {
    id: "carte7",
    coords: [43.09360606207853, 5.893696466445446],
    content: contentFin,
  },
  {
    id: "carte1",
    coords: [43.093891436432344, 5.894060887361602],
    content: contentDebut,
  }
]

const markers = poisData.map(poi => {
  const marker = L.marker(poi.coords, { icon: customIcon }).addTo(map);
  marker.bindPopup(poi.content);
  return {
    id: poi.id,
    marker,
    coords: poi.coords,
    notified: false // on n’a pas encore joué le son pour ce POI
  }
})

// calculer la distance en mètres
function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

navigator.geolocation.watchPosition(fonctionSucces, fonctionErreur)

function fonctionErreur(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("L'utilisateur a refusé la demande de géolocalisation.")
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Les informations sur la position sont indisponibles.")
      break;
    case error.UNKNOWN_ERROR:
      console.log("Une erreur inconnue s'est produite.")
      break;
  }
}

function fonctionSucces(position) {
  const lat = position.coords.latitude
  const lng = position.coords.longitude

  if (!window.userMarker) {
    window.userMarker = L.marker([lat, lng], { icon: userIcon }).addTo(map)
  } else {
    window.userMarker.setLatLng([lat, lng])
  }

  const seuil = 10

  markers.forEach(item => {
    const [latPoi, lngPoi] = item.coords
    const distance = getDistanceFromLatLonInMeters(lat, lng, latPoi, lngPoi)

    if (distance < seuil && !item.notified) {
      item.marker.openPopup()
      notifSound.currentTime = 0
      notifSound.play().catch(err => {
        console.warn("Impossible de jouer le son automatiquement :", err)
      })
      item.notified = true
    }
  })
}