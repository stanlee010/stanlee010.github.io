$(document).ready(function () {

  function hidePreloader() {
    setTimeout(function () {
      $('.loading').hide()
    }, 7000)

  }
  hidePreloader();
})


function myFunction1() {
  document.getElementById("sect").style.display = "block";
  document.getElementById("sect1").style.display = "none";
  document.getElementById("sect2").style.display = "none";
}

function myFunction2() {
  document.getElementById("sect1").style.display = "block";
  document.getElementById("sect").style.display = "none";
  document.getElementById("sect2").style.display = "none";
}

function myFunction3() {
  document.getElementById("sect2").style.display = "block";
  document.getElementById("sect").style.display = "none";
  document.getElementById("sect1").style.display = "none";
}