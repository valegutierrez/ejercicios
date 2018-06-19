const inputText = document.querySelector('input');
const containerTitle = document.getElementById('title');
const containerYear = document.getElementById('year');
const containerRunTime = document.getElementById('runtime');
const containerImage = document.getElementById('img');

inputText.addEventListener('keypress', (event) => {
    let key = event.which || event.keyCode;
    if (key==13) {
        let movie = inputText.value;
        console.log(movie);
        inputText.value = '';

        fetch(`http://www.omdbapi.com/?t=${movie}&apikey=2ba85559`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderInfo(data);
        })
    }
})

const renderInfo = data => {
    containerTitle.innerHTML = data.Title;
    containerYear.innerHTML = data.Year;
    containerRunTime.innerHTML = data.Runtime;
    containerImage.innerHTML = `<img src="${data.Poster}">`;
}