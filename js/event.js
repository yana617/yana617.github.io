let deleteId;
function deleteEvent(childId) {
    deleteId = childId.parentNode.parentNode.id;
    setQuestionPage();
    event.preventDefault();
}
function deleteOk() {
    removePhotoPost(deleteId);
    document.body.querySelector('.question').remove();
}
function deleteCancel() {
    document.querySelector('.question').remove();
}
function agreeOk() {
    document.querySelector('.agreement').remove();
}
function logOut() {
    domModul.changeUser(null);
    localStorage.setItem('user', 'undefined');
}
function reloadMain() {
    document.querySelector('.content').innerHTML = '';
    domModul.setFilter();
    getPhotoPosts();
}
function loadMore(link) {
    const count = document.getElementsByClassName('post').length;
    getPhotoPosts(count, 8);
    if (count + 8 >= photoPosts.length) link.style.display = 'none';
}
function signIn() {
    const textName = document.getElementById('input_name').value;
    setMainPage();
    domModul.changeUser(textName);
    localStorage.setItem('user', textName);
}
function getFile() {
    document.getElementById("img-upload").click();
}
function updateImageDisplay() {
    const curFiles = document.getElementById("img-upload").files;
    if (curFiles.length !== 0) {
        document.querySelector('.addphoto-image-size').src = document.getElementById('img-upload').files[0].name;
    }
}
function addPhoto() {
    const id = JSON.parse(window.localStorage.id).toString();
    window.localStorage.setItem('id', (parseInt(id) + 1));
    const author = domModul.getUser();
    const likes = [];
    let photoLink;
    if (document.getElementById('img-upload').files.length === 0) photoLink = "";
    else photoLink = document.getElementById('img-upload').files[0].name;
    let description = document.getElementById('text-form').value;
    let hashtags = description.match(/#[^\s#]*/g);
    description = description.replace(/\n/g, '<br>');
    if (hashtags === null) hashtags = [];
    const createdAt = new Date();
    const post = { id, description, createdAt, author, photoLink, likes, hashtags };
    if (addPhotoPost(post)) {
        setMainPageFromAddEdit();
        document.querySelector('.sign').setAttribute('onclick', 'logOut();');
    }
    else {
        setAgreementPage();
    }
}
function editPhoto() {
    let photoLink;
    if (document.getElementById('img-upload').value !== '') {
        photoLink = document.getElementById('img-upload').files[0].name;
    }
    let description = document.getElementById('text-form').value;
    let hashtags = description.match(/#[^\s#]*/g);
    description = description.replace(/\n/g, '<br>');
    if (hashtags === null) hashtags = [];
    let post;
    if (photoLink) post = { description, hashtags, photoLink };
    else post = { description, hashtags };
    const id = document.querySelector('.add-main-container').getAttribute('id');
    if (!editPhotoPost(id, post)) {
        setAgreementPage();
    }
}
function rewatch(textAreaLink) {
    const textArea = textAreaLink;
    const maxRows = textArea.getAttribute('rows');
    if (event.keyCode == 13) {
        const lines = textArea.value.split('\n');
        if (lines.length > maxRows) { return false; }
        else { return true; }
    }
}
function likeIt(childId) {
    event.preventDefault();
    const id = childId.parentNode.parentNode.parentNode.id;
    let photoPosts = JSON.parse(window.localStorage.posts, function (key, value) {
        if (key == 'createdAt') return new Date(value);
        return value;
    });
    const index = photoPosts.findIndex(elem => elem.id === id);
    if (domModul.getUser() === null) {
        setAgreementPageinMain();
        //alert('Войдите в систему.')
    }
    else {
        if (photoPosts[index].likes.findIndex(item => item === domModul.getUser()) === -1) {
            photoPosts[index].likes.push(domModul.getUser());
            document.getElementById(id).querySelector('.heart-div').innerHTML = '<i class="fa fa-heart fa-2x heart" aria-hidden="true"></i>';
            document.getElementById(id).querySelector('.count-of-likes').textContent = photoPosts[index].likes.length;
        }
        else {
            let index2 = photoPosts[index].likes.findIndex(elem => elem === domModul.getUser());
            photoPosts[index].likes.splice(index2, 1);
            document.getElementById(id).querySelector('.heart-div').innerHTML = '<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>';
            document.getElementById(id).querySelector('.count-of-likes').textContent = photoPosts[index].likes.length;
        }
    }
    window.localStorage.setItem('posts', JSON.stringify(photoPosts));
}
function logOutFromAddEdit() {
    setMainPage();
    domModul.changeUser(null);
    localStorage.setItem('user', 'undefined');
}
function setFilterConfig() {
    let filter = {};
    const authors = document.querySelector('.input1').value.trim().replace(/\s+/g, " ").split(' ');
    const hashtags = document.querySelector('.input2').value.trim().replace(/\s+/g, " ").split(' ');
    const date = document.querySelector('.input3').value;
    if (!authors.includes('')) {
        filter.authors = authors;
    }
    if (!hashtags.includes('')) {
        filter.hashtags = hashtags;
    }
    if (date) {
        filter.createdAt = new Date(date);
    }
    if (JSON.stringify(filter) == "{}") {
        filter = undefined;
        document.querySelector('.load-more-button').style.display = 'block';
    }
    domModul.setFilter(filter);
    document.querySelector('.content').innerHTML = '';
    getPhotoPosts(0, 8, filter);
}