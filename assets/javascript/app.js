$(document).ready(function () {

    var triviaQuestions = {
        lionKing: {
            Question: "What is the name of the baboon from the Lion King?",
            LKQ1: "Zazu",
            LKQ2: "Simba",
            LKQ3: "Rafiki", //correct answer
            LKQ4: "Timon"
        },
        aladdin: {
            Question: "In the movie Aladdin, how long was Genie stuck in the lamp before aladdin released him?",
            AlQ1: "100 years",
            AlQ2: "1,000 years",
            AlQ3: "10,000 years", //correct answer
            AlQ4: "100,000 years"
        },
        toyStory: {
            Question: "In Toy Story, what board game does Slinky play?",
            TSQ1: "Checkers", //correct answer
            TSQ2: "Battleship",
            TSQ3: "Connect 4",
            TSQ4: "Chess"
        },
        jungleBook: {
            Question: "What was the last Disney movie officially overseen by Walt Disney?",
            JBQ1: "Snow White",
            JBQ2: "Cinderella",
            JBQ3: "The Rescuers",
            JBQ4: "The Jungle Book" //correct answer
        },
        pinocchio: {
            Question: "What was the name of the whale in Pinocchio?",
            PQ1: "Monstro", //correct answer
            PQ2: "Beluga",
            PQ3: "Moby",
            PQ4: "Humongo"
        }

    };
    $(".questions").hide();
    var wrongAnswer = "Nope!";
    var timeOut = "Out of Time!";
    var correctAnswer = "Correct!";
    var pageTimer = $(".timer");
    var timerId;

    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            $("#firstQuestion").html(timeOut);
            $(".correctAnswer").html("The correct answer is " + triviaQuestions.lionKing.LKQ3);
            $("#rafiki").attr("src", "assets/images/rafikiwrong.gif");
            clearTimeout(timerId);
            setTimeout(questionTwo, 1000 * 5);
        }
        else {
            pageTimer.html("Time Reamaining: " + timeLeft + " seconds");
            timeLeft--;
        }
    }


    $("#startButton").click(function () {
        timeLeft = 30;
        timerId = setInterval(countdown, 1000);                                                   //sets 30 second timer
        $("#introPage").hide();                                         // when you click start button, hide this page
        $("#Q1").show();                                                // display first question once you click start
        $("#firstQuestion").html(triviaQuestions.lionKing.Question);
        $("#lionKingQ1").html(triviaQuestions.lionKing.LKQ1);
        $("#lionKingQ2").html(triviaQuestions.lionKing.LKQ2);
        $("#lionKingQ3").html(triviaQuestions.lionKing.LKQ3);
        $("#lionKingQ4").html(triviaQuestions.lionKing.LKQ4);
    });
    //-------------------------------------------------------------------------------------------//
    $("#lionKingQ1, #lionKingQ2, #lionKingQ4").click(function () {
        $("#firstQuestion").html(wrongAnswer);
        $(".correctAnswer").html("The correct answer is " + triviaQuestions.lionKing.LKQ3);
        $("#rafiki").attr("src", "assets/images/rafikiwrong.gif");
        clearTimeout(timerId);
        setTimeout(questionTwo, 1000 * 5);
    });
    $("#lionKingQ3").click(function () {
        $("#firstQuestion").html(correctAnswer);
        $("#rafiki").attr("src", "assets/images/rafikicorrect.gif");
        clearTimeout(timerId);
        setTimeout(questionTwo, 1000 * 5);
        console.log("hello");
    });
    //-------------------------------------------------------------------------------------------//
    function questionTwo() {
        timeLeft = 30;
        timerId = setInterval(countdown, 1000);
        $("#Q1").hide();
        $("#Q2").show();
        $("#secondQuestion").html(triviaQuestions.aladdin.Question);
        $("#aladdinQ1").html(triviaQuestions.aladdin.AlQ1);
        $("#aladdinQ2").html(triviaQuestions.aladdin.AlQ2);
        $("#aladdinQ3").html(triviaQuestions.aladdin.AlQ3);
        $("#aladdinQ4").html(triviaQuestions.aladdin.AlQ4);

    }
    function questionThree() {
        $("#Q2").hide();                                              
        $("#Q3").show();                                               
        setTimeout(questionTwo, 1000 * 30);                              
        $("#thirdQuestion").html(triviaQuestions.aladdin.Question);
        $("#toyStoryQ1").html(triviaQuestions.aladdin.AlQ1);
        $("#toyStoryQ2").html(triviaQuestions.aladdin.AlQ2);
        $("#toyStoryQ3").html(triviaQuestions.aladdin.AlQ3);
        $("#toyStoryQ4").html(triviaQuestions.aladdin.AlQ4);

    }









}); //end of document.ready