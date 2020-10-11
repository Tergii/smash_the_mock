const holes = document.querySelectorAll('.hole');
const timer = document.querySelector('#timer');
const score = document.querySelector('#score')
const startBtn = document.querySelector('#start');
const hightScore = document.querySelector('#high-score')

const stats = new Stats;
const logic = new Logic;

let getTime = () => stats.timer

let getScore = () => stats.score

function startGame() {
    stats.timer = 60
    stats.score = 0
    stats.addListners(holes)
    logic.organizateDisplay(holes, getTime);
    stats.startTimer(timer)

    let clear = '';
    let time = '';

    let index = setInterval(() => {
        time = getTime()
        if (time === 0) {
            clearInterval(clear);
            let score = getScore();
            if (score > stats.hightScore) {
                stats.hightScore = score
                stats.countScore(hightScore);
                startBtn.style.display = 'block';
                startBtn.innerText = 'Restart';
            } else {
                stats.countScore(hightScore);
                startBtn.style.display = 'block';
                startBtn.innerText = 'Restart';
            }

        } else {
            score.innerText = getScore()
        };
    }, 100);
    clear = index
    startBtn.style.display = 'none'
};



startBtn.addEventListener('click', () => startGame())