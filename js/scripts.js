//Business Logic
function tallyUp(array) {
  let goPoints = 0;
  let pyPoints = 0;
  let swPoints = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "go") {
      goPoints += 1;
    } else if (array[i] === "python") {
      pyPoints += 1;
    } else if (array[i] === "swift") {
      swPoints +=1;
    }
  }

  if (goPoints > pyPoints && goPoints > swPoints) {
    return "go";
  } else if (pyPoints > goPoints && pyPoints > swPoints) {
    return "python";
  } else if (swPoints > goPoints && swPoints > pyPoints) {
    return "swift";
  }
}


//UI logic
$(document).ready(function() {
  $(".next-question").click(function() {
    $(this.parentElement).slideToggle();
    $(this.parentElement.nextElementSibling).slideToggle();
  });
  
  $("#quiz-form").submit(function(event) {
    event.preventDefault();
    const answers[];
    answers[0] = $("input:radio[name=question2]:checked").val();
    answers[1] = $("input:radio[name=question3]:checked").val();
    answers[2] = $("input:radio[name=question4]:checked").val();
    answers[3] = $("input:radio[name=question5]:checked").val();

    tallyUp(answers);
    }
  });
});