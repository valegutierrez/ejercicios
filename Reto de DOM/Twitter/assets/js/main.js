const tweetButton = document.getElementById('btn');
const numberLimit = 140;

tweetButton.addEventListener('click', ()=> {
    let tweets = document.getElementById('tweetBox').value;
    document.getElementById('tweetBox').value = '';
    const dashboard = document.getElementById('tweetsDashboard');
    const newTweet = document.createElement('div');
    const tweetP = document.createElement('p');
    let newTweetText = document.createTextNode(tweets);
    tweetP.appendChild(newTweetText);
    newTweet.appendChild(tweetP);
    dashboard.appendChild(newTweet);
})

tweetBox.addEventListener('keydown', ()=>{
    if (parseInt(tweets) >= numberLimit){
        document.getElementById('btn').disabled = true;
    }
    else{
        document.getElementById('btn').disabled = false;
    }
})
