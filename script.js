// DOM Element
let scoreDom = null
let questionDom = null
let reponseDOM = []


let score = 0;
let questionIndex = 0;
const questions = [
    {
        id: 0,
        question: 'Quel est le nom du président de la République Française ?',
        reponses: [
            'Emmanuel Macron',
            'François Hollande',
            'Nicolas Sarkozy',
            'Jacques Chirac'
        ],
        bonneReponse: 0
    },
    {
        id: 1,
        question: 'Quel est la capital de la France ?',
        reponses: [
            'Lille',
            'Paris',
            'Nantes',
            'Lyon'
        ],
        bonneReponse: 1
    }
];
let quiz = questions[questionIndex];

/**
 * 
 * 
 */
const updateDataGame = () => {
    // on met a jour la question
    questionDom.innerHTML = quiz.question;
    // on met a jour les reponses
    reponseDOM.forEach((rep, index) => {
        rep.innerHTML = quiz.reponses[index];
    });
}

/**
 * 
 * 
 */
const DOMLoaded = () => {
    // MAJ DOM element
    scoreDom = document.querySelector('#score');
    questionDom = document.querySelector('#question');
    reponseDOM = [
        document.querySelector('#repA'),
        document.querySelector('#repB'),
        document.querySelector('#repC'),
        document.querySelector('#repD')
    ];

    updateDataGame();
    
    // on creer les addEventListener au clic sur les button reponse
    reponseDOM.forEach((rep, index) => {
        rep.addEventListener('click', () => onClick(index));
    });
}

/**
 * 
 * @param {number} 
 */
const onClick = (reponse) => {
    // si c'est la bonne reponse on met a jour le score
    if (reponse === quiz.bonneReponse) {
        score++;
        scoreDom.innerHTML = score;
    }
    // si il y a encore des question on passe a la suivante
    if (questionIndex < questions.length - 1) {
        questionIndex++;
        quiz = questions[questionIndex];
        updateDataGame();
    }
}

document.addEventListener('DOMContentLoaded', DOMLoaded);
