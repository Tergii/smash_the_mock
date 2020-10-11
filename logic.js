class Logic {
    constructor() {
        this.choosedHoles = [];
    }
    organizateDisplay = (holes, getTimer) => {
        this.chooseHoles(holes);

        let timer = 0;
        let clear = '';
        let speed = 1000;

        let index = setInterval(() => {
            if (timer === 50) {
                clearInterval(clear);
                let clear2 = '';
                let index = setInterval(() => {
                    if (timer === 25) {
                        clearInterval(clear2);
                        let clear3 = '';
                        let index = setInterval(() => {
                            if (timer === 1) {
                                clearInterval(clear3);
                            } else {
                                speed = 550;
                                this.chooseHoles(holes, speed);
                                timer = getTimer();
                            }
                        }, 850);
                        clear3 = index;
                    } else {
                        speed = 700;
                        this.chooseHoles(holes, speed);
                        timer = getTimer();
                    };
                }, 1000);
                clear2 = index;
            } else {
                this.chooseHoles(holes, speed);
                timer = getTimer();
            };
        }, 1500);
        clear = index;
    };
    chooseHoles = (holes, speed) => {
        for (let i = 0; i < 2; i++) {
            let index = Math.floor(Math.random() * (holes.length));
            this.choosedHoles.push(index);

        };
        this.choosedHoles.forEach(index => {
            holes[index].classList += ' active';
        });

        setTimeout(() => {
            this.choosedHoles.forEach(index => {
                holes[index].classList.remove('active');
                this.choosedHoles = [];
            })
        }, speed);
    };

};