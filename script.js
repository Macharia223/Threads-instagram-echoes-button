/* General button styles with responsive sizes */
#icon-button,
#cloned-button,
#back-button {
    width: 12vw;
    height: 12vw;
    max-width: 15vh;
    max-height: 15vh;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    background: transparent;
    border: none;
    cursor: pointer;
    transform: translate(-50%, -50%);
    z-index: 10;
}

#icon-button img,
#cloned-button img,
#back-button img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Initial background image */
#page-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("images/githome.png");
    background-size: cover;
    background-position: center;
    z-index: 1;
}

/* Scroll container for revealed content */
#scroll-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: none;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
}

/* Each scrollable page */
#scroll-container .scroll-page {
    width: 100vw;
    height: 100vh;
    flex-shrink: 0;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Images inside the revealed content */
#scroll-container .scroll-page img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

/* Hidden class */
.hidden {
    display: none;
}

/* Independent button positioning */
#icon-button {
    top: 32.2vh;
    left: 57.5vw;
}

#cloned-button {
    top: 90.1vh;
    left: 56vw;
}

#back-button {
    top: 10vh;
    left: 10vw;
}
