let HouMin = 0;

const clock = () => {
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes();

    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;

    HouMin = hours + ":" + minutes;
    document.getElementById("clok").innerHTML = HouMin;
    Timer = setTimeout("clock()", 1000);
}

window.requestAnimFrame = (() => {
    return window.requestAnimationFrame
})();

(() => {
    draw = () => {
            let now = new Date(),
                then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0),
                diffInMil = (now.getTime() - then.getTime()),
                s = (diffInMil / 1000);
            document.getElementById("sun").style.transform = `rotate(${(s * 6)}deg)`;
        }
        (loop = () => {
            requestAnimFrame(loop);
            draw();
        })();
})();