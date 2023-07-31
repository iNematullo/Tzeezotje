// Swiper slider

var swiper = new Swiper(".mySwiper", {
    observer: true,
    observeParents: true,
    parallax:true,

  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// modal
var modal = document.getElementById("resModal");

var btn = document.getElementById("resBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//form 


$("#ajaxForm").submit(function(e){
    e.preventDefault();
    var action = $(this).attr("action");
    var data = {};
    $(this).serializeArray().map(function(x){data[x.name] = x.value;}); 
    $.ajax({
      type: "POST",
      url: action,
      data: JSON.stringify(data),
      contentType: "application/json",
      headers: {
        "Accept": "application/json"
      }
    }).done(function() {
       $('.success').addClass('is-active');
    }).fail(function() {
       alert('An error occurred please try again later.')
    });
  });



