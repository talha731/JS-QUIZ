// questions appers when start is clicked
var startQuiz = new Event("start")
document.addEventListener("click", e=> {
    console.log(e)
})
document.dispatchEvent(startQuiz)
// there has to be 5 questions
// Q1 Javascript is an __________ language?( 1. object-oriented 2.object based 3.procedural 4.none of the above)
// Q2 Which of the following keywords is used to define a variable in Javascript?(var, let, both A and B, none of the above)
// Q3 Which of the following methods is used to access HTML elements using Javascript?(getElementbyId(), getElementByClassName(), both A and B, None of the above)
// Q4 Upon encountering empty statements, what does the Javascript Interpreter do?(Throws an error, Ignores the statement, Gives a warning, None od the above))
// Q5 Which of the following methods can be used to display data in some form using Javascript?(document.write(), console.log(), window.alert(), All of the above)

const questions = document.querySelector("#questions");
let question = [
    {
        question:"Javascript is an __________ language?",
        choice1: "Object-oriented",
        choice2: "Object based",
        choice3: "Procedural",
        choice4: "None of the above",
        answer: "Object based"
    },
    {
        question:"Which of the following keywords is used to define a variable in Javascript?",
        choice1: "Var",
        choice2: "Let",
        choice3: "Both A and B",
        choice4: "None of the above",
        answer: "Var"
    },{
        question:"Which of the following methods is used to access HTML elements using Javascript?",
        choice1: "getElementbyId()",
        choice2: "getElementByClassName()",
        choice3: "both A and B",
        choice4: "None of the above",
        answer: "both A and B"
    },{
        question:"Upon encountering empty statements, what does the Javascript Interpreter do?",
        choice1: "Throws an error",
        choice2: "Ignores the statement",
        choice3: "Gives a warning",
        choice4: "None of the above",
        answer: "Throws an error"
    },{
        question:"Which of the following methods can be used to display data in some form using Javascript?",
        choice1: "document.write()",
        choice2: "console.log()",
        choice3: "window.alert()",
        choice4: "All of the above",
        answer: "console.log()"
    }
]











//after answering a question another question is presented




//when a question is answered incorrectly tikme is substracted



// when all the questions are answered or teh timer reaches 0 the game is over






// user is able to save their score with their initials