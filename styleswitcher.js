// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click",() => {
//     document.querySelector(".style-switcher").classList.toggle("open");
// })
// window.addEventListener("scroll",() => {
//     if(document.querySelector(".style-switcher").classList.contains("open"))
//     {
//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// })
// const alternateStyles = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color){
//     localStorage.setItem("color",color);
//     changeColor();
// }
// function changeColor(){    
//     alternateStyles.forEach((style) => {
//         if(localStorage.getItem("color") === style.getAttribute("title"))
//         {   
//             style.removeAttribute("disabled");
//         }
//         else{
//             style.setAttribute("disabled","true");
//         }
//     }
// )}

// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click", () => {
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//     dayNight.querySelector("i").classList.toggle("fa-moon");
//     document.body.classList.toggle("dark");
// })
// window.addEventListener("load", () => {
//     if(document.body.classList.contains("dark"))
//     {
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else{
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// })

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    localStorage.setItem("color", color);
    changeColor();
}

function changeColor() {
    alternateStyles.forEach((style) => {
        if (localStorage.getItem("color") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    changeTheme();
});

function changeTheme() {
    const currentTheme = localStorage.getItem("theme") || "root";
    let nextTheme;
    switch (currentTheme) {
        case "root":
            nextTheme = "dark";
            break;
        case "dark":
            nextTheme = "animate";
            break;
        case "animate":
            nextTheme = "videoElement";
            break;
        case "videoElement":
            nextTheme = "root";
            break;
        default:
            nextTheme = "root";
            break;
    }
    localStorage.setItem("theme", nextTheme);
    document.body.className = nextTheme;

    const logoIcon = dayNight.querySelector("i");
    switch (nextTheme) {
        case "root":
            logoIcon.classList.remove("fa-adjust", "fa-sun","fa-video-camera");
            logoIcon.classList.add("fa-moon");
            break;
        case "dark":
            logoIcon.classList.remove("fa-moon", "fa-sun","fa-video-camera");
            logoIcon.classList.add("fa-adjust");
            break;
        case "animate":
            logoIcon.classList.remove("fa-adjust", "fa-moon","fa-sun");
            logoIcon.classList.add("fa-video-camera");
            break;
        case "videoElement":
            logoIcon.classList.remove("fa-adjust", "fa-moon","fa-video-camera");
            logoIcon.classList.add("fa-sun");
            break;
        default:
            break;
    }
}

function applyThemeStyles(theme) {
    const rootStyles = `
        --bg-black-900:#f2f2fc;
        --bg-black-100:#fdf9ff;
        --bg-black-50:#e8dfec;
        --text-black-900:#302e4d;
        --text-black-700:#504e70;
    `;
    const darkStyles = `
        --bg-black-900:#161616;
        --bg-black-100:#1f1d1f;
        --bg-black-50:#302e4d;
        --text-black-900:#ffffff;
        --text-black-700:#f8effc;
    `;
    const animateStyles = `
        background: linear-gradient(-45deg, #f7bda6, #ffa8c9, #ade6ff, #9df9e3);
        --bg-black-900:transparent;
        --bg-black-100:transparent;
        --bg-black-50:#e8dfec;
        background-size: 1500% 1500%;
        animation: gradient 15s ease infinite;
        height: 100vh;
        --text-black-900:#302e4d;
        --text-black-700:#504e70;
    `;
    const videoStyles = `
        --bg-black-900: transparent;
        --bg-black-100: transparent;
        --bg-black-50:#e8dfec;
        --text-black-900:#ffffff;
        --text-black-700:#f8effc;
    `;

    const styles = {
        root: rootStyles,
        dark: darkStyles,
        animate: animateStyles,
        videoElement: videoStyles
    };

    document.documentElement.style.cssText = styles[theme];
}

window.addEventListener("load", () => {
    changeColor();
    changeTheme();
});

// Get the video element
const video = document.querySelector('.day-night video');

// Function to play the video when .videoElement theme is active
function playVideo() {
    video.play();
}

// Function to pause the video when .videoElement theme is not active
function pauseVideo() {
    video.pause();
}

// Function to check and adjust video playback state
function adjustVideoPlayback() {
    if (document.body.classList.contains('videoElement')) {
        playVideo();
    } else {
        pauseVideo();
    }
}

// Call the adjustVideoPlayback function initially to set the video playback state
adjustVideoPlayback();

// Add event listener for when the body class changes
document.body.addEventListener('click', adjustVideoPlayback);
