window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
  if(scrolled === 100){
    window.alert('Congratulation, you finished all programs!')
  }
}

$('a').click(function () { 
 
  if($('a').hasClass("box")){
    $('a').removeClass("box");
  };
  if($(this).attr('href') !== "#home"){
    $(this).addClass("box");
    
  }
   
});


$(`#article.img`).removeClass(`hover`)