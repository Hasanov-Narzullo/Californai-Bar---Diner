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