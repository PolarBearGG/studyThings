let box = document.querySelector(".box"),
    btn = document.querySelector("button");

btn.addEventListener('click', function() {
    //box.style.height = box.scrollHeight + 'px';
    box.scrollTop = 0;
});

let width = box.clientWidth,
    height = box.clientHeight,
    offsetWidth = box.offsetWidth,
    offsetHeight = box.offsetHeight;

    // console.log(width);
    // console.log(height);
    // console.log(offsetWidth);
    // console.log(offsetHeight);
   // console.log(box.getBoundingClientRect().left);
    console.log(document.documentElement.clientHeight);

    scrollBy(0,200);
    scrollTo(0,200);