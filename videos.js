const video = document.getElementById("capsules")
const btnPlay = document.getElementById("btnLecture")
let wasFullScreen = false

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

  video.addEventListener("play", () => {
    btnPlay.style.display = "none"
  })

  video.addEventListener("pause", () => {
    btnPlay.style.display = "block"
  })

  video.addEventListener("ended", () => {
    btnPlay.style.display = "block"
  })

  document.addEventListener("fullscreenchange", () => {
    const isFull = document.fullscreenElement === video
    video.controls = isFull

    if (wasFullScreen && !isFull) {
      video.pause()
    }
    wasFullScreen = isFull
  })
}