import { createElement } from "./helpers.js";

export const populateVideoAndComments = (videoData) => {

    const commentsFragment = document.createDocumentFragment();
    $("#video").attr('src', videoData.videoUrl);

    for (const commentObj of videoData.comments) {
        // Comment Container Div
        const commentContainer = createElement('div', {class: 'comment-container flex'})
        // User Image Div
        const userImageContainer = createElement('div', {class: 'user-image'});
        // User Image
        const userImage = createElement('img', {src: commentObj.image, alt: `Image of ${commentObj.name}`});

        // User Image Div Ready with image
        userImageContainer.appendChild(userImage);

        // User Comment div
        const userComment = createElement('div', {class: 'comment flex'})
        // Username h4 element
        const userName = createElement('h4');
        userName.append(commentObj.name);

        // User comment p element
        const userCommentText = createElement('p');
        userCommentText.append(commentObj.comment);

        // User comment div ready with username and comment
        userComment.appendChild(userName);
        userComment.appendChild(userCommentText);

        commentContainer.appendChild(userImageContainer);
        commentContainer.appendChild(userComment);

        commentsFragment.append(commentContainer);
    }

    const commentsContainer = $("#comments").empty(); // Get comments container and clear its content
    commentsContainer.append(commentsFragment);

}