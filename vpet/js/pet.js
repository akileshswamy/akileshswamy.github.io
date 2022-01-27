let russ = 5;
let king = 5;
let ad = 5;

function russFunction() {
    if (russ < 10) {
        russ += 1
    }
    refreshUI();
}

function kingFunction() {
    if (king < 10) {
        king += 1
    }
    refreshUI();
}

function adFunction() {
    if (ad < 10) {
        ad += 1
    }
    refreshUI();
}

function refreshUI() {
    let russMeter = document.getElementById("russ-meter");
    russMeter.value = russ;

    let russParagraph = document.getElementById("russ-paragraph")
    russParagraph.innerHTML = russ;

    let kingMeter = document.getElementById("king-meter");
    kingMeter.value = king;

    let kingParagraph = document.getElementById("king-paragraph")
    kingParagraph.innerHTML = king;

    let adMeter = document.getElementById("ad-meter");
    adMeter.value = ad;

    let adParagraph = document.getElementById("ad-paragraph")
    adParagraph.innerHTML = ad;
}



function decreaseRuss() {
    if (russ > -1) {
        russ = russ - 1
    }
    refreshUI();
}

function decreaseKing() {
    if (king > -1) {
        king = king - 1
    }
    refreshUI();
}

function decreaseAd() {
    if (ad > -1) {
        ad = ad - 1
    }
    refreshUI();
}

setInterval(decreaseRuss, 950)
setInterval(decreaseKing, 950)
setInterval(decreaseAd, 950)