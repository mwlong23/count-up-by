$(document).ready(function() {
  $("#userInput").submit(function(event){
    event.preventDefault();
    var count = parseInt($("input#count-to").val());
    var factor = parseInt($("input#count-by").val());

    var basket = [];
    for (var i = factor; i <= count; i += factor){
      basket.push(i);
    };
    alert(count + " | " + factor + " | " + basket);
  });
});
