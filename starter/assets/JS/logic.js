// the logic for file goes here.
getNewQuestion = ( )=> {
    if(avalibleQuestions.length===0|| questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score)
        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'

    const questionIndex = Math.floor(Math.random()*avalibleQuestions.length)
    currentQuestion = avalibleQuestion[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset['number']
    choices.innerText = currentQuestion ['choices'+ number]
    })
        avalibleQuestion.splice(questionIndex,1)
        acceptingAnswers = true
    }
    
    choices.forEach(choices =>{
        choice.addEventListener('click', e =>{
            if(!acceptingAnswers) return


            acceptingAnswers = false
            const selectedChoice = e.target
            const selectedAnswer = selectedChoice.dataset['number']
            
            let classToApply = selectedAnswer ==currentQuestion.answer ? 'correct' :
            'incorrect'
            
            if (classToApply === 'correct'){
                incrementScore(SCORE_POINTS)
            }
            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
            }, 1000)
        })
    })
incrementScore=num=>{
    score +=num
    scoreText.innerText = score
}
startGame()

// timer is set for 1 mins
//var count = 60;
//var countDown = setInterval(function(){
 // count--;
 // console.log(count);
  //if (count === 0) {
  //  clearInterval(countDown);
//  }
//}, 1000);

//document.getElementById("start").addEventListener("click", function(){
 // clearInterval(countDown);
 // count = 60;
 // countDown = setInterval(function(){
 //   count--;
 //   console.log(count);
 //   if (count === 0) {
//      clearInterval(countDown);
//    }
//  }, 1000);
//});
