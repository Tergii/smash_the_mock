class Stats {
    constructor() {
        this.timer = 60;
        this.score = 0
        this.hightScore = 0

    }
    startTimer(timerSpan) {
        let interval = setInterval(() => {
            this.timer--
            timerSpan.innerText = this.timer

        }, 1000)
        setTimeout(() => {
            clearInterval(interval)
        }, 61000)
    };
    addListners(holes) {
        holes.forEach(hole => {
            hole.addEventListener('click', () => {
                if (hole.classList[1] === 'active' && this.timer > 0) {
                    hole.classList.remove('active');
                    this.score += 10
                };

            });
        });
    };
    countScore(hScore) {
        hScore.innerText = this.hightScore
    }
};