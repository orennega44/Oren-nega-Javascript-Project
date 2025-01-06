
const startText = document.querySelector(".startLine");
const startBtn = document.querySelector("#startBtn");
const QuestContainer = document.querySelector(".QuestContainer");
const questionList = document.querySelector(".questionList");
const message = document.querySelector(".status");
const question = document.querySelector(".question");
let userAnswer;




// https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
// *the api address
// todo : function for checking the correct answer
// todo : bilde the full question layout



// ! use object distractering

// get data from api
async function getQuestion() {
    try {

        const res = await fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple');
        const data = await res.json();
        ShowQuestions(data)

    } catch (err) {
        console.log(err);

    } 




}


function CheckAnswer(userAnswer, rigthAnswer) {

    if (userAnswer == rigthAnswer) {
        message.style.visibility = 'visible';
        message.innerHTML = 'Nice Job,Rigth Answer!';
        message.style.backgroundColor = 'green';
        setTimeout(() => {
            questionList.innerHTML = '';
            getQuestion()
        }, 2000);


    } else {
        message.style.visibility = 'visible';
        message.innerHTML = 'NOP,Try Again Buddy!';
        message.style.backgroundColor = 'red';


    }
    setTimeout(() => {
        message.style.visibility = 'hidden';
    }, 2000);

}


// setting the questions for thr correct leyout
function ShowQuestions(data) {

    if (data.response_code == 0) {

        const q = data.results;
        const randomNum = Math.floor(Math.random() * q.length * 1);


        question.innerHTML = q[randomNum].question;

        q[randomNum].incorrect_answers.push(q[randomNum].correct_answer);



        q[randomNum].incorrect_answers.map((i) => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            li.innerText = i;
            button.appendChild(li);
            questionList.appendChild(button);
            button.addEventListener('click', () => CheckAnswer(i, q[randomNum].correct_answer));

        });

    } else {

        question.innerHTML = '';
        questionList.innerHTML = '<p>Thr Is A problem With The Database, Please Refresh The Page </p>';
        questionList.style.display = 'flex';
    }


}






// button for getting the app running
startBtn.addEventListener('click', () => {

    startBtn.style.display = 'none';
    startText.style.display = 'none';
    QuestContainer.style.display = 'flex';
    getQuestion()

})

