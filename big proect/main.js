function openMovie(evt, movieName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(movieName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
  })
  $(".languages").click(function () {
    $(".mainLanguage").text($(this).text())
    var changedImage = $(this).find("img").attr('src')
    $(".mainImg").attr("src",changedImage)
  })
  $(".money").click(function () {
    $(".mainMoney").text($(this).text())
    var changedLetter=$(this).find(".mainMoney .money").attr("src")
    $(".mainMoney").attr(changedLetter)
  })
  
})


