function displayScore(name, score) {
    var message = name + ", your score was " + score + "! Congratulations!";
    alert(message);
  }
  
  
  var play = confirm("Welcome stranger,are you ready to play?");
  
  if (play) {
    let questions = [
      {
        question: "What was the year that Abraham Lincoln was murdered?",
        choices: ["1809", "1866", "2013", "1865"],
        correctAnswer: "1865"
      },
      {
        question: "What is the most deadliest animals to humans?",
        choices: ["Spiders", "Mosquitos", "Humans", "Sharks"],
        correctAnswer: "Mosquitos"
      },
      {
        question: "What is the most spoken language?",
        choices: ["English", "Spanish", "Chinese", "Guaraní"],
        correctAnswer: "Chinese"
      }
    ];
    
  
    let score = 0;
    
   
    let i = 0;
    do {
      let question = questions[i].question;
      let choices = questions[i].choices;
      let correctAnswer = questions[i].correctAnswer;
    
     
      let answer = prompt(question + "\n" + choices.join("\n"));
    
     
      if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct!");
        score++;
      } else {
        alert("Incorrect. The correct answer is " + correctAnswer);
      }
    
      i++;
    } while (i < questions.length);
    
    
    let name = prompt("Please enter your name:");
    displayScore(name, score);
    
  } else {
    alert("Goodbye!");
  }
  