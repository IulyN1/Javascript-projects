const quizData = [
    {
        question: 'How old is Julian?',
        a: '10',
        b: '17',
        c: '20',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopter helicopter',
        correct: 'a'
    },
    {
        question: 'What year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'why would I even know that?',
        correct: 'd'
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answersEl = document.querySelectorAll(".answer");
    
let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d; 
}

submitBtn.addEventListener("click",()=>{
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz();
        }
        else{
            alert(score);    
        }
    }
});

function deselectAnswers(){
    answersEl.forEach(element => {
        element.checked = false;
    });
}

function getSelected(){
    let answer = undefined;
    answersEl.forEach(element => {
        if(element.checked){
           answer = element.id;
        }
    });
    return answer;
}