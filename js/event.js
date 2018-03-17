function deleteEvent(childId) {
    if (confirm("Вы уверены?")) {
        event.preventDefault();
        removePhotoPost(childId.parentNode.parentNode.id);
        return true;
    }
    return false;
}
function logOut() {
    domModul.changeUser(null);
}
function loadMore(link) {
    let count = document.getElementsByClassName('post').length;
    if (count + 8 > photoPosts.length) link.style.display = 'none';
    getPhotoPosts(count, 8);
}




















/*document.body.innerHTML = '';
    let mainDiv = document.createElement('div');
    mainDiv.className = 'mainDiv';

    let img = document.createElement('img');
    img.className = 'logInImage';
    img.setAttribute('src', 'img/logIn.jpg');

    let inputBlock = document.createElement('div');
    inputBlock.className = 'input-block';

    let inputName = document.createElement('input');
    inputName.className = 'input-name';

    let inputPassword = document.createElement('input');
    inputPassword.className='input-password';

    let forButton = document.createElement('div');
    forButton.className='for-button';

    let submit = document.createElement('a');
    submit.textContent='BUTTON';
    submit.setAttribute('href', '');

    mainDiv.appendChild(img);
    mainDiv.appendChild(inputBlock);
    inputBlock.appendChild(inputName);
    inputBlock.appendChild(inputPassword);
    inputBlock.appendChild(forButton);
    forButton.appendChild(submit);
    document.body.appendChild(mainDiv);*/