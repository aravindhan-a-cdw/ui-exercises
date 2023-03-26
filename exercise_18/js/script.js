
const processData = (url, callback) => {
    $.ajax({
        type: 'get',
        url: url,
        success: (response) => {
            console.log(url, response);
            callback(response);
        },
        error: (error) => {
            console.log(error);
        }
    })
}

const populatePosters = (postersData) => {

    const posterFragment = document.createDocumentFragment();

    for (const poster of postersData) {
        const posterDiv = document.createElement('div');
        posterDiv.setAttribute('class', 'poster');

        const posterImg = document.createElement('img')
        posterImg.setAttribute('src', poster.imageUrl);
        posterImg.setAttribute('alt', poster.title);

        posterDiv.appendChild(posterImg);

        posterFragment.appendChild(posterDiv);
    }
    const postersElement = $('#posters').empty(); // Get postersElement and clear the inner content
    postersElement.append(posterFragment);
}

const populateVideoAndComments = (videoData) => {

    const commentsFragment = document.createDocumentFragment();
    $("#video").attr('src', videoData.videoUrl);

    for (const commentObj of videoData.comments) {
        // Comment Container Div
        const commentContainer = document.createElement('div');
        commentContainer.setAttribute('class', 'comment-container flex');

        // User Image Div
        const userImageContainer = document.createElement('div');
        userImageContainer.setAttribute('class', 'user-image');

        // User Image
        const userImage = document.createElement('img');
        userImage.setAttribute('src', commentObj.image);
        userImage.setAttribute('alt', "Image of " + commentObj.name);

        // User Image Div Ready with image
        userImageContainer.appendChild(userImage);

        // User Comment div
        const userComment = document.createElement('div');
        userComment.setAttribute('class', 'comment flex');

        // Username h4 element
        const userName = document.createElement('h4');
        userName.append(commentObj.name);

        // User comment p element
        const userCommentText = document.createElement('p');
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

$(document).ready(function () {
    // Process Posters
    const postersUrl = "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346";
    processData(postersUrl, populatePosters);

    // Process video and comments
    const videoUrl = "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0";
    processData(videoUrl, populateVideoAndComments);
});

