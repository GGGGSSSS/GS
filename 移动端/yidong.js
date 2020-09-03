// window.onload = function() {

//     search();
//     banner();
//     downTime();
// }
// var search = function() {

// }

// var banner = function() {
//     var banner = document.querySelector('.banner');
//     var imageBox = document.querySelector('.banner ul:first-child');
//     var pointBox = document.querySelector('.banner ul:last-child');
//     var w = banner.offsetWidth;
//     var index = 0;
//     var timer = setInterval(function() {
//         index++;
//         var translatex = -index * w;
//         imageBox.style.transition = 'all .3s';
//         imageBox.style.transform = 'translateX(' + translatex + 'px)';

//     }, 2000);
//     imageBox.addEventListener('transitionend', function() {
//         if (index == 5) {
//             index = 0;
//             imageBox.style.transition = 'all 0s';
//             var translarex = -index * w;
//             imageBox.style.transform = 'translateX' + translarex + 'px';

//         } else if (index < 0) {
//             index = 4;
//             imageBox.style.transition = 'all 0s';
//             var translarex = -index * w;
//             imageBox.style.transform = 'translateX' + translarex + 'px';

//         }
//     })


// }
// var downTime = function() {

// }

window.addEventListener('load', function() {
    var banner = document.querySelector('.banner');
    var imageBox = banner.children[0];
    var pointBox = banner.children[1];
    var w = banner.offsetWidth;
    var index = 0;
    var timer = setInterval(function() {
        index++;
        var translatex = -index * w;
        imageBox.style.transition = 'all 0.3s';
        imageBox.style.transform = 'translateX(' + translatex + 'px)';

    }, 2000)

    imageBox.addEventListener('transitionend', function() {
        if (index >= 3) {
            index = 0;
            imageBox.style.transition = 'none';
            var translatex = -index * w;
            imageBox.style.transform = 'translateX(' + translatex + 'px)';

        } else if (index < 0) {
            index = 2;
            imageBox.style.transition = 'none';
            var translatex = -index * w;
            imageBox.style.transform = 'translateX(' + translatex + 'px)';

        }
        pointBox.querySelector('.now').classList.remove('now');
        pointBox.children[index].classList.add('now');
    });
    var startX = 0;
    var moveX = 0;
    var flag = false;
    imageBox.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        console.dir(e.targetTouches[0]);
        clearInterval(timer);

    })

    imageBox.addEventListener('touchmove', function(e) {
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = -index * w + moveX;
        imageBox.style.transition = 'none';
        imageBox.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;
        e.preventDefault();


    })
    imageBox.addEventListener('touchend', function(e) {
        if (flag = true) {
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--;
                } else {
                    index++;

                }
                var translatex = -index * w;
                imageBox.style.transition = 'all .3s';
                imageBox.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                var translatex = -index * w;
                imageBox.style.transition = 'all .2s';
                imageBox.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translatex = -index * w;
            imageBox.style.transition = 'all 0.3s';
            imageBox.style.transform = 'translateX(' + translatex + 'px)';

        }, 2000)




    })

})