const video = document.getElementById("videoLoader")
const loader = document.getElementById("loader")

video.playbackRate = 2

video.addEventListener("ended", () => {
    loader.style.opacity = 0
    loader.style.pointerEvents = "none"
    loader.style.transition = "opacity 0.5s ease"
})
