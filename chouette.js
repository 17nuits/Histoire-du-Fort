const btn = document.getElementById('btnchouette')
const bulle = document.getElementById('bulle')
const contenuFlou = document.querySelectorAll('.flou')

btn.addEventListener('click', () => {
  const visible = bulle.style.display === 'block'

  if (!visible) {
    bulle.style.display = 'block'
    contenuFlou.forEach(el => el.classList.add('blur'))
  } else {
    bulle.style.display = 'none'
    contenuFlou.forEach(el => el.classList.remove('blur'))
  }
})