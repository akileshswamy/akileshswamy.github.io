// While Loop count from 0 to 10
// let number = 0
// while (number <= 10) {
// console.log(number);
// number = number + 1
//}



//Intro. Questions
alert("Welcome to your Disneyland Tour! You'll need to choose a tour guide soon! Choose wisely! ");
//Which Tour Guide do you want?
let tourGuide = prompt("Welcome to your Disneyland Adventure! Choose your tour guide! LeMickey or ADisney? (Case Sensitive)");
if (tourGuide === "ADisney") {
    alert("Your tour guide, ADisney, really enjoyed having you on this tour! He gives you a signed jersey and a honorary unibrow sticker!")
} else if (tourGuide === "LeMickey") {
    let tacoLike = prompt("The first question your tour guide, LeMickey, asks you is if you like tacos? (Yes or No)")
    if (tacoLike === "Yes") {
        alert("Lemickey gives you tacos for the rest of your life on Tuesdays!");
    } else {
        alert("LeMickey is highly dissapointed in you and will decide your punishment based on his mood!");
        //RNG
        let mood = Math.floor(Math.random() * 10);
        if (mood < 5) {
            alert("LeMickey is in a good mood so he has you walk the plank!")
        } else {
            alert("LeMickey is in a bad mood so he has you watch his sprite cranberry commercial for the rest of eternity!")
        }
    }
} else {
    alert("Sorry that tour guide is not available!")
}