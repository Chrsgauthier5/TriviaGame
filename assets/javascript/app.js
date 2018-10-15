$( document ).ready(function() {




var triviaQuestions = {
    lionKing: {
        Question: "What is the name of the baboon from the Lion King?",
        LKQ1: "Zazu",
        LKQ2: "Simba",
        LKQ3: "Rafiki",
        LKQ4: "Timon"
    },
    Aladdin:{
        Question: "When Aladdin pretends Jasmine is his sister, what animal does she call 'Doctor'?",
        AlQ1: "Monkey",
        AlQ2: "Camel",
        AlQ3: "Elephant",
        AlQ4: "Tiger"
    }
};

$("#Q1").hide();
$("#Q2").hide();

$("#startButton").click(function(){
$("#introPage").hide();
$("#Q1").show();
$("#firstQuestion").html(triviaQuestions.lionKing.Question);
$("#lionKingQ1").html(triviaQuestions.lionKing.LKQ1);
$("#lionKingQ2").html(triviaQuestions.lionKing.LKQ2);
$("#lionKingQ3").html(triviaQuestions.lionKing.LKQ3);
$("#lionKingQ4").html(triviaQuestions.lionKing.LKQ4);

setTimeout(questionTwo, 1000*3);

});

function questionTwo (){
$("#Q1").hide();
$("#Q2").show();    
$("#secondQuestion").html(triviaQuestions.Aladdin.Question);
$("#aladdinQ1").html(triviaQuestions.Aladdin.AlQ1);
$("#aladdinQ2").html(triviaQuestions.Aladdin.AlQ2);
$("#aladdinQ3").html(triviaQuestions.Aladdin.AlQ3);
$("#aladdinQ4").html(triviaQuestions.Aladdin.AlQ4);

}










}); //end of document.ready