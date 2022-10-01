const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player1Skin = document.getElementById('player1Skin');
const player2Skin = document.getElementById('player2Skin');
const potionTarget = document.getElementById('potionTarget');
const sliderLeftButton = document.getElementById('sliderLeftButton');
const sliderRightButton = document.getElementById('sliderRightButton');
const sliderLine = document.getElementById('sliderLine');
let topPosP1 = 48;
let leftPosP1 = 48;
let topPosP2 = 48;
let leftPosP2 = 52;
let randomPosLeft;
let randomPosTop;
let player1Score = 0;
let player2Score = 0;
let player1Mass = 55;
let player2Mass = 55;
let player1Nick;
let player2Nick;
let gammode;
document.getElementById("gameModeDropDown").onchange = function () {
    gammode = document.getElementById("gameModeDropDown").value;
}
document.getElementById("startGameBtn").onclick = function () {
    coloseAllPages();
    player1.style.display = 'flex';
    player2.style.display = 'flex';
    topPosP1 = 48;
    leftPosP1 = 48;
    topPosP2 = 48;
    leftPosP2 = 52;
    player1Score = 0;
    player2Score = 0;
    player1Mass = 55;
    player2Mass = 55;
    document.onkeyup = function move(e) {
        if (e.keyCode == 38) {
            topPosP1--;
            player1.style.top = topPosP1 + '%';
            setStatistic()
            checkWinner()
        }
        if (e.keyCode == 39) {
            leftPosP1++;
            player1.style.left = leftPosP1 + '%';
            setStatistic()
            checkWinner()
        }
        if (e.keyCode == 37) {
            leftPosP1--;
            player1.style.left = leftPosP1 + '%';
            setStatistic()
            checkWinner()
        }
        if (e.keyCode == 40) {
            topPosP1++;
            player1.style.top = topPosP1 + '%';
            setStatistic()
            checkWinner()
        }
        if (e.keyCode == 87) {
            topPosP2--;
            player2.style.top = topPosP2 + '%';
            setStatistic()
            checkWinner()
        }
        if (e.keyCode == 68) {
            leftPosP2++;
            player2.style.left = leftPosP2 + '%';
            setStatistic()
            checkWinner()
        }
        if (e.keyCode == 65) {
            leftPosP2--;
            player2.style.left = leftPosP2 + '%';
            setStatistic()
            checkWinner()
        }
        if (e.keyCode == 83) {
            topPosP2++;
            player2.style.top = topPosP2 + '%';
            setStatistic()
            checkWinner()
        }
        movethryWall(e)
    }

    function movethryWall(e) {
        if (topPosP1 > 92) {
            topPosP1 = 1;
        }
        if (leftPosP1 > 97) {
            leftPosP1 = 1;
        }
        if (leftPosP1 <= 0) {
            leftPosP1 = 97;
        }
        if (topPosP1 < 1) {
            topPosP1 = 92;
        }
        if (topPosP2 > 92) {
            topPosP2 = 1;
        }
        if (leftPosP2 > 97) {
            leftPosP2 = 1;
        }
        if (leftPosP2 <= 0) {
            leftPosP2 = 97;
        }
        if (topPosP2 < 1) {
            topPosP2 = 92;
        }
    }
    if (gammode == 1) {
        document.getElementById('player2Score').innerText = `${player2Nick}: ${player1Score}`;
        document.getElementById('player1Score').innerText = `${player1Nick}: ${player2Score}`;
        document.getElementById('timeBoard').style.display = "none";
        player2.style.left = leftPosP2 + '%';
        player2.style.top = topPosP2 + '%';
        player1.style.left = leftPosP1 + '%';
        player1.style.top = topPosP1 + '%';
        function setStatistic() {
            function removeTargetClass() {
                document.getElementById('target').classList.remove('comonTarget');
                document.getElementById('target').classList.remove('uncomonTarget');
                document.getElementById('target').classList.remove('epicTarget');
                document.getElementById('target').classList.remove('legendaryTarget');
            }
            if (topPosP1 == randomPosTop && leftPosP1 == randomPosLeft) {
                document.getElementById('target').style.display = 'none';
                document.getElementById('target').style.top = '-10%';
                document.getElementById('target').style.left = '-10%';
                setTimeout(setTargetPos, 3000);
                if (document.getElementById('target').classList.contains('comonTarget')) {
                    player1Score++;
                    player1Mass++;
                    removeTargetClass();
                } else if (document.getElementById('target').classList.contains('uncomonTarget')) {
                    player1Score = player1Score + 2;
                    player1Mass = player1Mass + 2;
                    removeTargetClass();
                } else if (document.getElementById('target').classList.contains('epicTarget')) {
                    player1Score = player1Score + 5;
                    player1Mass = player1Mass + 5;
                    removeTargetClass();
                } else if (document.getElementById('target').classList.contains('legendaryTarget')) {
                    player1Score = player1Score + 10;
                    player1Mass = player1Mass + 10;
                    removeTargetClass();
                }
                console.log('Green' + player1Score);
                player1Skin.style.width = `${player1Mass}px`;
                player1Skin.style.height = `${player1Mass}px`;
            } else if (topPosP2 == randomPosTop && leftPosP2 == randomPosLeft) {
                document.getElementById('target').style.display = 'none';
                document.getElementById('target').style.top = '-10%';
                document.getElementById('target').style.left = '-10%';
                setTimeout(setTargetPos, 3000);
                if (document.getElementById('target').classList.contains('comonTarget')) {
                    player2Score++;
                    player2Mass++;
                    document.getElementById('target').classList.remove('comonTarget');
                } else if (document.getElementById('target').classList.contains('uncomonTarget')) {
                    player2Score = player2Score + 2;
                    player2Mass = player2Mass + 2;
                    document.getElementById('target').classList.remove('uncomonTarget');
                } else if (document.getElementById('target').classList.contains('epicTarget')) {
                    player2Score = player2Score + 5;
                    player2Mass = player2Mass + 5;
                    document.getElementById('target').classList.remove('epicTarget');
                } else if (document.getElementById('target').classList.contains('legendaryTarget')) {
                    player2Score = player2Score + 10;
                    player2Mass = player2Mass + 10;
                    document.getElementById('target').classList.remove('legendaryTarget');
                }
                player2Skin.style.width = `${player2Mass}px`;
                player2Skin.style.height = `${player2Mass}px`;
            }
            if (player1Mass > player2Mass) {
                player1.style.zIndex = '10';
                player2.style.zIndex = '9';
            } else {
                player1.style.zIndex = '9';
                player2.style.zIndex = '10';
            }

            function scoreBoard() {
                if (player1Score > player2Score) {
                    document.getElementById('player1Score').innerText = `${player1Nick}: ${player1Score}`;
                    document.getElementById('player2Score').innerText = `${player2Nick}: ${player2Score}`;
                    if (player1Nick == null && player1Nick == undefined || player2Nick == null && player2Nick == undefined) {
                        document.getElementById('player1Score').innerText = `player1: ${player1Score}`;
                        document.getElementById('player2Score').innerText = `player2: ${player2Score}`;
                    }
                } else if (player1Score < player2Score) {
                    document.getElementById('player2Score').innerText = `${player2Nick}: ${player1Score}`;
                    document.getElementById('player1Score').innerText = `${player1Nick}: ${player2Score}`;
                    if (player1Nick == null && player1Nick == undefined || player2Nick == null && player2Nick == undefined) {
                        document.getElementById('player1Score').innerText = `player1: ${player1Score}`;
                        document.getElementById('player2Score').innerText = `player2: ${player2Score}`;
                    }
                }
            }
            scoreBoard();
        }

        function checkWinner() {
            if (topPosP1 == topPosP2 && leftPosP1 == leftPosP2 && player1Mass > player2Mass) {
                player2.style.display = 'none';
                document.getElementById('winScreen').style.display = "flex";
                document.getElementById('Winner').innerText = `${player1Nick} win!`;
            } else if (topPosP1 == topPosP2 && leftPosP1 == leftPosP2 && player1Mass < player2Mass) {
                player1.style.display = 'none';
                document.getElementById('winScreen').style.display = "flex";
                document.getElementById('Winner').innerText = `${player2Nick} win!`;
            } else {
                return;
            }
        }
    }
    if (gammode == 2) {
        document.getElementById('player2Score').innerText = `${player2Nick}: ${player1Score}`;
        document.getElementById('player1Score').innerText = `${player1Nick}: ${player2Score}`;
        document.getElementById('timeBoard').style.display = "flex";
        player2.style.left = leftPosP2 + '%';
        player2.style.top = topPosP2 + '%';
        player1.style.left = leftPosP1 + '%';
        player1.style.top = topPosP1 + '%';
        let miliseconds = 99;
        let seconds = 59;
        const timeBoard = document.getElementById('timeBoard');
        timeBoard.style.display = "flex";

        function timer() {
            miliseconds--
            if (miliseconds > 10) {
                timeBoard.innerText = `${seconds}:${miliseconds}`;
            } else if (miliseconds < 10) {
                timeBoard.innerText = `${seconds}:0${miliseconds}`;
            }
            if (seconds > 10) {
                timeBoard.innerText = `${seconds}:${miliseconds}`;
            } else if (seconds < 10) {
                timeBoard.innerText = `0${seconds}:${miliseconds}`;
            }
            if (miliseconds <= 0) {
                seconds--;
                miliseconds = 99;
            }
            console.log(`${seconds}  ${miliseconds}`)
            if (seconds <= 0) {
                timeBoard.innerText = '00:00';
                clearInterval(timerInterval);
                document.getElementById('winScreen').style.display = "flex";
                if (player1Score < player2Score) {
                    document.getElementById('Winner').innerText = `${player2Nick} win!`;
                } else if (player1Score > player2Score) {
                    document.getElementById('Winner').innerText = `${player1Nick} win!`;
                } else {
                    document.getElementById('Winner').innerText = "draw";
                }
            }
        }
        let timerInterval = setInterval(timer, 10);

        function setStatistic() {
            function removeTargetClass() {
                document.getElementById('target').classList.remove('comonTarget');
                document.getElementById('target').classList.remove('uncomonTarget');
                document.getElementById('target').classList.remove('epicTarget');
                document.getElementById('target').classList.remove('legendaryTarget');
            }
            if (topPosP1 == randomPosTop && leftPosP1 == randomPosLeft) {
                document.getElementById('target').style.display = 'none';
                document.getElementById('target').style.top = '-10%';
                document.getElementById('target').style.left = '-10%';
                setTimeout(setTargetPos, 3000);
                if (document.getElementById('target').classList.contains('comonTarget')) {
                    player1Score++;
                    removeTargetClass();
                } else if (document.getElementById('target').classList.contains('uncomonTarget')) {
                    player1Score = player1Score + 2;
                    removeTargetClass();
                } else if (document.getElementById('target').classList.contains('epicTarget')) {
                    player1Score = player1Score + 5;
                    removeTargetClass();
                } else if (document.getElementById('target').classList.contains('legendaryTarget')) {
                    player1Score = player1Score + 10;
                    removeTargetClass();
                }
            } else if (topPosP2 == randomPosTop && leftPosP2 == randomPosLeft) {
                document.getElementById('target').style.display = 'none';
                document.getElementById('target').style.top = '-10%';
                document.getElementById('target').style.left = '-10%';
                setTimeout(setTargetPos, 3000);
                if (document.getElementById('target').classList.contains('comonTarget')) {
                    player2Score++;
                    document.getElementById('target').classList.remove('comonTarget');
                } else if (document.getElementById('target').classList.contains('uncomonTarget')) {
                    player2Score = player2Score + 2;
                    document.getElementById('target').classList.remove('uncomonTarget');
                } else if (document.getElementById('target').classList.contains('epicTarget')) {
                    player2Score = player2Score + 5;
                    document.getElementById('target').classList.remove('epicTarget');
                } else if (document.getElementById('target').classList.contains('legendaryTarget')) {
                    player2Score = player2Score + 10;
                    document.getElementById('target').classList.remove('legendaryTarget');
                }
            }

            function scoreBoard() {
                if (player1Score > player2Score) {
                    document.getElementById('player1Score').innerText = `${player1Nick}: ${player1Score}`;
                    document.getElementById('player2Score').innerText = `${player2Nick}: ${player2Score}`;
                    if (player1Nick == null && player1Nick == undefined || player2Nick == null && player2Nick == undefined) {
                        document.getElementById('player1Score').innerText = `player1: ${player1Score}`;
                        document.getElementById('player2Score').innerText = `player2: ${player2Score}`;
                    }
                } else if (player1Score < player2Score) {
                    document.getElementById('player2Score').innerText = `${player2Nick}: ${player1Score}`;
                    document.getElementById('player1Score').innerText = `${player1Nick}: ${player2Score}`;
                    if (player1Nick == null && player1Nick == undefined || player2Nick == null && player2Nick == undefined) {
                        document.getElementById('player1Score').innerText = `player1: ${player1Score}`;
                        document.getElementById('player2Score').innerText = `player2: ${player2Score}`;
                    }
                }
            }
            scoreBoard();
        }

        function checkWinner() {
            if (topPosP1 == topPosP2 && leftPosP1 == leftPosP2 && player1Mass > player2Mass) {
                player2.style.display = 'none';
                alert('palyer 1 Win!');
            } else if (topPosP1 == topPosP2 && leftPosP1 == leftPosP2 && player1Mass < player2Mass) {
                player1.style.display = 'none';
                alert('palyer 2 Win!');
            } else {
                return;
            }
        }
    }
    function setTargetPos() {
        let randomTarget = Math.floor(Math.random() * 100);

        function setPos() {
            randomPosLeft = Math.floor(Math.random() * (95 - 5) + 5);
            randomPosTop = Math.floor(Math.random() * (95 - 5) + 5);
            document.getElementById('target').style.top = randomPosTop + '%';
            document.getElementById('target').style.left = randomPosLeft + '%';
            document.getElementById('target').style.display = 'flex';
        }
        if (randomTarget <= 65) {
            setPos();
            document.getElementById('target').classList.add('comonTarget');
        } else if (randomTarget <= 85 && randomTarget > 65) {
            setPos();
            document.getElementById('target').classList.add('uncomonTarget');
        } else if (randomTarget <= 95 && randomTarget > 85) {
            setPos();
            document.getElementById('target').classList.add('epicTarget');
        } else if (randomTarget <= 100 && randomTarget > 95) {
            setPos();
            document.getElementById('target').classList.add('legendaryTarget');
        }
    }
    setTargetPos();
}
document.getElementById('player1Input').oninput = function () {
    player1Nick = document.getElementById('player1Input').value;
    document.querySelector('.player1Skin').innerText = document.getElementById('player1Input').value;
    document.getElementById('player1Score').innerText = `${player1Nick}: ${player1Score}`;
}
document.getElementById('player2Input').oninput = function () {
    player2Nick = document.getElementById('player2Input').value;
    document.querySelector('.player2Skin').innerText = document.getElementById('player2Input').value;
    document.getElementById('player2Score').innerText = `${player2Nick}: ${player2Score}`;
}
sliderLeftButton.onclick = function () {
    sliderLine.style.right = '0';
}
sliderRightButton.onclick = function () {
    sliderLine.style.right = '300px';
}
document.getElementById("startMenu__player1Skin").onclick = function () {
    document.getElementById("changeSkinPage").style.display = 'flex';
    sliderLine.onclick = function (e) {
        if (!e.target.classList.contains('sliderIteam')) return;
        document.getElementById("earth").style.border = "none";
        document.getElementById("orange").style.border = "none";
        document.getElementById("bowlingBall").style.border = "none";
        document.getElementById("google").style.border = "none";
        e.target.style.border = '3px solid #fff';
        if (e.target == document.getElementById("earth")) {
            player1Skin.style.backgroundImage = "url('./img/planet-earth.png')";
            document.getElementById("startMenu__player1Skin").style.backgroundImage = "url('./img/planet-earth.png')";
        } else if (e.target == document.getElementById("orange")) {
            player1Skin.style.backgroundImage = "url('./img/orange.png')";
            document.getElementById("startMenu__player1Skin").style.backgroundImage = "url('./img/orange.png')";
        } else if (e.target == document.getElementById("bowlingBall")) {
            player1Skin.style.backgroundImage = "url('./img/bowling.png')";
            document.getElementById("startMenu__player1Skin").style.backgroundImage = "url('./img/bowling.png')";
        } else if (e.target == document.getElementById("google")) {
            player1Skin.style.backgroundImage = "url('./img/chrome.png')";
            document.getElementById("startMenu__player1Skin").style.backgroundImage = "url('./img/chrome.png')";
        }
    }
    document.getElementById("yourColor").oninput = function () {
        document.getElementById("yourColor__box").style.backgroundColor = yourColor.value;
        document.getElementById("startMenu__player1Skin").style.backgroundImage = "none";
        player1Skin.style.backgroundImage = "none";
        player1Skin.style.backgroundColor = yourColor.value;
        document.getElementById("startMenu__player1Skin").style.backgroundColor = yourColor.value;
    }
}
document.getElementById("startMenu__player2Skin").onclick = function () {
    document.getElementById("changeSkinPage").style.display = 'flex';
    sliderLine.onclick = function (e) {
        if (!e.target.classList.contains('sliderIteam')) return;
        document.getElementById("earth").style.border = "none";
        document.getElementById("orange").style.border = "none";
        document.getElementById("bowlingBall").style.border = "none";
        document.getElementById("google").style.border = "none";
        e.target.style.border = '3px solid #fff';
        if (e.target == document.getElementById("earth")) {
            player2Skin.style.backgroundImage = "url('./img/planet-earth.png')";
            document.getElementById("startMenu__player2Skin").style.backgroundImage = "url('./img/planet-earth.png')";
        } else if (e.target == document.getElementById("orange")) {
            player2Skin.style.backgroundImage = "url('./img/orange.png')";
            document.getElementById("startMenu__player2Skin").style.backgroundImage = "url('./img/orange.png')";
        } else if (e.target == document.getElementById("bowlingBall")) {
            player2Skin.style.backgroundImage = "url('./img/bowling.png')";
            document.getElementById("startMenu__player2Skin").style.backgroundImage = "url('./img/bowling.png')";
        } else if (e.target == document.getElementById("google")) {
            player2Skin.style.backgroundImage = "url('./img/chrome.png')";
            document.getElementById("startMenu__player2Skin").style.backgroundImage = "url('./img/chrome.png')";
        }
    }
    document.getElementById("yourColor").oninput = function () {
        document.getElementById("yourColor__box").style.backgroundColor = yourColor.value;
        document.getElementById("startMenu__player2Skin").style.backgroundImage = "none";
        player2Skin.style.backgroundImage = "none";
        player2Skin.style.backgroundColor = yourColor.value;
        document.getElementById("startMenu__player2Skin").style.backgroundColor = yourColor.value;
    }
}

function coloseAllPages() {
    document.getElementById("changeSkinPage").style.display = 'none';
    document.getElementById("startMenu").style.display = 'none';
    document.getElementById("winScreen").style.display = "none";
    document.getElementById("changeSkinPage").style.display = 'none';
}
document.getElementById("saveSkinChanges").onclick = function () {
    document.getElementById("changeSkinPage").style.display = 'none';
}
document.getElementById("restartBtn").onclick = function () {
    document.getElementById("startMenu").style.display = "flex";
    document.getElementById("winScreen").style.display = "none";
}