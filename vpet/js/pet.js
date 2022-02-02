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

    let petIMG = document.getElementById("pet-img");
    let petParagraph = document.getElementById("pet-condition");

    let sum = ad + king + russ

    if (sum === 30) {
        alert("Game Over! Lebron has reached peak happiness!")
    } else if (sum < 30 && sum >= 24) {
        petIMG.src = "images/LebronHyped.jpg"
        petParagraph.innerHTML = "LeBron is Hyped"
    } else if (sum < 24 && sum >= 18) {
        petIMG.src = "images/LebronHappy.jpg"
        petParagraph.innerHTML = "LeBron is Happy"
    } else if (sum < 18 && sum >= 12) {
        petIMG.src = "images/LebronSatisfied.jpg"
        petParagraph.innerHTML = "LeBron is Satisfied"
    } else if (sum < 12 && sum >= 6) {
        petIMG.src = "images/LebronDissapointed.jpg"
        petParagraph.innerHTML = "LeBron is Dissapointed"
    } else if (sum < 6 && sum >= 1) {
        petIMG.src("images/LebronAngry.jpg")
        petParagraph.innerHTML = "LeBron is Angry"
    } else {
        alert("Game Over! LeBron hates you because you failed his team!")
    }
}


/*
function decreaseRuss() {
    if (russ > 0) {
        russ = russ - 1
    }
    refreshUI();
}

function decreaseKing() {
    if (king > 0) {
        king = king - 1
    }
    refreshUI();
}

function decreaseAd() {
    if (ad > 0) {
        ad = ad - 1
    }
    refreshUI();
}
*/
function decreaseValue() {
    if (king > 0) {
        king = king - 1
    }
    if (ad > 0) {
        ad = ad - 1
    }
    if (russ > 0) {
        russ = russ - 1
    }
    refreshUI;
}
/*
setInterval(decreaseRuss, 950)
setInterval(decreaseKing, 950)
setInterval(decreaseAd, 950)
*/
setInterval(decreaseValue, 950)