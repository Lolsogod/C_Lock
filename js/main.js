let HouMin = 0;

const clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;

    HouMin = hours + ":" + minutes;
    document.getElementById("clok").innerHTML = HouMin;
    Timer = setTimeout("clock()", 1000);
}

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

(function clock() {
    (function loop() {
        requestAnimFrame(loop);
        draw();
    })();

    function draw() {
        var now = new Date(), //now
            then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0),
            diffInMil = (now.getTime() - then.getTime()),
            h = (diffInMil / (1000 * 60 * 60)),
            m = (h * 60),
            s = (m * 60);
        document.getElementById("sun").style.webkitTransform = "rotate(" + (s * 6) + "deg)";
    }
})();