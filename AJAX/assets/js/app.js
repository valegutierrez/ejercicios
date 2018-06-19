const btn = document.querySelector('button');
const cont = document.getElementById('root');
const userJson = 'data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(userJson)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderUsers(data);
    })

    const renderUsers = data => {
        btn.addEventListener('click', () => {
            const render = data.forEach(element => {
                return cont.innerHTML += `<p>${element.name}</p>`
            });
            return render;
        })
    }