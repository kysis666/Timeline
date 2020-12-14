'use strict';

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const callbackFunc = () => {
	let lis = document.getElementsByTagName("li");
  [...lis].forEach((li) => {
  	if (isElementInViewport(li) == true) {
    	li.classList.add('isVisible');
    }
  });
}

window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);