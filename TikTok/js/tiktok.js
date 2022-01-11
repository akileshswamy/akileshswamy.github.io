//TikTok's Magic Algorithm
function algorithm(likes, comment) {
    let rank = 0;

    //magic!
    if (likes >= 10000 && comment.includes("basketball")) {
        rank = 1;
    } else if (likes >= 500 && comment.includes("football")) {
        rank = 100;
    } else {
        rank = 1000
    }
    return rank;
}

alert("Welcome to TikTok! Imagine I'm showing you a tiktok video right now");
let likeCount = Number(prompt("How many likes did this Tiktok video get?"));
// ask for a video comment
let topComment = prompt("What is the top comment on this TikTok video?");

//using the two inputs above, pass that into the magic function and return the result
let rankResult = magicAlgorithm(likeCount, topComment);
let resultString = "The video's rank: " + rankResult;

alert(resultString);