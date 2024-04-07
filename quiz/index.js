var quizdata=[
    {
        question : '1.who develop javascript?',
        a:'James Gosling',
        b:'Bjarne Stroustrup',
        c:'Guido van Rossum',
        d:'Brendan Eich',
        correct:'d'
    },
    {
        question : '2.Which of the following number object function returns the value of the number?',
        a:'toString()',
        b:'valueOf()',
        c:'toLocaleString()',
        d:'toPrecision()',
        correct:'b'
    },
    {
        question : '3.React.js is written in which of the following language?',
        a:'C',
        b:'C++',
        c:'Javascript',
        d:'Java',
        correct:'c'
    },
    {
        question : '4.Which of the following is correct about prop in react?',
        a:'Can be changed inside another component',
        b:'Can be changed inside the component',
        c:'Cannot be changed in the component',
        d:'All of the mentioned',
        correct:'c'
    },
    {
        question : '5.The correct sequence of HTML tags for starting a webpage is -',
        a:'Head, Title, HTML, body',
        b:'HTML, Body, Title, Head',
        c:'HTML, Title, Head, Body',
        d:'HTML, Head, Title, Body',
        correct:'d'
    }

]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentQuestion = 0
var quizScore = 0

loadQuiz()

function loadQuiz()
{
    deselect()

    question.innerHTML = quizdata[currentQuestion].question
    option_a.innerText = quizdata[currentQuestion].a
    option_b.innerText = quizdata[currentQuestion].b
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText = quizdata[currentQuestion].d
}

function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}

 submitbtn.addEventListener('click', ()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked){
            selectedoption=answer.id
        }
    })
    
    if(selectedoption==quizdata[currentQuestion].correct)
    {
        quizScore=quizScore+1
    }
    currentQuestion=currentQuestion+1
    
    if(currentQuestion==quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML = `<h1>You have answer ${quizScore} correctly out of ${quizdata.length}</h1>`
    }else{
        loadQuiz()
    }
 })