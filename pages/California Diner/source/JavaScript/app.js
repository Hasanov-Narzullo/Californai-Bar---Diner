const options = {
    threshold: 0.5
}

const callback = function (entries, observer) {

    entries.forEach(entry => {

        const   { target, isIntersecting, IntersectionRatio } = entry;

      if(isIntersecting) {
        target1.classList.add('active-1'),
        target2.classList.add('active-2'),
        target3.classList.add('active-3')
      } 
    })

}

const observer = new IntersectionObserver(callback, options);

const target1 = document.querySelector( '.advantages-img-1')
observer.observe(target1)
const target2 = document.querySelector( '.advantages-img-2')
observer.observe(target2)
const target3 = document.querySelector( '.advantages-img-3')
observer.observe(target3)





let buttons = document.querySelectorAll('.menu-button')
for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    let menu = document.querySelector('.menu-open');
    let container = document.querySelector('.container')
    let body = document.body;

    if (menu.classList.contains("turned-off")) {
      body.classList.add("body-overflow")
      container.classList.add("filter")
      menu.classList.add("menu-opened");
      menu.classList.remove("turned-off");
    }
    else if (menu.classList.contains("removed")) {
      body.classList.add("body-overflow")
      container.classList.add("filter")
      menu.classList.add("menu-opened");
      menu.classList.remove("removed");
    }
    else {
      body.classList.remove("body-overflow");
      container.classList.remove("filter")
      menu.classList.remove("menu-opened");
      menu.classList.add("removed");
    }
  });
};
