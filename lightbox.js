const overlay = document.getElementById('lightbox-overlay')
const overlayImg = document.getElementById('lightbox-img')
const overlayClose = document.getElementById('lightbox-close')

document.querySelectorAll('img.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src
    overlay.classList.remove('hidden')
  })
})

overlay.addEventListener('click', (e) => {
  if (e.target === overlay || e.target === overlayClose) {
    overlay.classList.add('hidden')
  }
})