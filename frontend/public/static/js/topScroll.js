window.onload = () => {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      document.getElementById("button").classList.add("show");
    } else {
      document.getElementById("button").classList.remove("show");
    }
  });

  document.getElementById("button").onclick = function (event) {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  };
};
