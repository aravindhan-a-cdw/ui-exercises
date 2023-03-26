
// Load Data

const getData = url => fetch(url)
                        .then(data => data.json())
                        .catch(err => {
                            console.log("URL is invalid/ doesn't return a valid json");
                            console.log(err);
                            return null;
                        });

let postersData = await getData('data/posters.json');
let videoData = await getData('data/video.json');


console.log(postersData);
console.log(videoData)


let commentsContainer = document.getElementById("comments");

let commentsFragment = document.createDocumentFragment();

for(let commentObj of videoData.comments){
    // Comment Container Div
    let commentContainer = document.createElement('div');
    commentContainer.setAttribute('class', 'comment-container flex');

    // User Image Div
    let userImageContainer = document.createElement('div');
    userImageContainer.setAttribute('class', 'user-image');

    // User Image
    let userImage = document.createElement('img');
    userImage.setAttribute('src', commentObj.image);
    userImage.setAttribute('alt', "Image of " + commentObj.name);

    // User Image Div Ready with image
    userImageContainer.appendChild(userImage);

    // User Comment div
    let userComment = document.createElement('div');
    userComment.setAttribute('class', 'comment flex');
    
    // Username h4 element
    let userName = document.createElement('h4');
    userName.append(commentObj.name);

    // User comment p element
    let userCommentText = document.createElement('p');
    userCommentText.append(commentObj.comment);

    // User comment div ready with username and comment
    userComment.appendChild(userName);
    userComment.appendChild(userCommentText);

    commentContainer.appendChild(userImageContainer);
    commentContainer.appendChild(userComment);

    commentsFragment.append(commentContainer);
}

commentsContainer.replaceChildren(commentsFragment);

let posters = document.getElementById('posters')
let posterFragment = document.createDocumentFragment();

for(let poster of postersData) {
    let posterDiv = document.createElement('div');
    posterDiv.setAttribute('class', 'poster');

    let posterImg = document.createElement('img')
    posterImg.setAttribute('src', poster.imageUrl);
    posterImg.setAttribute('alt', poster.title);

    posterDiv.appendChild(posterImg);

    posterFragment.appendChild(posterDiv);
}

posters.replaceChildren(posterFragment);





