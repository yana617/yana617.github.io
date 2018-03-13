function deleteEvent(childId){
    if (confirm("Вы уверены?")) {
        removePhotoPost(childId.parentNode.parentNode.id);
        return true;
    }
    return false;
}