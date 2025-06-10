document.addEventListener('DOMContentLoaded', () => {
  const KEY   = 'map_first_visit'
  const video = document.getElementById('videoLoader')
  const overlay = document.getElementById('first_visit_overlay')
  const close = document.getElementById('first_visit_close')

  if (!video || !overlay || !close) {
    console.error('first_visit.js: éléments manquants')
    return
  }

  if (localStorage.getItem(KEY)) return

  video.addEventListener('ended', () => {
    localStorage.setItem(KEY, 'true')
    overlay.classList.add('visible')
  })

  close.addEventListener('click', () => {
    overlay.classList.remove('visible')
  })
})