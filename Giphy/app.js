const inputText = document.querySelector('input');
const containerImage = document.getElementById('gifs-holder');

inputText.addEventListener('keypress', (event) => {
    let key = event.which || event.keyCode;
    if (key==13) {
        let gifToSearch = inputText.value;
        console.log(gifToSearch);
        inputText.value = '';

        fetch(`http://api.giphy.com/v1/gifs/search?q=${gifToSearch}&apikey=9h1TgAlv2NS1M4FTRhARLDJjCFn4aNAP`)
        .then(response => response.json())
        .then(results => {
            for (i = 0; i < results.data.length; i++) {
                let urlGif = results.data[i].images.downsized_large.url;
                let eachGif = document.createElement('img');
                eachGif.src = urlGif;
                containerImage.appendChild(eachGif);
            }
            console.log(results);
        })
    }
})

