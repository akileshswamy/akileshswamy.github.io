//TikTok's Magic Algorithm
function algorithm(likes, comment, views, shares) {
    let rank = 0;

    //magic!
    if (likes >= 10000 && comment.includes("basketball") && views >= 100000 && shares >= 100) {
        rank = 1;
    } else if (likes >= 500 && comment.includes("football") && views >= 5000 && shares >= 5) {
        rank = 100;
    } else {
        rank = 1000
    }
    return rank;
}

function popup() {
    alert("Welcome to TikTok! Imagine I'm showing you a tiktok video right now");
    let likeCount = Number(prompt("How many likes did this Tiktok video get?"));
    let topComment = prompt("What is the top comment on this TikTok video?");
    let numViews = Number(prompt("How many views did this Tiktok videeo get?"))
    let numShares = Number(prompt("How many shares did this Tiktok video get?"))
        //using the two inputs above, pass that into the magic function and return the result
    let rankResult = algorithm(likeCount, topComment, numViews, numShares);
    let resultString = "The video's rank: " + rankResult;

    alert(resultString);
}



function showUI() {
    //grab values from text boxes
    let likeCount = Number(document.getElementById("like-textbox").value);
    let topComment = document.getElementById("comment-textbox").value;
    let numViews = Number(document.getElementById("views-textbox").value);
    let numShares = Number(document.getElementById("shares-textbox").value);

    //do the algorithm
    let rankResult = algorithm(likeCount, topComment, numViews, numShares);

    //display the output
    document.getElementById("result-paragraph").innerHTML = "TikTok Rank: " + rankResult;

}