//define functions here

$(document).ready(function(){

// call functions here

});

function getIt() {
  $('p').addEventListener("click", function() {
    alert("Hey!") ;
  })
}
function frameIt() {
  $(img).addEventListener("load", function() {
    self.class = "tasty"
  })
}
function pressIt() {
  $('#typing').addEventListener("keydown", function(e) {
    if (e.which === 71) {alert('You have pressed the G key')}
  })
}
function submitIt() {
  $('form').addEventListener("submit", function() {
    alert('Your form is going to be submitted now.')
  })
}
