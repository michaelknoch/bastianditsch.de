document.getElementById("scroll-to-content").addEventListener("click", () => {
    $("html,body").animate(
        { scrollTop: $(".video-grid").offset().top },
        300,
        addVisibleClassToVisibleElements
    );
});

const onScroll = throttle(() => {
    window.requestAnimationFrame(function() {
        addVisibleClassToVisibleElements();
    });
}, 600);
window.addEventListener("scroll", onScroll);

function addVisibleClassToVisibleElements() {
    const elements = document.querySelectorAll(
        ".show-when-in-viewport:not(.visible)"
    );

    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add("visible");
        }
    });
}

// https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
function isElementInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < window.pageYOffset + window.innerHeight &&
        left < window.pageXOffset + window.innerWidth &&
        top + height > window.pageYOffset &&
        left + width > window.pageXOffset
    );
}

function throttle(fn, wait) {
    var time = Date.now();
    return function() {
        if (time + wait - Date.now() < 0) {
            fn();
            time = Date.now();
        }
    };
}
