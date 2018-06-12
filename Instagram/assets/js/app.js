const commentButton = document.getElementById('btn');

commentButton.addEventListener('click', () =>{
    let comments = document.getElementById('comment').value;
    document.getElementById('comment').value = '';
    const cont = document.getElementById('cont');
    const newComments = document.createElement('div');
    const chckBox = document.createElement('input');
    chckBox.type = 'checkbox';
    const heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart','heart');
    const trash = document.createElement('i');
    trash.classList.add('fa', 'fa-trash', 'trash');
    const commentP = document.createElement('p');
    let newCommentText = document.createTextNode(comments);
    commentP.appendChild(newCommentText);
    newComments.appendChild(chckBox);
    newComments.appendChild(heart);
    newComments.appendChild(trash);
    newComments.appendChild(commentP);
    cont.appendChild(newComments);
    heart.addEventListener('click', () =>{
        heart.classList.toggle('red');
    })
    trash.addEventListener('click', () =>{
        cont.removeChild(newComments);
    })
    chckBox.addEventListener('click', () => {
        commentP.classList.toggle('strike-out');
    })
})