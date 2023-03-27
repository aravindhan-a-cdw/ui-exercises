
import { processData } from "./services.js";
import { populatePosters } from "./poster.js";
import { populateVideoAndComments } from "./video.js";


$(document).ready(function () {
    // Process Posters
    const postersUrl = "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346";
    processData(postersUrl, populatePosters);

    // Process video and comments
    const videoUrl = "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0";
    processData(videoUrl, populateVideoAndComments);

    // Add event listener for play button
    $('.play-btn').parent().click(function () {
        console.log("Clicked");
        const videoElement = $("#video").get(0);
        const playBtnElement = $('.play-btn');
        if(videoElement.paused){        
            videoElement.play();   
            playBtnElement.fadeOut();
        }else{       
            videoElement.pause();
            playBtnElement.fadeIn();
        }
      });
});

