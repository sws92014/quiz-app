$(document).ready(function() {

//GLOBAL VARIABLES//
    var numberCorrect = 0;
    var currentQuestion = 0;
    var previousQuestion = currentQuestion - 1;


//ENTER BUTTON EVENT//
    $("#introDiv").on("click", "#enter", function (event) {
        event.preventDefault();
        introFadesToQuestions();
        loadQuestion();
        imgChange();
    });


//SUBMIT BUTTON EVENT//
    $("#questionDiv").on("click", "#submit", function (event) {
        event.preventDefault();
        answerCheck();
    });


//CONTINUE BUTTON EVENT//
    $("#resultDiv").on("click", "#continue", function (event) {
        event.preventDefault();
        goToNextScreen();
    });

//RETRY BUTTON EVENT//
    $("#endDiv").on("click", "#retry", function (event) {
        event.preventDefault();
        retry();
    });

//INTRO PAGE FADES AND QUESTION APPEARS FUNCTION//
    function introFadesToQuestions() {
        $("#introDiv").fadeOut();
        $('.designer').fadeOut();
        $('p').fadeOut();s
        $('#questionDiv').fadeIn();
    }

//IMAGE CHANGE FUNCTION//
    function imgChange() {
       if (currentQuestion == 0) {
              document.getElementById("wordImg").src = "images/meme.png";
       } else if (currentQuestion == 1){
              document.getElementById("wordImg").src = "images/tumblr.png";
       } else if (currentQuestion == 2){
              document.getElementById("wordImg").src = "images/imgur.png";
       } else if (currentQuestion == 3){
              document.getElementById("wordImg").src = "images/data.png";
       } else if (currentQuestion == 4){
              document.getElementById("wordImg").src = "images/ascii.png";
       } else if (currentQuestion == 5){
              document.getElementById("wordImg").src = "images/qwerty.png";
       } else if (currentQuestion == 6){
              document.getElementById("wordImg").src = "images/wifi.png";
       } else if (currentQuestion == 7){
              document.getElementById("wordImg").src = "images/lol.png";
       } else if (currentQuestion == 8){
              document.getElementById("wordImg").src = "images/png.png";
       } else if (currentQuestion == 9){
              document.getElementById("wordImg").src = "images/gif.png";
       } else if (currentQuestion == 10){
              document.getElementById("wordImg").src = "images/exe.png";
       } else if (currentQuestion == 11){
              document.getElementById("wordImg").src = "images/jpg.png";
       };
    }


//QUESTIONS ARRAY//
       var questions = [{
        question: "meme",
        choices: ["may • may", "me • me", "me • may", "meem"],
        qNum : 1,
        correct : 3,
        fact: "It's 'Meem.' Nothing fancy. Just one little syllable."
        },
        {
        question: "tumblr",
        choices: ["tum • bler", "tum • bull • er", "tum • bull • ar", "tum • bler • peer • ee • od"],
        qNum : 2,
        correct : 0,
        fact: "It's 'tum • bler.' Nbdy hs tm fr vwls nymr."
        },
        {
        question: "imgur",
        choices: ["image • er", "im • jur", "im • ger", "im • agg • ur"],
        qNum : 3,
        correct : 0,
        fact: "It's 'image • er.' It’s pronounced like the word “image” with an “-er” on the end."
        },
        {
        question: "data",
        choices: ["day • tay", "dah • tah", "day • tah", "dat • ah"],
        qNum : 4,
        correct : 2,
        fact: "It's 'day • tah.' Like the character from Star Trek: The Next Generation!"
        },
        {
        question: "ascii",
        choices: ["ace • ee", "aye • es • see • eye • eye", "ass • key", "ass • see"],
        qNum : 5,
        correct : 2,
        fact: "It's 'ass • key.' This form of early internet text-only image creation may not be very popular these days, but that’s no excuse for pronouncing it incorrectly."
        },
        {
        question: "qwerty",
        choices: ["queue • dub • el • you • ee • arr • tee • why", "kware • tie", "kwer • dee", "kwer • tee"],
        qNum : 6,
        correct : 3,
        fact: "It's 'kwer • tee.' Say it just like it’s spelled right there on your keyboard."
        },
        {
        question: "wifi",
        choices: ["wiff • fee", "why • fye", "dub • bull • you • eye • eff • eye", "why • fee"],
        qNum : 7,
        correct : 1,
        fact: "It's 'why • fye.' Did you know that “wifi” isn’t actually short for anything? Most people think it’s short for 'wireless fidelity', but it’s not!"
        },
        {
        question: "lol",
        choices: ["lowel", "el • oh • el", "lahl", "loh • el"],
        qNum : 8,
        correct : 1,
        fact: "It's 'el • oh • el.' Just like you’re saying each letter you see."
        },
        {
        question: "png",
        choices: ["pang", "ping", "pee • en • jee", "pong"],
        qNum : 9,
        correct : 1,
        fact: "It's 'ping.' Although, in a pinch, calling it a “pee • en • jee” works too."
        },
        {
        question: "gif",
        choices: ["gif (like “gift”)", "jif (like “gin”)", "jee • eye • eff", "guh • if"],
        qNum : 10,
        correct : 0,
        fact: "It's 'gif (like “gift”).' A lot of people are going to try to convince you that it’s jif with a soft g. It’s not. Don’t listen to those people."
        },
        {
        question: "exe",
        choices: ["ex • ee", "eggs • ee", "ee • ex • ee", "ee • ex • eh"],
        qNum : 11,
        correct : 2,
        fact: "It's 'ee • ex • ee.' You say each individual letter."
        },
        {
        question: "jpg",
        choices: ["jay • pedge", "je • pug", "jay • pee • ee • gee", "jay • peg"],
        qNum : 12,
        correct : 3,
        fact: "It's 'jay • peg.' Like the name 'Jay' and the word 'peg.'"
        },
        {
    }]


//GO TO NEXT SCREEN/QUESTION FUNCTION//
    function goToNextScreen() {
        if (currentQuestion < 11) {
            currentQuestion++;
            loadQuestion();
            imgChange();
            $('#resultDiv').fadeOut();
            $('.resultNegative').fadeOut();
            $('.resultPositive').fadeOut();
            $('#questionDiv').fadeIn();
        }else{
            $('#questionDiv').fadeOut();
            $('#resultDiv').fadeOut();
            $('.resultNegative').fadeOut();
            $('.resultPositive').fadeOut();
            $('#endDiv').slideDown();
            $("#result").html("You correctly answered " +numberCorrect+ " out of 12");
        };
    }

//LOAD QUESTION FUNCTION//
    function loadQuestion() { 
            var newQuestion = '<span class="question">'+
            questions[currentQuestion].question+
            '</span></br><div id="answerSelect"><input type="radio" name="option" class="option" value="0"><span class="answer">'+
            questions[currentQuestion].choices[0]+
            '</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+
            questions[currentQuestion].choices[1]+
            '</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+
            questions[currentQuestion].choices[2]+
            '</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+
            questions[currentQuestion].choices[3]+'</span><br></div>';
            $("#questionArea").html(newQuestion);   
    };

//ANSWER CHECK FUNCTION//
    function answerCheck() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == undefined) {
                alert('Please select an answer');
        }else if (answer == questions[currentQuestion].correct){
                console.log("Correct!");
                numberCorrect++;
                $('#questionDiv').fadeOut();
                $('#resultDiv').fadeIn();
                $('.resultPositive').fadeIn();
                $("#explain").html("<p>"+questions[currentQuestion].fact+"</p>");
        }else{
                console.log("Wrong");
                $('#questionDiv').fadeOut();
                $('#resultDiv').fadeIn();
                $('.resultNegative').fadeIn();
                $("#explain").html("<p>"+questions[currentQuestion].fact+"</p>");
        };
    }
    
//RETRY FUNCTION//
    function retry() {
        numberCorrect = 0;
        currentQuestion = 0;
        $("#introDiv").fadeIn();
        $('#endDiv').fadeOut();
    }

});    

