const video = document.getElementById("capsules")
const btnPlay = document.getElementById("btnLecture")

if (video && btnPlay) {
  btnPlay.addEventListener("click", () => {
    if (video.requestFullscreen) {
      video.requestFullscreen()
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen()
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen()
    }

    video.play().catch(err => {
      console.error("Erreur lecture :", err)
    })

    btnPlay.style.display = "none"
  })

  // masquer btn quand  vid joue
  video.addEventListener("play", () => {
    btnPlay.style.display = "none"
  })

  // afficher en pause
  video.addEventListener("pause", () => {
    btnPlay.style.display = "block"
  })

  // afficher à la fin de la vid
  video.addEventListener("ended", () => {
    btnPlay.style.display = "block"
  })

  document.addEventListener("fullscreenchange", () => {
    const isFull = document.fullscreenElement === video;
    video.controls = isFull

    if (!isFull) {
      video.pause() // pause quand on quitte le fullscreen 
    }
  })
}