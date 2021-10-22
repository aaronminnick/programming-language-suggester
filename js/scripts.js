// //Business Logic
function tallyUp(array) {
  let goPoints = 0;
  let pyPoints = 0;
  let swPoints = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Go") {
      goPoints += 1;
    } else if (array[i] === "Python") {
      pyPoints += 1;
    } else if (array[i] === "Swift") {
      swPoints +=1;
    }
  }

  if (goPoints > pyPoints && goPoints > swPoints) {
    return "Go";
  } else if (pyPoints > goPoints && pyPoints > swPoints) {
    return "Python";
  } else if (swPoints > goPoints && swPoints > pyPoints) {
    return "Swift";
  } else {
    return "Javascript";
  }
}

//UI logic
$(document).ready(function() {
  $(".first-question").click(function() {
    firstResponse = $("input:radio[name=question1]:checked").val();
    if (firstResponse === "seat") {
      $("#offered-seat").toggle();
    } else if (firstResponse === "no-seat") {
      $("#argued-inquiry").toggle();
    }
  });

  $(".next-question").click(function() {
    $(this.parentElement).slideToggle();
    $(this.parentElement.nextElementSibling).slideToggle();
  });
  
  $("#quiz-form").submit(function(event) {
    event.preventDefault();
    let answers = [];
    let result;
    let androidName;
    answers[0] = $("input:radio[name=question2]:checked").val();
    answers[1] = $("input:radio[name=question3]:checked").val();
    answers[2] = $("input:radio[name=question4]:checked").val();
    answers[3] = $("input:radio[name=question5]:checked").val();
    console.log(answers);
    result = tallyUp(answers);
    console.log(result);
    androidName = $("input#nameEntry").val();
    console.log(androidName);
    $(".language-chosen").html(result);
    $("#name").html(androidName);
    if (result === "Javascript") {
      $("#yes-tie").toggle();
    } else {
      $("#no-tie").toggle();
      if (answers[3] === result) {
        $("#question5-matched").toggle();
      }
    }
  });
});