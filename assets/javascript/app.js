$(document).ready(function () {

    $(".questions").hide();
    var wrongAnswerMessage = "Nope!";
    var timeOutMessage = "Out of Time!";
    var correctAnswerMessage = "Correct!";
    var pageTimer = $(".timer");
    var timerId;
    var triviaPage;
    var correctAnswers=0;
    var incorrectAnswers=0;

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

    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            if (triviaPage === 1) {
                lionKingTimeOut();
            }
            else if (triviaPage === 2) {
                aladdinTimeOut();
            }
            else if (triviaPage === 3) {
                toyStoryTimeOut();
            }
            else if (triviaPage === 4) {
                jungleBookTimeOut();
            }
            else if (triviaPage === 5) {
                pinocchioTimeOut();
            }
        }
        else {
            pageTimer.html("Time Reamaining: " + timeLeft + " seconds");
            timeLeft--;
        }
    }

    function lionKingTimeOut() {
        $(".timer").hide();
        $("#lionKingAnswers").hide();
        $("#firstQuestion").html(timeOutMessage);
        $("#correctAnswerLionKing").html("The correct answer is " + triviaQuestions.lionKing.LKQ3);
        $("#rafiki").attr("src", "assets/images/rafikiwrong.gif");
        setTimeout(questionTwo, 1000 * 4);
        incorrectAnswers ++;
    }
    function aladdinTimeOut() {
        $(".timer").hide();
        $("#aladdinAnswers").hide();
        $("#secondQuestion").html(timeOutMessage);
        $("#correctAnswerAladdin").html("The correct answer is " + triviaQuestions.aladdin.AlQ3);
        $("#genieImage").attr("src", "assets/images/genieWrong.gif");
        setTimeout(questionThree, 1000 * 4);
        incorrectAnswers ++;
    }
    function toyStoryTimeOut() {
        $(".timer").hide();
        $("#toyStoryAnswers").hide();
        $("#thirdQuestion").html(timeOutMessage);
        $("#correctAnswerToyStory").html("The correct answer is " + triviaQuestions.toyStory.TSQ1);
        $("#slinkyImage").attr("src", "assets/images/slinkyWrong.gif");
        setTimeout(questionFour, 1000 * 4);
        incorrectAnswers ++;
    }
    function jungleBookTimeOut() {
        $(".timer").hide();
        $("#jungleBookAnswers").hide();
        $("#fourthQuestion").html(timeOutMessage);
        $("#correctAnswerJungleBook").html("The correct answer is " + triviaQuestions.jungleBook.JBQ4);
        $("#waltImage").attr("src", "assets/images/waltWrong.gif");
        setTimeout(questionFive, 1000 * 4);
        incorrectAnswers ++;
    }
    function pinocchioTimeOut() {
        $(".timer").hide();
        $("#pinocchioAnswers").hide();
        $("#fifthQuestion").html(timeOutMessage);
        $("#correctAnswerPinocchio").html("The correct answer is " + triviaQuestions.pinocchio.PQ1);
        $("#pinocchioImage").attr("src", "assets/images/pinocchioWrong.gif");
        setTimeout(resultsPage, 1000 * 4);
        incorrectAnswers ++;
    }

    //---------------------------------------------------------------------------------------------------------------------------------------//
    $("#startButton").click(function () {                                                       //Question 1 on Lion King
        
        $("#lionKingAnswers").show();
        triviaPage = 1;
        timeLeft = 30;
        timerId = setInterval(countdown, 1000);
        
        $("#introPage").hide();
        $("#Q1").show();
        $(".timer").show();
        $("#firstQuestion").html(triviaQuestions.lionKing.Question);
        $("#lionKingQ1").html(triviaQuestions.lionKing.LKQ1);
        $("#lionKingQ2").html(triviaQuestions.lionKing.LKQ2);
        $("#lionKingQ3").html(triviaQuestions.lionKing.LKQ3);
        $("#lionKingQ4").html(triviaQuestions.lionKing.LKQ4);
    });

    $("#lionKingQ1, #lionKingQ2, #lionKingQ4").click(function () {                              // execute this function if user answer is wrong
        $("#lionKingAnswers").hide();
        $(".timer").hide();
        $("#firstQuestion").html(wrongAnswerMessage);
        $("#correctAnswerLionKing").html("The correct answer is " + triviaQuestions.lionKing.LKQ3);
        $("#rafiki").attr("src", "assets/images/rafikiwrong.gif");
        clearTimeout(timerId);
        setTimeout(questionTwo, 1000 * 4);
        incorrectAnswers ++;
    });
    $("#lionKingQ3").click(function () {                                                        // execute this function if user answer is right
        $("#lionKingAnswers").hide();
        $(".timer").hide();
        $("#firstQuestion").html(correctAnswerMessage);
        $("#rafiki").attr("src", "assets/images/rafikicorrect.gif");
        clearTimeout(timerId);
        setTimeout(questionTwo, 1000 * 4);
        console.log("hello");
        correctAnswers++;
    });
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------//

    function questionTwo() {                                                                 //Q2 Aladdin
        
        $("#aladdinAnswers").show();
        triviaPage = 2;
        timeLeft = 30;
        timerId = setInterval(countdown, 1000);
        
        $("#Q1").hide();
        $("#Q2").show();
        $(".timer").show();
        $("#secondQuestion").html(triviaQuestions.aladdin.Question);
        $("#aladdinQ1").html(triviaQuestions.aladdin.AlQ1);
        $("#aladdinQ2").html(triviaQuestions.aladdin.AlQ2);
        $("#aladdinQ3").html(triviaQuestions.aladdin.AlQ3);
        $("#aladdinQ4").html(triviaQuestions.aladdin.AlQ4);
    }
    $("#aladdinQ1, #aladdinQ2, #aladdinQ4").click(function () {                              // execute this function if user answer is wrong
        $(".timer").hide();
        $("#aladdinAnswers").hide();
        $("#secondQuestion").html(wrongAnswerMessage);
        $("#correctAnswerAladdin").html("The correct answer is " + triviaQuestions.aladdin.AlQ3);
        $("#genieImage").attr("src", "assets/images/genieWrong.gif");
        clearTimeout(timerId);
        setTimeout(questionThree, 1000 * 4);
        incorrectAnswers ++;
    });
    $("#aladdinQ3").click(function () {                                                        // execute this function if user answer is right
        $(".timer").hide();
        $("#aladdinAnswers").hide();
        $("#secondQuestion").html(correctAnswerMessage);
        $("#genieImage").attr("src", "assets/images/genieCorrect.gif");
        clearTimeout(timerId);
        setTimeout(questionThree, 1000 * 4);
        correctAnswers++;
    });

    //--------------------------------------------------------------------------------------------------------------------------------------------------------------//

    function questionThree() {                                                                 //Q3 Toy Story
        $("#toyStoryAnswers").show();
        
        triviaPage = 3;
        timeLeft = 30;
        timerId = setInterval(countdown, 1000);
        
        $("#Q2").hide();
        $("#Q3").show();
        $(".timer").show();
        $("#thirdQuestion").html(triviaQuestions.toyStory.Question);
        $("#toyStoryQ1").html(triviaQuestions.toyStory.TSQ1);
        $("#toyStoryQ2").html(triviaQuestions.toyStory.TSQ2);
        $("#toyStoryQ3").html(triviaQuestions.toyStory.TSQ3);
        $("#toyStoryQ4").html(triviaQuestions.toyStory.TSQ4);
    }
    $("#toyStoryQ2, #toyStoryQ3, #toyStoryQ4").click(function () {                              // execute this function if user answer is wrong
        $(".timer").hide();
        $("#toyStoryAnswers").hide();
        $("#thirdQuestion").html(wrongAnswerMessage);
        $("#correctAnswerToyStory").html("The correct answer is " + triviaQuestions.toyStory.TSQ1);
        $("#slinkyImage").attr("src", "assets/images/slinkyWrong.gif");
        clearTimeout(timerId);
        setTimeout(questionFour, 1000 * 4);
        incorrectAnswers ++;
    });
    $("#toyStoryQ1").click(function () {                                                        // execute this function if user answer is right
        $(".timer").hide();
        $("#toyStoryAnswers").hide();
        $("#thirdQuestion").html(correctAnswerMessage);
        $("#slinkyImage").attr("src", "assets/images/slinkyCorrect.gif");
        clearTimeout(timerId);
        setTimeout(questionFour, 1000 * 4);
        correctAnswers++;
    });

    //--------------------------------------------------------------------------------------------------------------------------------------------------------------//

    function questionFour() {                                                                 //Q4 Disney/Junglebook
        
        $("#jungleBookAnswers").show();
        triviaPage = 4;
        timeLeft = 30;
        timerId = setInterval(countdown, 1000);
        
        $("#Q3").hide();
        $("#Q4").show();
        $(".timer").show();
        $("#fourthQuestion").html(triviaQuestions.jungleBook.Question);
        $("#jungleBookQ1").html(triviaQuestions.jungleBook.JBQ1);
        $("#jungleBookQ2").html(triviaQuestions.jungleBook.JBQ2);
        $("#jungleBookQ3").html(triviaQuestions.jungleBook.JBQ3);
        $("#jungleBookQ4").html(triviaQuestions.jungleBook.JBQ4);
    }
    $("#jungleBookQ1, #jungleBookQ2, #jungleBookQ3").click(function () {                              // execute this function if user answer is wrong
        $(".timer").hide();
        $("#jungleBookAnswers").hide();
        $("#fourthQuestion").html(wrongAnswerMessage);
        $("#correctAnswerJungleBook").html("The correct answer is " + triviaQuestions.jungleBook.JBQ4);
        $("#waltImage").attr("src", "assets/images/waltWrong.gif");
        clearTimeout(timerId);
        setTimeout(questionFive, 1000 * 4);
        incorrectAnswers ++;
    });
    $("#jungleBookQ4").click(function () {                                                        // execute this function if user answer is right
        $(".timer").hide();
        $("#jungleBookAnswers").hide();
        $("#fourthQuestion").html(correctAnswerMessage);
        $("#waltImage").attr("src", "assets/images/waltCorrect.gif");
        clearTimeout(timerId);
        setTimeout(questionFive, 1000 * 4);
        correctAnswers++;
    });

    //--------------------------------------------------------------------------------------------------------------------------------------------------------------//

    function questionFive() {                                                                 //Q4 Disney/Junglebook
        
        $("#pinocchioAnswers").show();
        triviaPage = 5;
        timeLeft = 30;
        timerId = setInterval(countdown, 1000);
        
        $("#Q4").hide();
        $("#Q5").show();
        $(".timer").show();
        $("#fifthQuestion").html(triviaQuestions.pinocchio.Question);
        $("#pinocchioQ1").html(triviaQuestions.pinocchio.PQ1);
        $("#pinocchioQ2").html(triviaQuestions.pinocchio.PQ2);
        $("#pinocchioQ3").html(triviaQuestions.pinocchio.PQ3);
        $("#pinocchioQ4").html(triviaQuestions.pinocchio.PQ4);
    }
    $("#pinocchioQ2, #pinocchioQ3, #pinocchioQ4").click(function () {                              // execute this function if user answer is wrong
        $(".timer").hide();
        $("#pinocchioAnswers").hide();
        $("#fifthQuestion").html(wrongAnswerMessage);
        $("#correctAnswerPinocchio").html("The correct answer is " + triviaQuestions.pinocchio.PQ1);
        $("#pinocchioImage").attr("src", "assets/images/pinocchioWrong.gif");
        clearTimeout(timerId);
        setTimeout(resultsPage, 1000 * 4);
        incorrectAnswers ++;
    });
    $("#pinocchioQ1").click(function () {                                                        // execute this function if user answer is right
        $(".timer").hide();
        $("#pinocchioAnswers").hide();
        $("#fifthQuestion").html(correctAnswerMessage);
        $("#pinocchioImage").attr("src", "assets/images/pinocchioCorrect.gif");
        clearTimeout(timerId);
        setTimeout(resultsPage, 1000 * 4);
        correctAnswers++;
    });

    //--------------------------------------------------------------------------------------------------------------------------------------------------------------//
    function resultsPage(){
        $("#Q5").hide();
        $("#gameOver").show();
        $("#resultsPage").html("Thank you for Playing!");
        $("#correctAnswersCount").html("You got " + correctAnswers + " questions correct!");
        $("#incorrectAnswersCount").html("You got " + incorrectAnswers + " questions wrong!");
        $("#triviaResults").html("You scored a " + (correctAnswers/5 * 100) + "%");
    }
    $("#playAgain").click(function(){
        $("#gameOver").hide();
        $("#introPage").show();
    });






}); //end of document.ready