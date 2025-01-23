const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');
const movieList = ['videos/hero-1.mp4','videos/hero-2.mp4','videos/hero-3.mp4','videos/hero-4.mp4']

let videoIndex = 0;

nextButton.addEventListener('click', () => {
    videoIndex += 1;
    video.src = movieList[videoIndex];
     if(videoIndex===3){
        videoIndex = -1;
    }

})
