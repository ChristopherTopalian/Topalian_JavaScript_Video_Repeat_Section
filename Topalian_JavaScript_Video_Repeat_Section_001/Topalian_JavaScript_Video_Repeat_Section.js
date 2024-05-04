javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* Topalian_JavaScript_Video_Repeat_Section.js */
/* Version 001 - (2024-05-04) */
function()
{
    let durationOfRepeat = prompt('How many seconds to repeat?');

    let time;

    function getCurrentTimeOfVideo()
    {
        let video = document.querySelector("video");

        time = video.currentTime;

        console.log(time);

        return time;
    }

    getCurrentTimeOfVideo();

    document.querySelector("video").play();

    let timer001 = setInterval(function()
    {
        let video = document.querySelector("video");

        video.currentTime = time;

        video.play();

    }, durationOfRepeat * 1000);

}());

