
// Load Data

const getData = url => fetch(url)
                        .then(data => data.json())
                        .catch(err => {
                            console.log("URL is invalid/ doesn't return a valid json");
                            console.log(err);
                            return null;
                        });

createElement = (type, attributes = null) => {
    const element = document.createElement(type);

    if (attributes !== null){
        for(const key of Object.keys(attributes)) {
            element.setAttribute(key, attributes[key]);
        }
    }
    return element;
}

let postersData = await getData('data/posters.json');
let videoData = await getData('data/video.json');


console.log(postersData);
console.log(videoData)

// Set Video src
const videoElement = document.getElementById('video');
videoElement.setAttribute('src', videoData.videoUrl);
const playButtonElement = document.getElementsByClassName('play-btn')[0];
const videoWrapperElement = document.getElementsByClassName('video-wrapper')[0];

videoWrapperElement.addEventListener('click', () => {
    console.log(playButtonElement.style.display);
    if(playButtonElement.style.display == 'block' || playButtonElement.style.display == ''){
        playButtonElement.style.display = 'none';
        videoElement.play();
    } else {
        playButtonElement.style.display = 'block';
        videoElement.pause();
    }
})

// Add comments to the DOM
const commentsContainer = document.getElementById("comments");
const commentsFragment = document.createDocumentFragment();

for(const commentObj of videoData.comments){

    // Comment Container Div
    const commentContainer = createElement('div', {class: 'comment-container flex'});

    // User Image Div
    const userImageContainer = createElement('div', {class: 'user-image'});

    // User Image
    const userImage = document.createElement('img', {src: commentObj.image, alt: "Image of " + commentObj.name});

    // User Image Div Ready with image
    userImageContainer.appendChild(userImage);

    // User Comment div
    const userComment = createElement('div', {class: 'comment flex'});
    
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

commentsContainer.replaceChildren(commentsFragment);

// Add posters data to DOM
const posters = document.getElementById('posters')
const posterFragment = document.createDocumentFragment();

for(const poster of postersData) {
    const posterDiv = document.createElement('div');
    posterDiv.setAttribute('class', 'poster');

    const posterImg = document.createElement('img')
    posterImg.setAttribute('src', poster.imageUrl);
    posterImg.setAttribute('alt', poster.title);

    posterDiv.appendChild(posterImg);

    posterFragment.appendChild(posterDiv);
}

posters.replaceChildren(posterFragment);





