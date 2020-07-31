var questionAnswer = [{
    question: "The speed Of light is ?",
    correctAnswer: '3×10^8 ms-¹',
    choice: ['3×10^8 ms-¹', '3×10^6 ms-¹', '1.98×10^6 ms-¹', '3×10^-8 ms-¹']
},
{
    question: 'The red planet in solar system is ?',
    correctAnswer: 'Mars',
    choice: ['Jupiter', 'Mars', 'Mercury', 'Venus']
},
{
    question: 'The distance of Earth and Moon is ?',
    correctAnswer: '384,400 km',
    choice: ['100,400 km', '201,400 km', '384,400 km', '180,200 km']
},
{
    question: 'The film "Harry Potter" has production ?',
    correctAnswer: '8',
    choice: ['7', '6', '9', '8']
},
{
    question: 'The subject Maths was discovered by ?',
    correctAnswer: 'Pythagoreans',
    choice: ['Gottfried Wilhelm ', 'Pythagoreans', 'Archimedes', 'None of Above']
},
];

var mainDIV = document.getElementById('mainDIV');
var ques = document.getElementById('ques');
var result_Score = document.getElementById('score')
var button = document.getElementById('button')

var current_q = 0;
var score = 0;
var total = questionAnswer.length;

function populate(index) {

    var x = questionAnswer[index];
    ques.innerHTML = (index + 1) + '.  ' + x.question;
    var classes = document.getElementsByClassName('opt');
    for (let i = 0; i < classes.length; i++) {
        classes[i].innerHTML = x.choice[i];
    }
};

function nextQuestion() {
    matched_ans();
    remove_active_class();
    current_q++;

    if (current_q == total - 1) {
        button.innerHTML = 'Submit';
    }
    if (current_q == total) {
        mainDIV.style.display = 'none';
        result_Score.style.display = '';
        var bb = result_Score.innerHTML = "Score: " + Math.floor(score) + "  Out Of 100";
        console.log(bb)
        return;
    }
    populate(current_q);
};

function add_active_class(e) {
    remove_active_class();
    e.classList.add('active');
}

function remove_active_class() {
    var active = document.getElementsByClassName('active');
    for (let i = 0; i < active.length; i++) {
        active[i].classList.remove('active')
    }
}

function matched_ans() {
    var active = document.getElementsByClassName('active');
    if (active[0].innerHTML == questionAnswer[current_q].correctAnswer) {
        score += 20;
    }
}