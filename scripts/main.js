const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "../images/PhotoofMe2.png") {
    myImage.setAttribute("src", "../images/PhotoofMe1.png");
  } else {
    myImage.setAttribute("src", "../images/PhotoofMe2.png");
  }
};

const navigationButton = document.getElementById("navigationButton");
navigationButton.addEventListener('click', function() {
  window.location.href = "wishlist.html"
});