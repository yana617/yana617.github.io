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
function signIn() {
    let textName = document.getElementById('input_name').value;
    setMainPage();
    domModul.changeUser(textName);
}
function getFile() {
    document.getElementById("img-upload").click();
}
function updateImageDisplay() {
    var curFiles = document.getElementById("img-upload").files;
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
    if(document.getElementById('img-upload').files.length===0) photoLink=""; 
    else photoLink = document.getElementById('img-upload').files[0].name;
    const description = document.getElementById('text-form').value;
    let hashtags = description.match(/#[^\s#]*/g);
    if (hashtags === null) hashtags = [];
    const createdAt = new Date();
    const post = { id, description, createdAt, author, photoLink, likes, hashtags };
    if (addPhotoPost(post)) setMainPageFromAddEdit();
    else{
        alert('Edit entered info');
    }
}
function editPhoto() {
    const photoLink = document.getElementById('img-upload').files[0].name;
    const description = document.getElementById('text-form').value;
    let hashtags = description.match(/#[^\s#]*/g);
    if (hashtags === null) hashtags = [];
    const post = { description, hashtags, photoLink };
    const id = document.querySelector('.add-main-container').getAttribute('id');
    if(!editPhotoPost(id, post)){
        alert('Edit entered info');
    } 
}