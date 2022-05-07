const pageAFront = document.querySelector('.page-A-front'),
      pageABack = document.querySelector('.page-A-back'),
      pageBFront = document.querySelector('.page-B-front'),
      pageBBack = document.querySelector('.page-B-back'),
      pageCFront = document.querySelector('.page-C-front'),
      pageCBack = document.querySelector('.page-C-back'),
      pageDFront = document.querySelector('.page-D-front'),
      pageDBack = document.querySelector('.page-D-back'),
      pageEFront = document.querySelector('.page-E-front'),
      pageEBack = document.querySelector('.page-E-back'),
      bookContainer = document.querySelector('.book-container')

let angle = '-180deg'

const pageOrientation = () =>{
   bookContainer.getBoundingClientRect().width > bookContainer.getBoundingClientRect().height ? angle = '-180deg' : angle = '180deg'
  console.log(angle)
}

pageOrientation()

pageAFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-A', angle)
  document.documentElement.style.setProperty('--translate', '100%')
})

pageBFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-B', angle)
  document.documentElement.style.setProperty('--z-index-A', '1')
  document.documentElement.style.setProperty('--z-index-B', '15')
})

pageCFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-C', angle)
  document.documentElement.style.setProperty('--z-index-B', '5')
  document.documentElement.style.setProperty('--z-index-C', '10')
})

pageDFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-D', angle)
  document.documentElement.style.setProperty('--z-index-C', '10')
  document.documentElement.style.setProperty('--z-index-D', '15')
})

pageEFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-E', angle)
  document.documentElement.style.setProperty('--translate', '150%')
  document.documentElement.style.setProperty('--z-index-E', '20')
})





pageABack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-A', '0deg')
  document.documentElement.style.setProperty('--translate', '50%')
  document.documentElement.style.setProperty('--z-index-A', '20')
})

pageBBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-B', '0deg')
  document.documentElement.style.setProperty('--z-index-C', '10')
  document.documentElement.style.setProperty('--z-index-B', '15')
})

pageCBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-C', '0deg')
  document.documentElement.style.setProperty('--z-index-D', '5')
  document.documentElement.style.setProperty('--z-index-C', '10')
})

pageDBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-D', '0deg')
  document.documentElement.style.setProperty('--z-index-E', '1')
  document.documentElement.style.setProperty('--z-index-D', '15')
})

pageEBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-E', '0deg')
  document.documentElement.style.setProperty('--translate', '100%')
  document.documentElement.style.setProperty('--z-index-E', '20')
})





let button = document.querySelector('.nav-button').addEventListener('click', function() {
  let navbar = document.querySelector('.navbar-hidden');


  if (navbar.classList.contains("turned-off")) {
    navbar.classList.remove("turned-off");
    navbar.classList.add("turn-on")
  }
  else if (navbar.classList.contains("turn-on")) {
    navbar.classList.remove("turn-on")
    navbar.classList.add("turn-off")
  }
  else if (navbar.classList.contains("turn-off")) {
    navbar.classList.remove("turn-off")
    navbar.classList.add("turn-on")
  }
});