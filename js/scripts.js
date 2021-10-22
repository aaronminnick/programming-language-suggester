//Business Logic


//UI logic
$(document).ready(function() {
  $(".next-question").click(function() {
    $(this.parentElement).slideToggle();
    $(this.parentElement.nextElementSibling).slideToggle();
  });
  
  $("#quiz-form").submit(function(event) {
    event.preventDefault();
  });
});