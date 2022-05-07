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
      pageFFront = document.querySelector('.page-F-front'),
      pageFBack = document.querySelector('.page-F-back'),
      pageGFront = document.querySelector('.page-G-front'),
      pageGBack = document.querySelector('.page-G-back'),
      pageHFront = document.querySelector('.page-H-front'),
      pageHBack = document.querySelector('.page-H-back'),
      pageIFront = document.querySelector('.page-I-front'),
      pageIBack = document.querySelector('.page-I-back'),
      pageJFront = document.querySelector('.page-J-front'),
      pageJBack = document.querySelector('.page-J-back'),
      pageKFront = document.querySelector('.page-K-front'),
      pageKBack = document.querySelector('.page-K-back'),
      pageLFront = document.querySelector('.page-L-front'),
      pageLBack = document.querySelector('.page-L-back'),
      pageMFront = document.querySelector('.page-M-front'),
      pageMBack = document.querySelector('.page-M-back'),
      bookContainer = document.querySelector('.book-container');



let angle = '-180deg'

const pageOrientation = () =>{
  bookContainer.getBoundingClientRect().width > bookContainer.getBoundingClientRect().height ? angle = '-180deg' : angle = '180deg'
}

pageOrientation()

pageAFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-A', angle)
  document.documentElement.style.setProperty('--translate', '100%')
})

pageBFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-B', angle)
  document.documentElement.style.setProperty('--z-index-A', '1')
  document.documentElement.style.setProperty('--z-index-B', '110')
})

pageCFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-C', angle)
  document.documentElement.style.setProperty('--z-index-B', '10')
  document.documentElement.style.setProperty('--z-index-C', '100')
})

pageDFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-D', angle)
  document.documentElement.style.setProperty('--z-index-C', '20')
  document.documentElement.style.setProperty('--z-index-D', '90')
})

pageEFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-E', angle)
  document.documentElement.style.setProperty('--z-index-D', '30')
  document.documentElement.style.setProperty('--z-index-E', '80')
})

pageFFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-F', angle)
  document.documentElement.style.setProperty('--z-index-E', '40')
  document.documentElement.style.setProperty('--z-index-F', '70')
})
  
pageGFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-G', angle)
  document.documentElement.style.setProperty('--z-index-F', '50')
  document.documentElement.style.setProperty('--z-index-G', '60')
})
  
pageHFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-H', angle)
  document.documentElement.style.setProperty('--z-index-G', '60')
  document.documentElement.style.setProperty('--z-index-H', '70')
})
  
pageIFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-I', angle)
  document.documentElement.style.setProperty('--z-index-H', '70')
  document.documentElement.style.setProperty('--z-index-I', '80')
})
  
pageJFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-J', angle)
  document.documentElement.style.setProperty('--z-index-I', '80')
  document.documentElement.style.setProperty('--z-index-J', '90')
})

pageKFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-K', angle)
  document.documentElement.style.setProperty('--z-index-J', '90')
  document.documentElement.style.setProperty('--z-index-K', '100')
})
  
pageLFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-L', angle)
  document.documentElement.style.setProperty('--z-index-K', '100')
  document.documentElement.style.setProperty('--z-index-L', '110')
})

pageMFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-M', angle)
  document.documentElement.style.setProperty('--translate', '150%')
  document.documentElement.style.setProperty('--z-index-M', '120')
})



pageABack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-A', '0deg')
  document.documentElement.style.setProperty('--translate', '50%')
  document.documentElement.style.setProperty('--z-index-A', '120')
})

pageBBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-B', '0deg')
  document.documentElement.style.setProperty('--z-index-C', '100')
  document.documentElement.style.setProperty('--z-index-B', '110')
})

pageCBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-C', '0deg')
  document.documentElement.style.setProperty('--z-index-D', '90')
  document.documentElement.style.setProperty('--z-index-C', '100')
})

pageDBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-D', '0deg')
  document.documentElement.style.setProperty('--z-index-E', '80')
  document.documentElement.style.setProperty('--z-index-D', '90')
})

pageEBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-E', '0deg')
  document.documentElement.style.setProperty('--z-index-F', '70')
  document.documentElement.style.setProperty('--z-index-E', '80')
})

pageFBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-F', '0deg')
  document.documentElement.style.setProperty('--z-index-G', '60')
  document.documentElement.style.setProperty('--z-index-F', '70')
})
  
pageGBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-G', '0deg')
  document.documentElement.style.setProperty('--z-index-H', '50')
  document.documentElement.style.setProperty('--z-index-G', '60')
})
  
pageHBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-H', '0deg')
  document.documentElement.style.setProperty('--z-index-I', '40')
  document.documentElement.style.setProperty('--z-index-H', '70')
})
  
pageIBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-I', '0deg')
  document.documentElement.style.setProperty('--z-index-J', '30')
  document.documentElement.style.setProperty('--z-index-I', '80')
})
  
pageJBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-J', '0deg')
  document.documentElement.style.setProperty('--z-index-K', '20')
  document.documentElement.style.setProperty('--z-index-J', '90')
})
  
pageKBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-K', '0deg')
  document.documentElement.style.setProperty('--z-index-L', '10')
  document.documentElement.style.setProperty('--z-index-K', '100')
})
  
pageLBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-L', '0deg')
  document.documentElement.style.setProperty('--z-index-M', '1')
  document.documentElement.style.setProperty('--z-index-L', '110')
})

pageMBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-M', '0deg')
  document.documentElement.style.setProperty('--translate', '100%')
  document.documentElement.style.setProperty('--z-index-M', '120')
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
