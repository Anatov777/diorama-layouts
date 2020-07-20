window.onload = () => {
  let btn = document.querySelector("#button");

  $(window).scroll(function () {
    console.log("Scroll detected!!!");

    if ($(window).scrollTop() > 300) {
      console.log("add class!!!");
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
